import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FeedRoutingModule } from './feed.routing.module';
import { FeedAppComponent } from './app.component';
import { FeedService } from './services/feed.service';
import { HttpClientModule } from '@angular/common/http';
import { FeedListComponent } from './components/feed-list/feed-list.component';
import { CyberCardComponent } from './components/cyber-card/cyber-card.component';

@NgModule({
  declarations: [
    CyberCardComponent,
    FeedAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent,
    FeedListComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FeedRoutingModule,
    HttpClientModule,
  ],
  providers: [FeedService],
})
export class FeedModule {}
