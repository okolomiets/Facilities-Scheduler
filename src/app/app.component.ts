import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  converterForm: FormGroup;
  formData = new Subject();
  code: string;
  phone: string;
  mask: string;

  constructor( ) { }

  ngOnInit() {
    this.converterForm = new FormGroup({
      code: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]+$/)
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]+$/)
      ]),
      mask: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\([0-9]+\) .+$/)
      ])
    });
    this.formData.subscribe(({ code, phone, mask }) => {
      this.code = code;
      this.phone = phone;
      this.mask = mask;
    });
  }

  onSubmit() {
    this.formData.next(this.converterForm.value);
  }

}
