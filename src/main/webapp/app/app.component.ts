import {Component} from "@angular/core";

@Component({
    selector: 'ng2',
    styleUrls: ['app/app.component.css'],
    template: `
        <h1>{{title}}</h1>
            <nav>
                <a routerLink="/dashboard" routerLinkActive="active">最爱榜</a>
                <a routerLink="/heroes" routerLinkActive="active">英雄榜</a>
            </nav>
        <router-outlet></router-outlet>
    `
})

export class AppComponent {
    title = '无双三国';
}
