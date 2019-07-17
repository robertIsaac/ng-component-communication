import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.scss']
})
export class ShowDataComponent implements OnInit {

  data$ = this.dataService.data$;

  constructor(
    protected dataService: DataService
  ) {
  }

  ngOnInit() {
  }

}
