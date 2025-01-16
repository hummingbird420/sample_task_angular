import { Injectable } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ConfirmDialogComponent } from "../components/confirm-dialog/confirm-dialog.component";


@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {
  constructor(private modalService: NgbModal) { }

  confirm(
    title: string,
    message: string,
    confirmButtonText: string = "Yes",
    cancelButtonText: string = "No"
  ): Promise<boolean> {
    const modalRef = this.modalService.open(ConfirmDialogComponent, {
      backdrop: 'static',
      keyboard: false,
    });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.confirmButtonText = confirmButtonText;
    modalRef.componentInstance.cancelButtonText = cancelButtonText;

    return modalRef.result;
  }
}
