import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

import { Device } from '../../app/common/entity/device.entity';

@Component({
	selector: 'page-device-detail',
	templateUrl: 'deviceDetail.html'
})

export class DeviceDetailPage {
	
	device : any;
	computer : boolean = false;

	constructor(public navCtrl: NavController,public navParams: NavParams) {
	    this.device = navParams.data
	    console.log(this.device);
	 }

	 initStatus(): void {
	 		 	
	 } 

	 ngOnInit(): void {
	    console.log(this.computer);
	}

}