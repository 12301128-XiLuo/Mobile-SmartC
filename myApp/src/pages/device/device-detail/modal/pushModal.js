var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Platform, NavParams, ViewController, AlertController } from 'ionic-angular';
import { VideoService } from '../../../../app/common/service/video.service';
var PushModal = (function () {
    function PushModal(platform, params, viewCtrl, alertCtrl, videoService) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.videoService = videoService;
        this.cameraId = null;
        this.cameraSegment = 0;
        this.cameraCode = 0;
        this.cameras = params.get("cameras");
        this.id = params.get("id");
    }
    /**
     * [dismiss 返回]
     */
    PushModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * [getPullAddress 获取摄像头播放地址]
     */
    PushModal.prototype.getPullAddress = function () {
        var _this = this;
        this.videoService.getPullAddress(this.id, this.cameraId).then(function (data) {
            _this.address = data.address;
            _this.getLineVedio(data.address);
        });
    };
    /**
     * [getLineVedio 根据地址进行视频直播]
     * @param {[string]} url [视频地址]
     */
    PushModal.prototype.getLineVedio = function (url) {
        url = 'rtmp://push.bcelive.com/live/2or4444gbh7rfbipio';
        console.log("test:" + url);
        // var player = jwplayer('playerVideoBox').setup({
        //     /*flashplayer: 'js/plugins/mediaplayer-5.7/player.swf',*/
        //     file : url,
        //     width : '100%',
        //     height : '100%',
        //     fallback : 'false',
        //     autostart : 'true',
        //     primary : 'flash',
        //     rtmp : {
        //         bufferlength : 0.1
        //     }
        // });
        var player = cyberplayer("playerVideoBox").setup({
            width: "100%",
            height: 370,
            stretching: "uniform",
            file: "http://gkdp982dqqza47gihc1.exp.bcelive.com/lss-gm4k64ts8y7kevfi/live.m3u8",
            autostart: true,
            repeat: false,
            volume: 90,
            controls: true,
            ak: 'ba77daba024d4bbe91fda6da0d600352' // 公有云平台注册即可获得accessKey
        });
    };
    ;
    /**
     * [segmentChange 切换摄像头]
     * @param {[number]} _event [切换回传的cameraID的值]
     */
    PushModal.prototype.segmentChange = function (_event) {
        console.log(_event);
        this.cameraId = _event;
        //this.getPullAddress();
    };
    /**
     * [directorCamera description]
     * @param {[type]} direction [description]
     */
    PushModal.prototype.directorCamera = function (direction) {
        this.videoService.directorCamera(this.id, this.cameraCode, direction);
    };
    PushModal.prototype.ngOnInit = function () {
        this.cameraLen = this.cameras.length;
        if (length > 0) {
            this.cameraId = this.cameras[0].camerId;
            this.cameraSegment = this.cameraId;
        }
        //初始视频播放
        //this.getPullAddress();
        this.getLineVedio("aa");
    };
    return PushModal;
}());
PushModal = __decorate([
    Component({
        templateUrl: 'pushModal.html'
    }),
    __metadata("design:paramtypes", [Platform,
        NavParams,
        ViewController,
        AlertController,
        VideoService])
], PushModal);
export { PushModal };
//# sourceMappingURL=pushModal.js.map