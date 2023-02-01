import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoostrapComponent } from './boostrap/boostrap.component';
import { ContenedoresComponent } from './boostrap/contenedores/contenedores.component';
import { BlogComponent } from './blog/blog.component';
import { PagesComponent } from './pages.component';
import { AppRoutingModule } from '../app-routing.module';

import { NeonbuttonsComponent } from './buttons/neonbuttons/neonbuttons.component';
import { FancybuttonsComponent } from './buttons/fancybuttons/fancybuttons.component';



@NgModule({
  declarations: [
    BoostrapComponent,
    ContenedoresComponent,
    BlogComponent,
    PagesComponent,
    NeonbuttonsComponent,
    FancybuttonsComponent,
    
    
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
    NeonbuttonsComponent,
    FancybuttonsComponent
  ]
})
export class PagesModule { }
