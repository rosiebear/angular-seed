import {Injectable} from 'angular2/core';

@Injectable()
export class AuthTokenService {
  key = 'auth-token';
  store = window.localStorage;

  getToken(){
    return this.store.getItem(this.key);
  }

  setToken(token?: string){
    if(token) {
      this.store.setItem(this.key, token);
    } else {
      this.store.removeItem(this.key);
    }
  }

}
