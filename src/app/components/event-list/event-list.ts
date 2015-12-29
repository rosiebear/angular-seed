import {Component} from 'angular2/core';
import {Event} from '../../services/events';
import {Observable} from 'rxjs/Observable';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'event-list',
  templateUrl: 'app/components/event-list/event-list.html',
  styleUrls: ['app/components/event-list/event-list.css'],
  providers: [Event],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
export class EventList {
  events:Observable<any>;

  constructor(event:Event) {
    this.events = event.getEvents();
  }
}
