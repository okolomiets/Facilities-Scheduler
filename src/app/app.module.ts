import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PhoneParserService } from './utils/phone-parser.service';
import { PhoneByMaskComponent } from './phone-by-mask/phone-by-mask.component';


@NgModule({
  declarations: [
    AppComponent,
    PhoneByMaskComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [PhoneParserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
