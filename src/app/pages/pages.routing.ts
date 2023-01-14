import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { ContenedoresComponent } from './boostrap/contenedores/contenedores.component';



const routes: Routes = [
    
    {path: 'boostrap', component: PagesComponent,
    children: [
        {path: 'contenedores', component: ContenedoresComponent}
    ]    
}

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
       
    
    ],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
