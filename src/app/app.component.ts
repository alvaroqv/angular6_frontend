import { Component, AfterViewInit } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationError, ActivatedRoute } from '@angular/router';
import { Event } from '@angular/router/src/events';
import { NavigationEnd } from '@angular/router';
import { LoaderService } from 'src/app/core/layout/loader/loader.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ResolveStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/internal/operators/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  title = 'app';
  loading:boolean;
  home = {icon: 'pi pi-home'}


  constructor(private router: Router, private activatedRoute: ActivatedRoute,private loader:LoaderService) {
    this.loading = true;
  }


 init(): void {

    this.activatedRoute.data.forEach( d => console.log(d));

}

    ngAfterViewInit() {
        this.router.events
            .subscribe((event) => {
                if(event instanceof NavigationStart) {
                    this.loading = true;
                    this.loader.open("Carregando Geral");
                  this.init();
                }
                else if (
                    event instanceof NavigationEnd || 
                    event instanceof NavigationCancel ||
                    event instanceof NavigationError
                    ) {

                    this.loading =false;
                    this.loader.close();
                }
            });
    }
}
