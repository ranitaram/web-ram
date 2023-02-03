import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoostrapComponent } from './boostrap/boostrap.component';
import { ContenedoresComponent } from './boostrap/contenedores/contenedores.component';
import { BlogComponent } from './blog/blog.component';
import { PagesComponent } from './pages.component';
import { AppRoutingModule } from '../app-routing.module';

import { NeonbuttonsComponent } from './buttons/neonbuttons/neonbuttons.component';
import { FancybuttonsComponent } from './buttons/fancybuttons/fancybuttons.component';
import { GradientbuttonhoverComponent } from './buttons/gradientbuttonhover/gradientbuttonhover.component';
import { AnimationbuttonsComponent } from './buttons/animationbuttons/animationbuttons.component';
import { SharedModule } from '../shared/shared.module';

import { ButtonhovereffectswitboxShadowComponent } from './buttons/buttonhovereffectswitbox-shadow/buttonhovereffectswitbox-shadow.component';



@NgModule({
  declarations: [
    BoostrapComponent,
    ContenedoresComponent,
    BlogComponent,
    PagesComponent,
    NeonbuttonsComponent,
    FancybuttonsComponent,
    GradientbuttonhoverComponent,
    AnimationbuttonsComponent,
    
    ButtonhovereffectswitboxShadowComponent,
    
    
    
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [
    BoostrapComponent,
    ContenedoresComponent,
    BlogComponent,
    PagesComponent,
    NeonbuttonsComponent,
    FancybuttonsComponent,
    GradientbuttonhoverComponent,
    AnimationbuttonsComponent,
    
    ButtonhovereffectswitboxShadowComponent
  ]
})
export class PagesModule { }
