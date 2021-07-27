import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';import { MainContentComponent } from './components/main-content/main-content.component';
import { FeedAppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: FeedAppComponent, 
  children: [
    {path:'', component: MainContentComponent},
  ]},
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedRoutingModule {}
