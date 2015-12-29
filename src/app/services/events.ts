import {Injectable} from 'angular2/core';
import {Http, URLSearchParams} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Event {
  constructor(private http: Http){}

  getEvents(){
    return this.makeRequest();
  }

  private makeRequest(){
    let url = `http://localhost:3000/calendars`;
    return this.http.get(url)
      .map((res) => res.json());
  }
}
