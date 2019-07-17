import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-trigger',
  templateUrl: './trigger.component.html',
  styleUrls: ['./trigger.component.scss']
})
export class TriggerComponent implements OnInit {

  constructor(
    protected dataService: DataService
  ) {
  }

  ngOnInit() {
  }

  getFoo() {
    this.dataService.getData('foo');
  }

  getBar() {
    this.dataService.getData('bar');
  }

}
