import {
  Component,
  ElementRef,
  forwardRef,
  ViewChild
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

export const DATE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DateInputComponent),
  multi: true
};

@Component({
  template: `<input #input
                    (input)="onChange($event)"
                    (blur)="touchCallback()"
                    type="text"
                    class="form-control"
                    placeholder=""
                    [attr.disabled]="disabled">
  `,
  selector: 'app-date-input',
  styles:[],
  providers:[DATE_VALUE_ACCESSOR]
})
export class DateInputComponent implements ControlValueAccessor {
  @ViewChild( 'input' )
  input: ElementRef;
  disabled = false;
  changeCallback = Function;
  touchCallback = Function;

  onChange(event){
    const timestamp = this.convertToTimestamp(event.target.value);
    this.changeCallback(timestamp);
  }

  convertToTimestamp(formattedDate) {
    // TODO:implement
    return formattedDate;
  }

  convertFromTimestamp(timestamp) {
    // TODO:implement
    return timestamp;
  }

  writeValue(obj: any) {
    const formattedDate = this.convertFromTimestamp(obj);
    this.input.nativeElement.value = formattedDate;
  }

  registerOnChange(fn: any) {
    this.changeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.touchCallback = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}
