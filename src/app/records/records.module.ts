import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RecordsRoutingModule } from './records-routing.module';
import { RecordsComponent } from './records.component';
import { EllipesPipe } from '../shared/pipes/ellipse.pipe';
import { RecordService } from '../shared/service/record.service';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [RecordsComponent, EllipesPipe],
  imports: [
    CommonModule,
    RecordsRoutingModule,
    HttpClientModule,
    ScrollingModule,
    NgxSpinnerModule
  ],
  providers: [RecordService]
})
export class RecordsModule { }
