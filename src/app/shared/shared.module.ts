import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// modals
import { AppModalService } from './modals/modals.service';

@NgModule({
  declarations: [],
  entryComponents: [],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [],
  providers: [AppModalService],
  bootstrap: []
})
export class SharedModule { }
