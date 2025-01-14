import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Button, FormFieldModel } from '../../../models/form-field';
import { TableData } from '../../../models/app-table';
import { AnonymousService } from '../../../services/anonymous.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit, OnDestroy {
  dead$ = new Subject();
  formField: BehaviorSubject<FormFieldModel> = new BehaviorSubject({} as FormFieldModel);
  buttons: Button[] = [];
  tableDataKey: TableData[] = [];
  getAllData$!: Observable<any[]>;
  getTotalData$!: Observable<number>;
  constructor(private service: AnonymousService) { }
  ngOnDestroy(): void {
    this.dead$.next('');
    this.dead$.unsubscribe();
  }

  ngOnInit() {
    this.getAllData$ = this.service.fetchUses();
    this.getAllData$.subscribe();
  }
  pageChange(event: any) {
    let current = event ? event * 20 - 20 : 0;


  }
  callBackFunc(event: any) {
  }
}
