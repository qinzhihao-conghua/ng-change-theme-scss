import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/main.module';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './views/header/header.component';
import { MiddleComponent } from './views/middle/middle.component';
import { BottomComponent } from './views/bottom/bottom.component';
import { BottonComponent } from './comp/botton/botton.component';
import { CommonComponent } from './views/content-detail/common/common.component';
import { ZhFontComponent } from './views/content-detail/zh-font/zh-font.component';
import { KendouiComponent } from './views/content-detail/kendoui/kendoui.component';
import { NgZorroComponent } from './views/content-detail/ng-zorro/ng-zorro.component';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { registerLocaleData } from '@angular/common';
import { NZ_I18N, zh_CN, NgZorroAntdModule } from 'ng-zorro-antd';
import zh from '@angular/common/locales/zh';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(zh);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MiddleComponent,
    BottomComponent,
    BottonComponent,
    CommonComponent,
    ZhFontComponent,
    KendouiComponent,
    NgZorroComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    TreeViewModule,
    BrowserAnimationsModule,
    DialogsModule,
    NgZorroAntdModule,
    HttpClientModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
