import { Component, inject } from '@angular/core';
import { ToastService } from '../../services/toast-service';

@Component({
  selector: 'app-toasts',
  template: `
    <ngb-toast
      *ngFor="let toast of toastService.toasts"  
      [class]="toast.classname"
      [autohide]="true"
      [delay]="toast.delay || 5000"
      (hidden)="toastService.remove(toast)"
    >
      <ng-template [ngTemplateOutlet]="toastTemplate" [ngTemplateOutletContext]="{ $implicit: toast }"></ng-template>
      <ng-template #toastTemplate >
      {{ getToastTemplate(toast) }}
      </ng-template>
    </ngb-toast>

    
  `,
  host: { class: 'toast-container position-fixed top-0 end-0 p-3', style: 'z-index: 1200' },
})
export class ToastsContainer {
  toastService = inject(ToastService);

  constructor() {
    console.log(this.toastService.toasts);  // Now it will log an array of toasts
  }
  //toast.template
  getToastTemplate(toast: any) {
    console.log(this.toastService.toasts);

    console.log(toast);
    return toast.template;
  }
}
