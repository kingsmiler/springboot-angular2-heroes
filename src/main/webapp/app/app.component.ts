import { Component } from '@angular/core';
export class Hero {
    id: number;
    name: string;
}
@Component({
    selector: 'ng2',
    template: `
    <h1>{{title}}</h1>    
    <h2>{{hero.name}} 详情!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
    `
})

export class AppComponent {
    title = '无双三国';
    hero: Hero = {
        id: 1,
        name: '关羽'
    };
}
