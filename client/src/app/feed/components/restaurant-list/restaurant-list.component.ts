import { Component, OnInit, ViewChild } from '@angular/core';
import { FeedService } from '../../services/feed.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss'],
})
export class RestaurantListComponent implements OnInit {

  constructor(public restaurantService: RestaurantService
  ) {}

  ngOnInit() {
  }
}
