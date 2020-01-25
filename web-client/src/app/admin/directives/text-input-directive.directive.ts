import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appTextInputDirective]'
})
export class TextInputDirectiveDirective {

  private y: number;
  private isHighlighted = false;
  private text: string;

  constructor() { }

  @Output()
  highlightEvent = new EventEmitter<HighlightEvent>();

  @HostListener('select', ['$event.target'])
  onHighlight(target) {
    this.text = target.value.substring(target.selectionStart, target.selectionEnd);
    this.isHighlighted = true;
    this.sendEvent();
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event) {
    this.isHighlighted = false;
    this.y = event.clientY;
    this.sendEvent();
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp(event) {
    // this.isHighlighted = event.target.value.length > 0;
    this.sendEvent();
  }

  private sendEvent() {
    this.highlightEvent.emit(new HighlightEvent(this.y, this.isHighlighted, this.text));
  }

}

export class HighlightEvent {
  constructor(public y: number, public isHighlighted: boolean, public text: string) { }
}
