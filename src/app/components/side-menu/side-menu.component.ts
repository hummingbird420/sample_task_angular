import { Component, OnInit } from "@angular/core";
import { MenuData } from "../../models/side-menu.model";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  menus: MenuData[] = [
    { pageName: 'Home', pageUrl: '/home' },
    { pageName: 'About', pageUrl: '/about' },
    { pageName: 'Contact', pageUrl: '/contact' }
  ];
  constructor() {
    const token = localStorage.getItem('_TOKEN_')?.toString() ?? '';
    if (!token) {
      this.menus = [
        { pageName: 'Sign-In', pageUrl: '/auth/sign-in' },
        { pageName: 'Sign-Up', pageUrl: '/auth/sign-up' }
      ]
    }
  }

  ngOnInit(): void { }
}