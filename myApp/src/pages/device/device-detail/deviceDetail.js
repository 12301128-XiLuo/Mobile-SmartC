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
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { DeviceService } from '../../../app/common/service/device.service';
import { VideoService } from '../../../app/common/service/video.service';
import { BuildClassModalPage } from './modal/buildClassModal';
import { PushModal } from './modal/pushModal';
var DeviceDetailPage = (function () {
    function DeviceDetailPage(videoService, deviceService, navCtrl, navParams, modalCtrl) {
        this.videoService = videoService;
        this.deviceService = deviceService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.computer = false; //电脑状态
        this.projector = false; //投影仪状态
        this.camera = false; //总体摄像头状态
        this.disableJudge = false; //判断树莓派是否在线
        this.pull = false;
        this.push = false;
        this.broadcast = false;
        this.disablePush = false;
        this.disablePull = false;
        this.disableBroadcast = false;
        this.device = navParams.data;
        this.cameras = this.device.cameraList;
        this.raspberry = this.device.raspberryStreamStatus;
        console.log(this.device);
        this.initStatus();
    }
    /**
     * [initStatus 初始化状态]
     */
    DeviceDetailPage.prototype.initStatus = function () {
        //如果树莓派异常，所有设备无法操作
        if (this.raspberry == 0 || this.raspberry == 2) {
            this.disableJudge = true;
        }
        //设备状态初始化
        this.device.computerStatus == 1 ? this.computer = true : this.computer = false;
        this.device.projectorStatus == 1 ? this.projector = true : this.projector = false;
        this.device.cameraStatus == 1 ? this.camera = true : this.camera = false;
        //初始化推拉流状态
        if (this.raspberry == 3) {
            this.push = true;
            this.disableBroadcast = true;
            this.disablePull = true;
        }
        else if (this.raspberry == 4) {
            this.pull = true;
            this.disableBroadcast = true;
            this.disablePush = true;
        }
        else if (this.raspberry == 5) {
            this.broadcast = true;
            this.disablePush = true;
            this.disablePull = true;
        }
    };
    /**
     * [deviceManage 设备管理]
     * @param {[type]} event [开启或关闭 close：open]
     * @param {[type]} type  [设备类型 computer：projector]
     */
    DeviceDetailPage.prototype.deviceManage = function (event, type) {
        var operate = event ? 'open' : 'close';
        this.deviceService.operateDevice(this.device.id, type, operate);
    };
    /**
     * [cameraManage 摄像头管理]
     * @param {[type]} event [开启或关闭 close：open]
     * @param {[type]} id    [摄像头ID]
     */
    DeviceDetailPage.prototype.cameraManage = function (event, id, code) {
        var operate = event ? 'open' : 'close';
        this.deviceService.operateCamera(this.device.id, id, code, operate);
    };
    /**
     * [videoManage description]
     * @param {[type]} event [description]
     * @param {[type]} type  [description]
     */
    DeviceDetailPage.prototype.videoManage = function (event, type) {
        var operate = event ? 'start'.concat('_' + type) : 'stop'.concat('_' + type);
        //拉流需要选择正在推流的教室
        if ((type == 'pull') && this.pull) {
            this.openBuildClassModal();
        }
        else {
            this.videoStatusJudge();
            this.videoService.operateStream(this.device.id, operate);
        }
        console.log(operate);
    };
    /**
     * [videoStatusJudge description]
     */
    DeviceDetailPage.prototype.videoStatusJudge = function () {
        this.disablePush = this.pull || this.broadcast;
        this.disablePull = this.push || this.broadcast;
        this.disableBroadcast = this.push || this.pull;
    };
    DeviceDetailPage.prototype.openBuildClassModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(BuildClassModalPage);
        modal.onDidDismiss(function (data) {
            if (typeof (data) != "undefined") {
                _this.videoService.startPullOperate(data.buildingNum, data.classroomNum, _this.device.id);
                _this.videoStatusJudge();
            }
            else {
                _this.pull = false;
            }
        });
        modal.present();
    };
    DeviceDetailPage.prototype.openPushModal = function () {
        var modal = this.modalCtrl.create(PushModal, { cameras: this.device.cameraList, id: this.device.id });
        modal.onDidDismiss(function (data) {
            // if(typeof(data)!="undefined"){
            // 	this.deviceService.startPullOperate(data.buildingNum,data.classroomNum,this.device.id);
            // 	this.videoStatusJudge();
            // }else{
            // 	this.pull = false;
            // }
        });
        modal.present();
    };
    DeviceDetailPage.prototype.ngOnInit = function () {
    };
    return DeviceDetailPage;
}());
DeviceDetailPage = __decorate([
    Component({
        selector: 'page-device-detail',
        templateUrl: 'deviceDetail.html'
    }),
    __metadata("design:paramtypes", [VideoService, DeviceService, NavController, NavParams, ModalController])
], DeviceDetailPage);
export { DeviceDetailPage };
//# sourceMappingURL=deviceDetail.js.map