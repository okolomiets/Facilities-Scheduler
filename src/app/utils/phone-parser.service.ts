import {Injectable} from '@angular/core';

@Injectable()
export class PhoneParserService {

  convertByMask(phone: string, mask: string): any {
    const parsedMask = mask.match(/\(([0-9]+)\) (.+)/);
    const numberArr = phone.split('');
    if (parsedMask.length) {
      const maskPrefixLength = parsedMask[1].length;
      const maskDigitChunks = parsedMask[2].split('-');
      const prefix = numberArr.splice(0, maskPrefixLength).join('');
      const number = maskDigitChunks.reduce((arr, chunk) => {
        arr.push(numberArr.splice(0, chunk.length).join(''));
        return arr;
      }, []).join('-');

      return { prefix, number };
    }

    return {};
  }
}
