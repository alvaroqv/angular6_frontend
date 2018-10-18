import { Component, OnInit, Input } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { BreadcrumbService } from 'src/app/core/layout/breadcrumb/breadcrumb.service';
import { Subscription } from 'rxjs/internal/Subscription';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

 @Input() loading: Boolean= false;
 @Input() home: MenuItem;
  itemsMenu: MenuItem[];
  itemsMenuBreadCrumb: MenuItem[];
//  home: MenuItem;
  itemSubscription:Subscription;
  textData;
  textSub;

  constructor(public breadcrumbService:BreadcrumbService) { 

   }

  ngOnInit() {

    this.itemsMenu = [
        {
            label: 'Administrar Participantes',
            icon: 'fa fa-users',
            routerLink:['admin-usuarios']
        },
        {
            label: 'Administrar Sorteios',
            icon: 'fa fa-gift',
            routerLink:['admin-sorteios']
        },
      {
          label: 'Administrar a Ferramenta',
          icon: 'fa fa-briefcas',
          items: [
             {label: 'Administrar Usuários', icon: 'pi pi-fw pi-user'},  
             {
                  label: 'Relatórios', icon: 'fa fa-table',
                  items: [
                      {label: 'Acessos', icon: 'fa fa-square-o',routerLink:['admin-sorteios1'] },
                      {label: 'Interação', icon: 'fa fa-check-square-o'}
                  ]
              },
              {separator: true},
              {label: 'Bloquear IP', icon: 'fa fa-minus-circle'}
          ]
      }, 
    ];
   // this.home = {icon: 'pi pi-home'};
  }
}
