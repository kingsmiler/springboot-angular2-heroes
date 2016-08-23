import {Component} from "@angular/core";
import {Hero} from "./hero";

@Component({
    selector: 'ng2',
    styles: [`
        .selected {
            background-color: #CFD8DC !important;
            color: white;
        }
        .heroes {
            margin: 0 0 2em 0;
            list-style-type: none;
            padding: 0;
            width: 15em;
        }
        .heroes li {
            cursor: pointer;
            position: relative;
            left: 0;
            background-color: #EEE;
            margin: .5em;
            padding: .3em 0;
            height: 1.6em;
            border-radius: 4px;
        }
        .heroes li.selected:hover {
            background-color: #BBD8DC !important;
            color: white;
        }
        .heroes li:hover {
            color: #607D8B;
            background-color: #DDD;
            left: .1em;
        }
        .heroes .text {
            position: relative;
            top: -3px;
        }
        .heroes .badge {
            display: inline-block;
            font-size: small;
            color: white;
            padding: 0.8em 0.7em 0 0.7em;
            background-color: #607D8B;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -4px;
            height: 1.8em;
            margin-right: .8em;
            border-radius: 4px 0 0 4px;
        }
    `],
    template: `
        <h1>{{title}}</h1>
        <h2>英雄榜</h2>
        <ul class="heroes">
            <li *ngFor="let hero of heroes" 
                  [class.selected]="hero === selectedHero"
                  (click)="onSelect(hero)">
                <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
         </ul>
         <hd [hero]="selectedHero"></hd>
    `
})

export class AppComponent {
    title = '无双三国';
    heroes = HEROES;
    selectedHero: Hero;

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
}

const HEROES: Hero[] = [
    {id: 11, name: '关羽'},
    {id: 12, name: '张飞'},
    {id: 13, name: '赵云'},
    {id: 14, name: '黄忠'},
    {id: 15, name: '马超'},
    {id: 16, name: '张辽'},
    {id: 17, name: '张郃'},
    {id: 18, name: '庞德'},
    {id: 19, name: '周瑜'},
    {id: 20, name: '孙策'}
];
