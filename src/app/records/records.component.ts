import { Component, OnInit, ViewChild, HostListener } from "@angular/core";
import { CdkVirtualScrollViewport } from "@angular/cdk/scrolling";
import { select, Store } from "@ngrx/store";
import { LoadData } from "../store/action/record.actions";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-records",
  templateUrl: "./records.component.html",
  styleUrls: ["./records.component.scss"],
})
export class RecordsComponent implements OnInit {
  records = {
    max: 10,
    data: [],
  };

  @ViewChild("cdkVirtualScroll", { static: false })
  cdkVirtualScroll: CdkVirtualScrollViewport;

  constructor(
    private ngxStore: Store<any>,
    private ngxSpinner: NgxSpinnerService
  ) {
    ngxStore.pipe(select((state) => state)).subscribe((data) => {
      this.ngxSpinner.hide();
      if (data.record.records.length !== 0) {
        this.records.data = data.record.records;
      }
    });
  }

  ngOnInit(): void {
    this.getRecords();
  }

  // function to retrieve all logs
  getRecords() {
    let cursor = !!this.records.data.length
      ? this.records.data[this.records.data.length - 1][0]
      : 0;
    this.ngxStore.dispatch(
      new LoadData({ cursor: cursor, limit: this.records.max })
    );
  }

  @HostListener("scroll", ["$event"])
  loadNextData(event: any) {
    if (
      event.target.offsetHeight + event.target.scrollTop >=
      event.target.scrollHeight
    ) {
      this.getRecords();
    }
  }
}
