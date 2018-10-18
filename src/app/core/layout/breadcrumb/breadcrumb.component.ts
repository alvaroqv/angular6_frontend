import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart, NavigationCancel, NavigationError } from '@angular/router';
import { Event } from '@angular/router/src/events';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  title = 'Ng-Teams';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    }

    
  ngOnInit() {
    //breadcrumbs$ = this.router.events;
  }

}
