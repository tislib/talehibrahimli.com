// generate.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import handlebars from 'handlebars';
import puppeteer from 'puppeteer';
import * as sass from 'sass';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generatePdf(jsonPathArg) {
    // 1. Resolve JSON path (can be relative or absolute)
    const jsonFullPath = path.isAbsolute(jsonPathArg)
        ? jsonPathArg
        : path.resolve(process.cwd(), jsonPathArg);

    // 2. Derive output PDF path (same dir, same name, .pdf)
    const jsonDir = path.dirname(jsonFullPath);
    const jsonBase = path.basename(jsonFullPath, path.extname(jsonFullPath));
    const pdfPath = path.join(jsonDir, `${jsonBase}.pdf`);

    // 3. Load JSON data
    const rawData = fs.readFileSync(jsonFullPath, 'utf8');
    const jsonData = JSON.parse(rawData);

    // 4. Load Handlebars template
    const templatePath = path.join(__dirname, 'template.hbs');
    if (!fs.existsSync(templatePath)) {
        throw new Error(`Template not found at: ${templatePath}`);
    }
    const templateSource = fs.readFileSync(templatePath, 'utf8');
    const template = handlebars.compile(templateSource);

    // 5. Compile SCSS
    const scssPath = path.join(__dirname, 'resume.scss');
    let css = '';
    if (fs.existsSync(scssPath)) {
        const result = sass.compile(scssPath);
        css = result.css;
    }

    // 6. Render HTML
    const html = template({ ...jsonData, css });

    // 6. Generate PDF with Puppeteer
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    try {
        const page = await browser.newPage();
        await page.setContent(html, { waitUntil: 'networkidle0' });

        await page.pdf({
            path: pdfPath,
            format: 'A4',
            printBackground: true,
            margin: {
                top: '10mm',
                right: '10mm',
                bottom: '10mm',
                left: '10mm'
            }
        });
        console.log('PDF generated at:', pdfPath);
    } finally {
        await browser.close();
    }
}

// CLI usage: node generate.js /path/to/file.json
const jsonArg = process.argv[2];

if (!jsonArg) {
    console.error('Usage: node generate.js <path-to-json>');
    process.exit(1);
}

generatePdf(jsonArg).catch((err) => {
    console.error(err);
    process.exit(1);
});
