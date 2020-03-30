import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/main.module';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './views/header/header.component';
import { MiddleComponent } from './views/middle/middle.component';
import { BottomComponent } from './views/bottom/bottom.component';
import { ContentDetailComponent } from './views/content-detail/content-detail.component';
import { BottonComponent } from './comp/botton/botton.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MiddleComponent,
    BottomComponent,
    ContentDetailComponent,
    BottonComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    TreeViewModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
