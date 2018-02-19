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
      this.result = `+${this.code} (${prefix}) ${number}`;
    }
  }

  convertByMask(phone: string, mask: string): any {
    const parsedMask = mask.match(/\(([9]+)\) ([9\-]+)/);
    const numberArr = phone.split('');
    if (parsedMask.length) {
      let number = '';
      const maskPrefixLength = parsedMask[1].length;
      const maskDigitChunks = parsedMask[2].split('-');
      const prefix = numberArr.splice(0, maskPrefixLength).join('');
      if (numberArr.length) {
        number = maskDigitChunks.reduce((arr, chunk) => {
          arr.push(numberArr.splice(0, chunk.length).join(''));
          return arr;
        }, []).join('-');
      }

      return { prefix, number };
    }

    return {};
  }

}
