import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, Subject, of, takeUntil } from 'rxjs';
import { EmbadedKey, Table, TableData } from '../../models/app-table';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-table',
  templateUrl: './app-table.component.html',
  styleUrls: ['./app-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppTableComponent {
  dead$ = new Subject();
  @Input() table!: Observable<Table[]>;

  @Input() tableDataKey: TableData[] = [];
  @Input() totalData: Observable<number> = of(50);
  @Input() Embaded: EmbadedKey = {} as EmbadedKey;

  @Output() pageChange: EventEmitter<number> = new EventEmitter();
  @Output() callBackFunc: EventEmitter<any> = new EventEmitter();
  @Output() editAction: EventEmitter<any> = new EventEmitter();
  @Output() deleteAction: EventEmitter<any> = new EventEmitter();

  totalDataCount: number = 0;
  page: number = 0;
  isMobileView: boolean = false;
  constructor(private breakpointObserver: BreakpointObserver, private cdRef: ChangeDetectorRef) { }
  ngOnInit() {
    this.checkViewSize();
    this.totalData.pipe(takeUntil(this.dead$)).subscribe((data: number) => {
      if (data) {
        this.totalDataCount = data;
        this.cdRef.detectChanges();
      }
    });
  }
  checkViewSize() {
    this.breakpointObserver.observe([
      Breakpoints.Handset, // For mobile devices
      Breakpoints.Small,   // For tablets
      Breakpoints.Medium,  // For larger tablets
      Breakpoints.Large,   // For desktops
      Breakpoints.XLarge   // For larger desktops
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.Handset]) {
          console.log('Mobile view');
          this.isMobileView = true;
        } else {
          console.log('Desktop view');
          this.isMobileView = false;
        }
      }
    });
  }
  pageChanged(page: any) {
    this.page = page;
    this.pageChange.emit(page);
  }
  callBack(event: any, key: string) {
    this.callBackFunc.emit({ event: event, key: key });
  }
  onEditData(id: any) {
    this.editAction.emit(id);
  }
  onDeleteData(id: any) {
    this.deleteAction.emit(id);
  }
  formatValue(item: any, key: any): string {
    if (key.type === 'date') {
      return new Date(item[key.value]).toLocaleDateString();
    } else if (key.type === 'time') {
      return new Date(item[key.value]).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else {
      return item[key.value];
    }
  }
  getLabelValue(item: any): string {
    console.log(item[this.Embaded.key]);
    console.log(this.table);
    // console.log(this.tableData);

    const foundLabel = this.Embaded.label.find(f => f.key === item[this.Embaded.key]);
    return foundLabel ? foundLabel.value : '';
  }
}