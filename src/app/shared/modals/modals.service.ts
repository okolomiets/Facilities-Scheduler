import { Injectable } from '@angular/core';

import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class AppModalService {
  defaultOptions: NgbModalOptions;
  constructor(private modalService: NgbModal) {
    this.defaultOptions = {
      keyboard: false,
      backdrop: 'static'
    };
  }

  open(template, params: any = {}, options: NgbModalOptions = {}) {
    const modalOptions = {...this.defaultOptions, ...options};
    const modalRef = this.modalService.open(template, modalOptions);
    if (params) {
      Object.keys(params).map(key => {
        modalRef.componentInstance[key] = params[key];
      });
    }
  }
}
