import { Component } from '@angular/core';
import { Platform, NavParams, ViewController,AlertController } from 'ionic-angular';

import {Building} from "../../../../app/common/entity/building.entity";
import {Classroom} from "../../../../app/common/entity/classroom.entity";
import { BuildClassService } from '../../../../app/common/service/buildClass.service';

@Component({
  templateUrl: 'buildClassModal.html' 
})
export class BuildClassModalPage {
  buildings : Building[];
  classrooms : Classroom[];
  build : string;
  class : string;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    private buildClassService: BuildClassService
  ) {}

  dismiss() {
    this.viewCtrl.dismiss();
  }

  confirm() {
    if(this.build&&this.class){
      let data = {
        "buildingNum" : this.build,
        "classroomNum" : this.class
      };
      this.viewCtrl.dismiss(data);
    }
    else{
      this.showAlert();
    }
  }

  /**
   * [getPushBuildings 获取教学楼列表]
   */
  getPushBuildings(): void {
    this.buildClassService.getPushBuildings().then(buildings => this.buildings = buildings);
  }

  getPushClass(): void{
    this.buildClassService.getClassroomsByName(this.build).then(classrooms => this.classrooms = classrooms);
  }

  selectPushBuilding(): void{
    this.getPushClass();
  }

  ngOnInit(): void {
    this.getPushBuildings();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: '注意！',
      subTitle: '请选择教学楼和教室！',
      buttons: ['好']
    });
    alert.present();
  }
}