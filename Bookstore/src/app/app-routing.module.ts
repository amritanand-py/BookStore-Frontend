import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { BookDetailPageComponent } from './Components/book-detail-page/book-detail-page.component';

const routes: Routes = [
  {
    path:'dashboard',
    component:DashBoardComponent
  },
  {
    path: 'Bookdetails/:id',
    component: BookDetailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
