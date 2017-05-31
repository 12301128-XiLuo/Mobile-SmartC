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
import { NavController } from 'ionic-angular';
//service
import { DeviceService } from '../../app/common/service/device.service';
import { BuildClassService } from '../../app/common/service/buildClass.service';
import { DeviceDetailPage } from './device-detail/deviceDetail';
var DevicePage = (function () {
    function DevicePage(navCtrl, deviceService, buildClassService) {
        this.navCtrl = navCtrl;
        this.deviceService = deviceService;
        this.buildClassService = buildClassService;
        this.deviceDetailPage = DeviceDetailPage;
    }
    /**
     * [getDevices 获取设备列表]
     */
    DevicePage.prototype.getDevices = function () {
        var _this = this;
        this.deviceService.getDevices().then(function (devices) { return _this.devices = devices; });
    };
    /**
     * [getBuildings 获取教学楼列表]
     */
    DevicePage.prototype.getBuildings = function () {
        var _this = this;
        this.buildClassService.getBuildings().then(function (buildings) { return _this.buildings = buildings; });
    };
    DevicePage.prototype.ngOnInit = function () {
        this.getDevices();
        this.getBuildings();
    };
    return DevicePage;
}());
DevicePage = __decorate([
    Component({
        selector: 'page-device',
        templateUrl: 'device.html'
    }),
    __metadata("design:paramtypes", [NavController,
        DeviceService,
        BuildClassService])
], DevicePage);
export { DevicePage };
//# sourceMappingURL=device.js.map