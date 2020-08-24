import {AfterContentInit, Component} from '@angular/core';
import {Router} from '@angular/router';

import * as test1 from 'raw-loader!./blog/test1.html';

console.log(test1);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {
  title = 'talehibrahimlicom';

  constructor(private router: Router) {
    const path = localStorage.getItem('path');

    if (path) {
      localStorage.removeItem('path');
      this.router.navigate([path]);
    }
  }

  ngAfterContentInit(): void {
    window['matchHeiht']();
    window['mainScript']();
  }


}
