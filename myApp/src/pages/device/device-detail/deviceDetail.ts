import { Component } from '@angular/core';
import { NavController,NavParams,ModalController } from 'ionic-angular';

import { Device } from '../../../app/common/entity/device.entity';
import { Camera} from '../../../app/common/entity/camera.entity';

import { DeviceService } from '../../../app/common/service/device.service';

import { BuildClassModalPage } from './modal/buildClassModal';

@Component({
	selector: 'page-device-detail',
	templateUrl: 'deviceDetail.html'
})

export class DeviceDetailPage {
	
	device: Device;//设备信息
	cameras: Camera[];//摄像头信息数组
	computer : boolean = false;//电脑状态
	projector : boolean = false;//投影仪状态
	camera : boolean = false;//总体摄像头状态
	raspberry : number;//树莓派状态
	disableJudge : boolean = false;//判断树莓派是否在线
	pull : boolean = false;
	push : boolean = false;
	broadcast : boolean = false;
	disablePush : boolean = false;
	disablePull : boolean = false;
	disableBroadcast : boolean = false;

	constructor(private deviceService: DeviceService,public navCtrl: NavController,public navParams: NavParams,public modalCtrl: ModalController) {
	    this.device = navParams.data;
	    this.cameras = this.device.cameraList;
	    this.raspberry = this.device.raspberryStreamStatus;
	    
	    console.log(this.device);
	    this.initStatus();
	 }
	 /**
	  * [initStatus 初始化状态]
	  */
	 initStatus(): void {
	 	//如果树莓派异常，所有设备无法操作
	 	if(this.raspberry==0||this.raspberry==2){
	    	this.disableJudge = true;
	    }
	    //设备状态初始化
	 	this.device.computerStatus==1?this.computer=true: this.computer=false;	
	 	this.device.projectorStatus==1?this.projector=true: this.projector=false;	
	 	this.device.cameraStatus==1?this.camera=true: this.camera=false;

	 	//初始化推拉流状态
	 	if(this.raspberry == 3){
	 		this.push = true;
	 		this.disableBroadcast = true;
	 		this.disablePull = true;
	 	}else if(this.raspberry == 4){
	 		this.pull = true;
	 		this.disableBroadcast = true;
	 		this.disablePush = true;
	 	}else if(this.raspberry == 5){
	 		this.broadcast = true;
	 		this.disablePush = true;
	 		this.disablePull = true;
	 	}

	 } 
	 /**
	  * [deviceManage 设备管理]
	  * @param {[type]} event [开启或关闭 close：open]
	  * @param {[type]} type  [设备类型 computer：projector]
	  */
	 deviceManage(event,type): void{
	 	let operate = event?'open':'close';
	 	this.deviceService.operateDevice(this.device.id,type,operate);	 	
	 }
	 /**
	  * [cameraManage 摄像头管理]
	  * @param {[type]} event [开启或关闭 close：open]
	  * @param {[type]} id    [摄像头ID]
	  */
	 cameraManage(event,id): void{
	 	let operate = event?'open':'close';	
	 	this.deviceService.operateCamera(id,operate); 
	 }
	 /**
	  * [videoManage description]
	  * @param {[type]} event [description]
	  * @param {[type]} type  [description]
	  */
	 videoManage(event,type): void{
	 	let operate = event?'start'.concat('_'+type):'stop'.concat('_'+type);
	 	this.videoStatusJudge();
	 	//拉流需要选择正在推流的教室
	 	if((type == 'pull') && this.pull){
	 		this.openModal();
	 	}
	 	console.log(operate);

	 }
	 /**
	  * [videoStatusJudge description]
	  */
	 videoStatusJudge(): void{
	 	this.disablePush = this.pull || this.broadcast;
	 	this.disablePull = this.push || this.broadcast;
	 	this.disableBroadcast = this.push || this.pull;
	 }

	 openModal() {

	    let modal = this.modalCtrl.create(BuildClassModalPage);
	    modal.onDidDismiss(data => {
	     console.log(data);
	   });
	    modal.present();
	  }
	 ngOnInit(): void {
	    
	}

}