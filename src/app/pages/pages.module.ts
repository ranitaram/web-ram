import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoostrapComponent } from './boostrap/boostrap.component';
import { ContenedoresComponent } from './boostrap/contenedores/contenedores.component';
import { BlogComponent } from './blog/blog.component';
import { PagesComponent } from './pages.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    BoostrapComponent,
    ContenedoresComponent,
    BlogComponent,
    PagesComponent,
    
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    BoostrapComponent,
    ContenedoresComponent,
    BlogComponent,
    PagesComponent,
    
  ]
})
export class PagesModule { }
