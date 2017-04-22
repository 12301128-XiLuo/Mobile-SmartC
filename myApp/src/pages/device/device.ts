import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

//entity
import { Device } from '../../app/common/entity/device.entity';
import { Building } from '../../app/common/entity/building.entity';
import { Classroom } from '../../app/common/entity/classroom.entity';
//service
import { DeviceService } from '../../app/common/service/device.service';
import { BuildClassService } from '../../app/common/service/buildClass.service';

//import { AgePipe } from '../../app/common/pipe/device.pipe';

@Component({
  selector: 'page-device',
  templateUrl: 'device.html'
})
export class DevicePage {
	devices : Device[];	
	buildings : Building[];
	classrooms : Classroom[];
	//教学楼初始化选中第一条
	buildModel : string="逸夫楼";
	class : number;
  	//判断用户是否变更选择
  	private preBuild : string = '';
  	private preClass : string;

  	private searchTerms = new Subject<string>();

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
  	/**
  	 * [getClassroomsByName 根据教学楼获得教室列表]
  	 */
  	getClassroomsByName(name): void {
  		this.buildClassService.getClassroomsByName(name).then(classrooms => this.classrooms = classrooms);
  	}
  	/**
  	 * [updateBuilding 当教学楼更新时，更新教室号以及列表]
  	 */
  	updateBuilding(build): void {
  		console.log(this.buildModel);
  		// if( build!== this.preBuild){
  		// 	this.getClassroomsByName(build);
  		// 	this.devices = this.devices.filter(function(x){
  		// 		return x.buildingNum == build;
  		// 	});
  		// 	console.log(this.devices);
  		// 	this.preBuild = build;
  		// }
  	}

  	ngOnInit(): void {
	    this.getDevices();
	    this.getBuildings();
	}
}
