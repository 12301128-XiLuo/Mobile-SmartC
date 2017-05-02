import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController,AlertController } from 'ionic-angular';

import {Camera} from "../../../../app/common/entity/camera.entity";
import { VideoService } from '../../../../app/common/service/video.service';
declare var jwplayer: any;

@Component({
  templateUrl: 'pushModal.html' 
})
export class PushModal {
  cameras : Camera[];
  id : number;
  address : string;
  cameraId : number=null;
  cameraLen : number;
  cameraSegment : number;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    private videoService: VideoService
  ) {
    this.cameras = params.get("cameras");
    this.id = params.get("id");
    
    
  }
  /**
   * [dismiss 返回]
   */
  dismiss() {
    this.viewCtrl.dismiss();
  }

  getPullAddress(): void {
    this.videoService.getPullAddress(this.id,this.cameraId).then(data => {
      this.address = data.address;
      this.getLineVedio(data.address);
    });
  }
  //获取直播视频
  getLineVedio(url): void{
      console.log("test:"+url);
      var player = jwplayer('palyerVideoBox').setup({
          /*flashplayer: 'js/plugins/mediaplayer-5.7/player.swf',*/
          file : url,
          width : '100%',
          height : '100%',
          fallback : 'false',
          autostart : 'true',
          primary : 'flash',
          rtmp : {
              bufferlength : 0.1
          }
      });
  };
  segmentChange(_event):void{
    console.log(_event);
  }
  ngOnInit(): void {
    this.cameraLen = this.cameras.length;
    if(length>0){
      this.cameraId = this.cameras[0].camerId;
      this.cameraSegment = this.cameraId;
    }
    //this.getPullAddress();
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