import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';
import { MenuData } from '../models/side-menu.model';

@Directive({
  selector: '[appMenu]'
})
export class MenuDirective implements OnInit {
  @Input('appMenu') menuItems: MenuData[] = []; // Input to receive the menu data

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderMenu();
  }

  private renderMenu(): void {
    const ul = this.renderer.createElement('ul');
    this.renderer.addClass(ul, 'nav');
    this.renderer.addClass(ul, 'flex-column');

    this.menuItems.forEach((menu) => {
      const li = this.renderer.createElement('li');
      this.renderer.addClass(li, 'nav-item');

      const a = this.renderer.createElement('a');
      this.renderer.setAttribute(a, 'href', menu.pageUrl);
      this.renderer.addClass(a, 'nav-link');
      this.renderer.addClass(a, 'text-white');
      this.renderer.setProperty(a, 'innerHTML', menu.pageName);

      // Add link to the list item
      this.renderer.appendChild(li, a);
      this.renderer.appendChild(ul, li);
    });

    // Append the menu to the element where the directive is used
    this.renderer.appendChild(this.el.nativeElement, ul);
  }
}
