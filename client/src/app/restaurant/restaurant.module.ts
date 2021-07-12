import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RestaurantRoutingModule } from './restaurant.routing.module';
import { RestaurantAppComponent } from './app.component';
import { RestaurantService } from './services/restaurant.service';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { SaveDataDialogComponent } from './components/save-data-dialog/save-data-dialog.component';

@NgModule({
  declarations: [
    RestaurantAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent,
    RestaurantListComponent,
    SaveDataDialogComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RestaurantRoutingModule,
    HttpClientModule,
  ],
  providers: [RestaurantService],
})
export class RestaurantModule {}
