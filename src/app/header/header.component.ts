import { Component, EventEmitter, Output } from '@angular/core';
import { windowTime } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // userdefind event
  // @output()-to share data from child to parent
 @Output() onMenuBtnClick = new EventEmitter()


  menubtnclicked(){
// to occur an userdefind event
this.onMenuBtnClick.emit()

// RESIZE

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      )
    },100)
  }

}
