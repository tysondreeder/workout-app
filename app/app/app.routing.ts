import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './hero/heroes.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroDetailComponent } from "./hero/hero-detail.component";

const appRoutes: Routes = [
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);
/**
 * Created by admin on 8/16/16.
 */
