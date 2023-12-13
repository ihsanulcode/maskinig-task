import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputMask]'
})
export class InputMaskDirective {
  // Input property to hold the mask format
  @Input('appInputMask') maskTextFormat: string = '';
  // Property to manage masking
  validInputLength!: number;
  indicesHash: number[] = [];
  indicesAt: number[] = [];
  indicesDash: number[] = [];

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInputChange() {
    this.onMaskChange();
    const input = this.el.nativeElement.value;

    let len = input.length;
    let index = input.length - 1;
    var lastChar = input[input.length - 1];

    if (input.length <= this.validInputLength) {
      if (!isNaN(lastChar) && this.indicesHash.includes(index)) {
        if (this.indicesDash.includes(len)) {
          this.el.nativeElement.value = input.concat("-");
        }
      } else if (isNaN(lastChar) && this.indicesAt.includes(index)) {
        if (this.indicesDash.includes(len)) {
          this.el.nativeElement.value = input.concat("-");
        }
      } else {
        this.el.nativeElement.value = input.slice(0, -1);
      }
    } else {
      this.el.nativeElement.value = input.slice(0, -1);
    }
  }

  private onMaskChange() {
    this.indicesAt = [];
    this.indicesDash = [];
    this.indicesHash = [];
    this.validInputLength = this.maskTextFormat.length;
    for (let i = 0; i < this.maskTextFormat.length; i++) {
      switch (this.maskTextFormat.charAt(i)) {
        case '#':
          this.indicesHash.push(i);
          break;
        case '@':
          this.indicesAt.push(i);
          break;
        case '-':
          this.indicesDash.push(i);
          break;
        default:
          break;
      }
    }
  }
}
