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
  /**
   * [getPullAddress 获取摄像头播放地址]
   */
  getPullAddress(): void {
    this.videoService.getPullAddress(this.id,this.cameraId).then(data => {
      this.address = data.address;
      this.getLineVedio(data.address);
    });
  }
  /**
   * [getLineVedio 根据地址进行视频直播]
   * @param {[string]} url [视频地址]
   */
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
  /**
   * [segmentChange 切换摄像头]
   * @param {[number]} _event [切换回传的cameraID的值]
   */
  segmentChange(_event):void{
    console.log(_event);
    this.cameraId = _event;
    this.getPullAddress();
  }
  ngOnInit(): void {
    this.cameraLen = this.cameras.length;
    if(length>0){
      this.cameraId = this.cameras[0].camerId;
      this.cameraSegment = this.cameraId;
    }
    //初始视频播放
    //this.getPullAddress();
  }
}