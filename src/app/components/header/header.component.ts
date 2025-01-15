import { Component, OnInit } from "@angular/core";
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    username: string = 'John Doe';
    email: string = 'john.doe@example.com';
    numberOfUnseenNotifications: number = 2;
    ngOnInit(): void { }
    logout() { }
}