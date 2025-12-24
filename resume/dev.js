// dev.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import handlebars from 'handlebars';
import * as sass from 'sass';
import browserSync from 'browser-sync';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const bs = browserSync.create();

function renderHtml(jsonPath) {
    try {
        const jsonFullPath = path.resolve(process.cwd(), jsonPath);
        const jsonData = JSON.parse(fs.readFileSync(jsonFullPath, 'utf8'));

        const templatePath = path.join(__dirname, 'template.hbs');
        const templateSource = fs.readFileSync(templatePath, 'utf8');
        const template = handlebars.compile(templateSource);

        const scssPath = path.join(__dirname, 'resume.scss');
        let css = '';
        if (fs.existsSync(scssPath)) {
            const result = sass.compile(scssPath);
            css = result.css;
        }

        return template({ ...jsonData, css });
    } catch (err) {
        return `<h1>Error</h1><pre>${err.stack}</pre>`;
    }
}

const jsonArg = process.argv[2] || 'variants/main.json';

bs.init({
    server: {
        baseDir: '.',
        middleware: [
            {
                route: '/',
                handle: (req, res) => {
                    const html = renderHtml(jsonArg);
                    res.setHeader('Content-Type', 'text/html');
                    res.end(html);
                }
            }
        ]
    },
    files: [
        'template.hbs',
        'resume.scss',
        'variants/*.json'
    ],
    open: true,
    notify: false
});

console.log(`Watching for changes in template.hbs, resume.scss and ${jsonArg}...`);
