import {Component, ChangeDetectionStrategy, Input, OnChanges} from '@angular/core';

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

  ngOnChanges() {
    if (this.phone) {
      const { prefix, number } = this.convertByMask(this.phone, this.mask);
      this.result = (this.code && prefix && number) && `+${this.code} (${prefix}) ${number}`;
    }
  }

  /*
    Phone mask is a string (e.g. (999) 999-9999),
    where 9 should be replaced with number character from phone number.
    All other characters in mask should be used literally.

    Example input:
      {
        phoneCode: '1',
        phone: '2222222222',
        phoneMask: '(999) 999-9999'
      }
    Example output:
      '+1 (222) 222-2222'
   */

  convertByMask(phone: string, mask: string): any {
    const parsedMask = mask.match(/\(([9]+)\) ([9\-]+)/);
    const numberArr = phone.split('');
    if (parsedMask && parsedMask.length) {
      let number = '';
      const maskPrefixLength = parsedMask[1].length;
      const maskDigitChunks = parsedMask[2].split('-');
      const prefix = numberArr.splice(0, maskPrefixLength).join('');
      if (numberArr && numberArr.length) {
        number = maskDigitChunks.reduce((arr, chunk) => {
          const digits = numberArr.splice(0, chunk.length);
          if (digits.length) { arr.push(digits.join('')); }
          return arr;
        }, []).join('-');
      }

      return { prefix, number };
    }

    return {};
  }

}
