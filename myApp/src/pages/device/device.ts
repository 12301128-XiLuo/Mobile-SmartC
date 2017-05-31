import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { Subject } from 'rxjs/Subject';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';

//entity
import { Device } from '../../app/common/entity/device.entity';
import { Building } from '../../app/common/entity/building.entity';
import { BuildClass } from '../../app/common/entity/buildclass.entity';
import { Classroom } from '../../app/common/entity/classroom.entity';
//service
import { DeviceService } from '../../app/common/service/device.service';
import { BuildClassService } from '../../app/common/service/buildClass.service';

import { DeviceDetailPage } from './device-detail/deviceDetail';

@Component({
  selector: 'page-device',
  templateUrl: 'device.html'
})
export class DevicePage {
	devices : Device[];	
	buildings : Building[];
	classrooms : Classroom[];
	//教学楼初始化选中第一条
	buildModel : string;
	classStatus : string;
  	deviceDetailPage : any = DeviceDetailPage;

  	constructor(
  		public navCtrl: NavController,
  		private deviceService: DeviceService,
  		private buildClassService: BuildClassService) { } 
  	
  	/**
  	 * [getDevices 获取设备列表]
  	 */
  	getDevices(): void {
  		this.deviceService.getDevices().then(devices => this.devices = devices);
  	}
  	/**
  	 * [getBuildings 获取教学楼列表]
  	 */
  	getBuildings(): void {
  		this.buildClassService.getBuildings().then(buildings => this.buildings = buildings);
  	}

  	ngOnInit(): void {
	    this.getDevices();
	    this.getBuildings();
	}
}
