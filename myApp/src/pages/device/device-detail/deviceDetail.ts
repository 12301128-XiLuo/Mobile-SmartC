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
	
	device: Device;//设备信息
	cameras: Camera[];//摄像头信息数组
	computer : boolean = false;//电脑状态
	projector : boolean = false;//投影仪状态
	camera : boolean = false;//总体摄像头状态
	raspberry : number;//树莓派状态
	disableJudge : boolean = false;//判断树莓派是否在线
	pull : string = "开始拉流";
	push : string = "开始推流";
	broadcast : string = "发布广播";
	video : string;
	videoOperate : {[key:string]:string;} = {"停止推流":"stop_push","开始推流":"start_push","停止拉流":"stop_pull","开始拉流":"start_pull","停止广播":"stop_broadcast","发布广播":"start_broadcast"};
	disablePush : boolean = false;
	disablePull : boolean = false;
	disableBroadcast : boolean = false;

	constructor(private deviceService: DeviceService,public navCtrl: NavController,public navParams: NavParams) {
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
	 		this.video = "push";
	 		this.push = "停止推流";
	 		this.disableBroadcast = true;
	 		this.disablePull = true;
	 	}else if(this.raspberry == 4){
	 		this.video = "pull";
	 		this.push = "停止拉流";
	 		this.disableBroadcast = true;
	 		this.disablePush = true;
	 	}else if(this.raspberry == 5){
	 		this.video = "broadcast";
	 		this.push = "停止广播";
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

	 videoManage(): void{
	 	console.log(this.video);

	 	switch(this.video)
		{
		case "push":
		  this.deviceService.operateStream(this.device.id,this.videoOperate[this.push]);
		  break;
		case "pull":
		  
		  break;
		case "broadcast":
		  
		  break;
		}
	 }

	 ngOnInit(): void {
	    
	}

}