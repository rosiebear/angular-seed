import {Injectable} from 'angular2/core';
import {Http, URLSearchParams} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  constructor(private http: Http){}

  getUsers(){
    return this.makeRequest();
  }

  private makeRequest(){
    let url = `http://localhost:3001/random-user`;
    return this.http.get(url)
      .map((res) => res.json());
  }
}
