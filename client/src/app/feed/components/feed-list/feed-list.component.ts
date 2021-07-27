import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FeedService } from '../../services/feed.service';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss'],
})
export class FeedListComponent implements OnInit {

  constructor(public feedService: FeedService
  ) {}

  ngOnInit() {
    this.feedService.getCards();
  }
}
