import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Data } from '../interfaces/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = new BehaviorSubject<Data>(null);

  constructor(
    protected httpClient: HttpClient
  ) {
    this.getData('foo'); // by default load foo
  }

  get data$(): Observable<Data> {
    return this.data.pipe(
      filter(data => !!data)
    );
  }

  getData(name: 'foo' | 'bar') {
    this.httpClient.get<Data>(`assets/${name}.json`).subscribe(data => {
      this.data.next(data);
    });
  }
}
