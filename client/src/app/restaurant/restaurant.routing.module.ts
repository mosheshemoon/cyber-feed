import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';import { MainContentComponent } from './components/main-content/main-content.component';
import { RestaurantAppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: RestaurantAppComponent, 
  children: [
    {path:'', component: MainContentComponent},
  ]},
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantRoutingModule {}
