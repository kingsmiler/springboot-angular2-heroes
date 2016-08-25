import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {Hero} from "../../models/hero";
import {HeroService} from "../../services/hero.service";

@Component({
    moduleId: __moduleName,
    selector: 'hd',
    templateUrl : 'hero-detail.component.html',
    styleUrls : ['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    hero: Hero;

    constructor(private heroService: HeroService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        });
    }

    goBack() {
        window.history.back();
    }

}
