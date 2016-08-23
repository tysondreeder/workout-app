import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA} from 'angular2-in-memory-web-api';
import { InMemoryDataService }              from './hero/in-memory-data.service';

import { AppComponent }  from './app.component';
import { routing } from './app.routing';

import { HeroesComponent } from './hero/heroes.component';
import { HeroDetailComponent } from './hero/hero-detail.component';
import { HeroService } from './hero/hero.services';
import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        DashboardComponent,
        HeroDetailComponent
    ],
    providers: [
        HeroService,
        { provide: XHRBackend, useClass: InMemoryBackendService },
        { provide: SEED_DATA, useClass: InMemoryDataService }
    ],
    bootstrap:    [
        AppComponent

    ]
})
export class AppModule {}
/**
 * Created by jam on 8/10/16.
 */
