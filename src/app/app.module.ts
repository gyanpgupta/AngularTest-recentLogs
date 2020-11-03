import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { RecordReducer } from './store/reducer/record.reducer';

import { EffectsModule } from '@ngrx/effects';
import { RecordEffects } from './store/effects/record.effect';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ record: RecordReducer }),
    EffectsModule.forRoot([RecordEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
