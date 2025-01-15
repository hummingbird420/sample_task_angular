import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";

@Component({
    selector: 'app-page',
    template: `
    <app-header></app-header>
      <div class="body-component">
        <app-side-menu></app-side-menu>
        <section class="content">
          <router-outlet></router-outlet>
        </section>
      </div>
    `,
    styles: `:host {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    
    div.body-component {
        display: flex;
        flex-direction: row;
        gap: 16px;
    
        .content {
            width: calc(100vw - 284px);
        }
    
    
    }`
})
export class PageComponent implements OnInit {
    dead$ = new Subject();

    constructor(

    ) { }
    ngOnInit(): void {

    }
    //
    navigateMenu(link: string) {

    }
    goBack() {

    }
    openFirstMenu() {

    }
    closeMenu() {

    }

}