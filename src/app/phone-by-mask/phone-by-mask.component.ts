import {Component, ChangeDetectionStrategy, Input, OnChanges} from '@angular/core';
import { PhoneParserService } from '../utils/phone-parser.service';

@Component({
  selector: 'app-phone-by-mask',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './phone-by-mask.component.html',
  styleUrls: ['./phone-by-mask.component.css']
})
export class PhoneByMaskComponent implements OnChanges {
  @Input() code: string = '';
  @Input() phone: string = '';
  @Input() mask: string = '';
  result: string;

  constructor(
    private phoneParser: PhoneParserService
  ) { }

  ngOnChanges() {
    if (this.phone) {
      const { prefix, number } = this.phoneParser.convertByMask(this.phone, this.mask);
      this.result = `+${this.code} (${prefix}) ${number}`;
    }
  }

}
