import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MiddleComponent } from '../views/middle/middle.component';
import { ContentDetailComponent } from '../views/content-detail/content-detail.component';

const routes: Routes = [
  { path: '', component: MiddleComponent },
  { path: 'test', component: ContentDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
