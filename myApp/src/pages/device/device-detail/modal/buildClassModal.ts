import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'buildClassModal.html' 
})
export class BuildClassModalPage {
  character;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {}

  dismiss() {
    let data = "test";
    this.viewCtrl.dismiss(data);
  }
}