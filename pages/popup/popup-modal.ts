import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';

@Component({
  selector: 'popup-modal',
  templateUrl: 'popup-modal.html',
  styleUrls: ['./popup.scss']
})
export class PopupPage {
  checked: boolean = false;
  blink: boolean = false;
  btnSubmit: boolean = false;
  constructor(public navCtrl: NavController) {

  }

  /**
   * Submit Button
   */
  submitButton() {
    if (this.checked) {
      this.btnSubmit = true;
    } else {
      this.blink = true;
      console.log(this.checked, 'false');
    }
    setTimeout(() => {
      this.blink = false;
    }, 200);
  }


}