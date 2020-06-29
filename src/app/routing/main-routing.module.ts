import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonComponent } from '../views/content-detail/common/common.component';
import { KendouiComponent } from '../views/content-detail/kendoui/kendoui.component';
import { NgZorroComponent } from '../views/content-detail/ng-zorro/ng-zorro.component';
import { ZhFontComponent } from '../views/content-detail/zh-font/zh-font.component';

const routes: Routes = [
  { path: '', component: CommonComponent },
  { path: 'common', component: CommonComponent },
  { path: 'kendoui', component: KendouiComponent },
  { path: 'ng-zorro', component: NgZorroComponent },
  { path: 'zh-font', component: ZhFontComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
