import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[scrollLoad]'
})
export class ScrollLoadMoreDirective {
  @Output() onScroll = new EventEmitter<any>();   
  percentValue: number = 100;
  emitted = false;

  @HostListener('scroll', ['$event'])
  onScrollTrigger(event): void {
         const percent = Math.round((event.srcElement.scrollTop / (event.srcElement.scrollHeight - event.srcElement.clientHeight)) * 100);
        if(percent === this.percentValue){
          this.onScroll.emit();
        }
  }


}
