import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {
    @Input() title!: string;
    @Input() message!: string;
    @Input() confirmButtonText: string = "Yes";
    @Input() cancelButtonText: string = "No";

    constructor(public activeModal: NgbActiveModal) { }

    confirm() {
        this.activeModal.close(true);
    }

    cancel() {
        this.activeModal.dismiss(false);
    }
}
