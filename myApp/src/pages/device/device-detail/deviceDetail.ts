import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

@Component({
	selector: 'page-device-detail',
	templateUrl: 'deviceDetail.html'
})

export class DeviceDetailPage {
	
	device : any;
	computer : any;

	constructor(public navCtrl: NavController,public navParams: NavParams) {
	    this.device = navParams.data
	    console.log("device detail:"+this.device);
	 }

	 ngOnInit(): void {
	    console.log(this.computer);
	}

}