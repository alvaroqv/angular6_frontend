import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { BreadcrumbService } from 'src/app/core/layout/breadcrumb/breadcrumb.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { LoaderService } from 'src/app/core/layout/loader/loader.service';
import { NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Router } from '@angular/router';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, AfterViewInit {
    [x: string]: any;

 @Input() loading: Boolean= false;
 @Input() home: MenuItem;
  itemsMenu: MenuItem[];
  itemsMenuBreadCrumb: MenuItem[];
//  home: MenuItem;
  itemSubscription:Subscription;
  textData;
  textSub;

  constructor(public breadcrumbService:BreadcrumbService, private loader:LoaderService,private router: Router) { 

   }

  ngOnInit() {

    this.itemsMenu = [
        {
            label: 'Exemplo de CRUD',
            icon: 'fa fa-users',
            routerLink:['admin-usuarios']
        },
 
        {
            label: 'Administrar Usuários',
            icon: 'fa fa-gift',
            routerLink:['admin-sorteios']
        },

      {
          label: 'Exemplos de Componentes',
          icon: 'fa fa-briefcas',
          items: [
             
            {label: 'DashBoard', icon: 'fa fa-gift', routerLink:['exemplo/dashboard'] } ,
            {label: 'Gráficos', icon: 'fa fa-gift', routerLink:['exemplo/grafico'] } ,
            {label: 'Drag and Drop', icon: 'fa fa-gift', routerLink:['exemplo/dragdrop'] } ,
            {label: 'Mapas', icon: 'fa fa-gift', routerLink:['exemplo/mapas'] } ,
            {label: 'Passo a Passo', icon: 'fa fa-gift', routerLink:['exemplo/steps'] } ,
            {label: 'CRUD Table', icon: 'fa fa-gift', routerLink:['exemplo/crudtable'] } ,
            {label: 'Calendario', icon: 'fa fa-gift', routerLink:['exemplo/calendario'] } ,

             {label: 'Componentes Material', icon: 'pi pi-fw pi-user',
                  items: [
                      {label: 'Acessos', icon: 'fa fa-square-o',routerLink:['admin-sorteios1'] },
                      {label: 'Interação', icon: 'fa fa-check-square-o'}
                  ]
              },
              {label: 'Icones', icon: 'pi pi-fw pi-user',
                   items: [
                       {label: 'Acessos', icon: 'fa fa-square-o',routerLink:['admin-sorteios1'] },
                       {label: 'Interação', icon: 'fa fa-check-square-o'}
                   ]
               },
               {label: 'Formulários', icon: 'pi pi-fw pi-user',
                    items: [
                        {label: 'Acessos', icon: 'fa fa-square-o',routerLink:['admin-sorteios1'] },
                        {label: 'Interação', icon: 'fa fa-check-square-o'}
                    ]
                },
                {label: 'Tabelas', icon: 'pi pi-fw pi-user',
                     items: [
                         {label: 'Acessos', icon: 'fa fa-square-o',routerLink:['admin-sorteios1'] },
                         {label: 'Interação', icon: 'fa fa-check-square-o'}
                     ]
                 },
                 {label: 'Extras', icon: 'pi pi-fw pi-user',
                      items: [
                          {label: 'Acessos', icon: 'fa fa-square-o',routerLink:['admin-sorteios1'] },
                          {label: 'Interação', icon: 'fa fa-check-square-o'}
                      ]
                  },
          ]
      }, 
    ];
   // this.home = {icon: 'pi pi-home'};
  }

  init(): void {
   // this.activatedRoute.data.forEach( d => console.log(d));
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
