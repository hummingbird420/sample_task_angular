import { Component, OnInit } from "@angular/core";
import { SignalRService } from "../../services/signalr.service";
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    username: string = 'John Doe';
    email: string = 'john.doe@example.com';
    numberOfUnseenNotifications: number = 2;
    constructor(private service: SignalRService) { }
    ngOnInit(): void {
        // this.service.listenForNotifications();
    }
    logout() { }
}