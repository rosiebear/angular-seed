import {Component} from 'angular2/core';
import {UserService} from '../../services/users';
import {Observable} from 'rxjs/Observable';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'user-list',
  templateUrl: 'app/components/login/login.html',
  providers: [UserService],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
export class Login {
  users:Observable<any>;

  constructor(private userService:UserService) {
    this.getRandomUser();
  }

  getRandomUser(){
    this.userService.getUsers().subscribe(users => this.users = users);
  }
}
