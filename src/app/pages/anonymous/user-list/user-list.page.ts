import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
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
  getTotalData$: Observable<number> = of(0);
  constructor(private service: AnonymousService) {
    this.tableDataKey.push(
      { label: 'SL', value: 'SL' }
      , { label: 'User Name', value: 'userName' }
      , { label: 'Password', value: 'password' }
      , { label: 'Role', value: 'role' }
    );
  }
  ngOnDestroy(): void {
    this.dead$.next('');
    this.dead$.unsubscribe();
  }

  ngOnInit() {
    this.service.fetchUses().subscribe((res: any) => {
      if (res) {
        this.getAllData$ = of(res.data);
        this.getTotalData$ = of(res.total ?? 0);
      }

    });

  }

  pageChange(event: any) {
    let current = event ? event * 20 - 20 : 0;


  }
  callBackFunc(event: any) {
  }
}
