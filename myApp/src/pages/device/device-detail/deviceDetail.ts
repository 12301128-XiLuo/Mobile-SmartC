import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

import { Device } from '../../../app/common/entity/device.entity';
import { Camera} from '../../../app/common/entity/camera.entity';

import { DeviceService } from '../../../app/common/service/device.service';
@Component({
	selector: 'page-device-detail',
	templateUrl: 'deviceDetail.html'
})

export class DeviceDetailPage {
	
	device: Device;
	cameras: Camera[];
	computer : boolean = false;
	projector : boolean = false;
	camera : boolean = false;
	raspberry : number;
	disableJudge : boolean = false;

	constructor(private deviceService: DeviceService,public navCtrl: NavController,public navParams: NavParams) {
	    this.device = navParams.data;
	    this.cameras = this.device.cameraList;
	    this.raspberry = this.device.raspberryStreamStatus;
	    if(this.raspberry==0||this.raspberry==2){
	    	this.disableJudge = true;
	    }
	    console.log(this.device);
	    this.initStatus();
	 }
	 /**
	  * [initStatus 初始化设备状态]
	  */
	 initStatus(): void {
	 	this.device.computerStatus==1?this.computer=true: this.computer=false;	
	 	this.device.projectorStatus==1?this.projector=true: this.projector=false;	
	 	this.device.cameraStatus==1?this.camera=true: this.camera=false;	
	 } 

	 deviceManage(event,type): void{
	 	let operate = event?'open':'close';
	 	this.deviceService.operateDevice(this.device.id,type,operate);	 	
	 }

	 cameraManage(event,id): void{
	 	let operate = event?'open':'close';	
	 	this.deviceService.operateCamera(id,operate); 
	 }

	 ngOnInit(): void {
	    
	}

}