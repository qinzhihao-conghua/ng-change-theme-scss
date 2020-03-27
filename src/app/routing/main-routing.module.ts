import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MiddleComponent } from '../middle/middle.component';
import { ContentDetailComponent } from '../content-detail/content-detail.component';

const routes: Routes = [
  { path: '', component: MiddleComponent },
  { path: 'test', component: ContentDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
