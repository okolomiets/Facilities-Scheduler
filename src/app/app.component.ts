import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PhoneParserService } from './utils/phone-parser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  converterForm: FormGroup;
  result: string;

  constructor(
    private phoneParser: PhoneParserService
  ) { }

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
  }

  parseFormError() {
    console.log(this.converterForm);
  }

  onSubmit() {
    const { code, phone, mask } = this.converterForm.value;
    const { prefix, number } = this.phoneParser.convertByMask(phone, mask);
    this.result = `+${code} (${prefix}) ${number}`;
  }

}
