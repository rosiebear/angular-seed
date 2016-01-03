import {Injectable} from 'angular2/core';
import {Http, URLSearchParams, Headers} from 'angular2/http';
import {AuthTokenService} from './authToken.service';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  headers = new Headers();
  authHeader = new Headers();
  authTokenService = new AuthTokenService();

  constructor(private http: Http){
    this.headers.append('Content-Type', 'application/json');
  }

  login(model){
    return this.http.post('http://localhost:3001/login',
      JSON.stringify(model), {
        headers: this.headers
      })
  }

  getUsers(){
    return this.makeRequest();
  }

  private makeRequest(){
    let authToken = this.authTokenService.getToken();
    if(authToken){
      this.authHeader.append('Authorization', 'Bearer ' + authToken);
    }
    let url = `http://localhost:3001/random-user`;
    return this.http.get(url, {
        headers: this.authHeader
      })
      .map((res) => res.json());
  }
}
