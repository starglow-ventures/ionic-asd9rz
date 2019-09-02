import { Component, ViewEncapsulation } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { PopupPage } from '../popup/popup-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['./home.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage {

  constructor(public navCtrl: NavController,
  public popoverCtrl: PopoverController ) {

  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopupPage,
     {}, {showBackdrop: true, cssClass:"test"});
    popover.present({
      ev: myEvent
    });
  }

}
