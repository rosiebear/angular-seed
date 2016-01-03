import {Component} from 'angular2/core';
import {UserService} from '../../services/users';
import {AuthTokenService} from '../../services/authToken.service.ts';
import {Observable} from 'rxjs/Observable';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'user-list',
  templateUrl: 'app/components/login/login.html',
  providers: [UserService, AuthTokenService],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
export class Login {
  model: any;
  randomUser: any;
  userSession: any;

  constructor(private userService:UserService, private authTokenService: AuthTokenService) {
    this.getRandomUser();
    this.model = {
      username: "em",
      password: "p"
    };
  }

  login() {
    this.userService.login(this.model)
      .map(res => res.json())
      .subscribe(res => {
        this.authTokenService.setToken(res.token);
        this.userSession = res;
      });
  }

  logout(){
    this.authTokenService.setToken();
    this.userSession = undefined;
  }

  getRandomUser(){
    this.userService.getUsers().subscribe(user => this.randomUser = user);
  }
}
