import { Injectable } from '@angular/core';

export interface Toast {
    template: string;
    classname?: string;
    delay?: number;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
    toasts: Toast[] = [];

    show(flag: number, msg: string) {
        let toast: Toast = { template: msg, delay: 5000 };

        if (flag === 1) {
            toast.classname = 'bg-success text-light';
        } else if (flag === 2) {
            toast.classname = 'bg-danger text-light';
        } else if (flag === 3) {
            toast.classname = 'bg-warning text-light';
        }

        this.toasts.push(toast);
        setTimeout(() => {
            this.remove(toast);
        }, toast.delay || 5000);
    }

    remove(toast: Toast) {
        const index = this.toasts.indexOf(toast);
        if (index > -1) {
            this.toasts.splice(index, 1);
        }
    }

    clear() {
        this.toasts = [];
    }
}
