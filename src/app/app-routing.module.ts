import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { TestComponent } from './Pages/test/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'test',component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
