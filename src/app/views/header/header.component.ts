import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  theme = 'light';
  linkDom: HTMLLinkElement;
  ngOnInit() {
  }
  changeTheme(): void {
    if (!this.linkDom) {
      this.linkDom = document.createElement('link');
      this.linkDom.rel = 'stylesheet';
    }
    const body = document.getElementsByTagName('body')[0];
    if (this.theme === 'light') {
      this.theme = 'dark';
      body.setAttribute('zh-theme', this.theme);
      this.linkDom.href = '../../../assets/all.dark.min.css';
    } else {
      this.theme = 'light';
      body.setAttribute('zh-theme', this.theme);
      this.linkDom.href = '../../../assets/all.light.min.css';
    }
    document.head.appendChild(this.linkDom);
  }
}
