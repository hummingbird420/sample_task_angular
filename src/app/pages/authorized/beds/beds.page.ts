import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beds',
  templateUrl: './beds.page.html',
  styleUrls: ['./beds.page.scss'],
})
export class BedsPage implements OnInit {

  constructor() { }

  ngOnInit() { }
  // this.confirmDialogService
  // .confirm(
  //   "Confirm Deletion",
  //   "Are you sure you want to delete this item?",
  //   "Delete",
  //   "Cancel"
  // )
  // .then((confirmed) => {
  //   if (confirmed) {
  //     console.log("Item deleted!");
  //   } else {
  //     console.log("Deletion canceled.");
  //   }
  // });
}
