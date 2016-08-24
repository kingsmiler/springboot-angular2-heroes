import {Component} from "@angular/core";

@Component({
    selector: 'ng2',
    template: `
        <h1>{{title}}</h1>
        <ng2-heroes></ng2-heroes> 
    `
})

export class AppComponent {
    title = '无双三国';
}
