import { Component, Input } from '@angular/core';
import {Hero} from "./hero";

@Component({
    selector: 'hd',
    template: `
        <div *ngIf="hero">
            <h2>{{hero.name}} 详情!</h2>
            <div>
                <label>编号: </label>{{hero.id}}
            </div>
            <div>
                <label>姓名: </label>
                <input [(ngModel)]="hero.name" placeholder="name"/>
            </div>
        </div>
    `
})
export class HeroDetailComponent {
    @Input()
    hero: Hero;
}
