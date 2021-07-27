import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FeedService } from '../../services/feed.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {
  description: string;

  constructor(public feedService: FeedService) {
    this.description = '';
  }

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    this.feedService.add(form.value);
    this.delete();
  }

  delete() {
    this.description = '';
  }
}
