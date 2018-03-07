import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// form inputs
import { DateInputComponent } from './forms/dateInput.component';

// ng-bootstrap modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// modals
import { AppModalService } from './modals/modals.service';

@NgModule({
  declarations: [
    DateInputComponent
  ],
  entryComponents: [],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    DateInputComponent
  ],
  providers: [AppModalService],
  bootstrap: []
})
export class SharedModule { }
