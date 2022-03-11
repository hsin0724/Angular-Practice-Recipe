import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector : '[appDropdown]'
})

export class DropdownDirective {
  @HostBinding('class.open') isBtnOpen = false;

  //click btn才會切換
  // @HostListener('click') toggleOpen(){
  //   this.isBtnOpen = !this.isBtnOpen;
  // }

  //當點擊其他地方也能關閉下拉選項時的寫法
  @HostListener('document:click',['$event']) toggleOpen(event : Event){
    this.isBtnOpen = this.elRef.nativeElement.contains(event.target) ? !this.isBtnOpen : false;
  }

  constructor(private elRef :  ElementRef){}

}
