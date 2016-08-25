import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";

import {AppComponent} from "./components/app/app.component";
import {HeroesComponent} from "./components/heroes/heroes.component";
import {HeroDetailComponent} from "./components/hero-detail/hero-detail.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";

import {HeroService} from "./services/hero.service";

import {Routing} from "./app.routing";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        Routing
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroesComponent,
        HeroDetailComponent
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        HeroService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
