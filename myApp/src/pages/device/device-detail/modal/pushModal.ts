import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController,AlertController } from 'ionic-angular';

import {Camera} from "../../../../app/common/entity/camera.entity";
import { VideoService } from '../../../../app/common/service/video.service';
//import * as jwplayer from 'jwplayer';
declare var jwplayer: any;
declare var cyberplayer: any;

@Component({
  templateUrl: 'pushModal.html' 
})
export class PushModal {
  cameras : Camera[];
  id : number;
  address : string;
  cameraId : number=null;
  cameraLen : number;
  cameraSegment : number = 0;
  cameraCode : number = 0;

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
      
      //url = 'rtmp://video.airforceuav.com:1935/live/wak';
      //url = 'http://gkdp982dqqza47gihc1.exp.bcelive.com/lss-gm4k64ts8y7kevfi/live.m3u8';
      url = 'http://47.94.139.69/livehz/livestream.m3u8';
      let rtmpurl = 'rtmp://play.bcelive.com/live/lss-gm4k64ts8y7kevfi';
      console.log("test:"+url);
      var player = jwplayer('playerVideoBox').setup(
        {
          // for web
          // file : url,
          // width : '100%',
          // height : '370',
          // fallback : 'false',
          // autostart : 'true',
          // primary : 'html5',
          // rtmp : {
          //     bufferlength : 0.1
          // } 
          
          //for android
          width : '100%',
          height : '370',
          playlist: [{
            sources: [
              { file: url },
            ],
          }],
          sources: [{
            file: url
          }],
          "primary": "html5",
          "hlshtml": true,
          androidhls:true
        }
      );
  };
  /**
   * [segmentChange 切换摄像头]
   * @param {[number]} _event [切换回传的cameraID的值]
   */
  segmentChange(_event):void{
    console.log(_event);
    this.cameraId = _event;
    //this.getPullAddress();
  }
  /**
   * [directorCamera description]
   * @param {[type]} direction [description]
   */
  directorCamera(direction): void{
    this.videoService.directorCamera(this.id,this.cameraCode,direction);
  }
  ngOnInit(): void {
    this.cameraLen = this.cameras.length;
    if(length>0){
      this.cameraId = this.cameras[0].camerId;
      this.cameraSegment = this.cameraId;
    }
    //初始视频播放
    //this.getPullAddress();
    this.getLineVedio("aa");
  }
}