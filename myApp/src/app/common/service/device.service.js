var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Constant } from '../constant/constant';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
var DeviceService = (function () {
    function DeviceService(http, constant) {
        this.http = http;
        this.constant = constant;
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.deviceUrl = constant.URL + 'deviceMonitor/';
        this.assignDeviceUrl = constant.URL + 'assignDevice/';
    }
    /**
     * [getDevices 获取设备列表]
     * @return {Promise<Device[]>} [设备列表]
     */
    DeviceService.prototype.getDevices = function () {
        return this.http.get(this.deviceUrl)
            .toPromise()
            .then(function (response) { return response.json().data.deviceStatusList; })
            .catch(this.handleError);
    };
    DeviceService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    DeviceService.prototype.getDeviceById = function (id) {
        var url = '/ajax_get_classroom_info';
        return this.http
            .get(url)
            .toPromise()
            .then(function (response) { return response.json().data.deviceInfo; })
            .catch(this.handleError);
    };
    /**
     * [operateDevice 操作设备状态]
     * @param {[type]} id      [教室设备列表id]
     * @param {[type]} device  [设备类型]
     * @param {[type]} operate [操作类型 open close]
     */
    DeviceService.prototype.operateDevice = function (id, device, operate) {
        var url = this.deviceUrl + id + '?device=' + device + '&operation=' + operate;
        this.commonOperatGetFunc(url);
    };
    /**
     * [operateCamera 操作摄像机状态]
     * @param {[type]} deviceId [设备id]
     * @param {[type]} cameraId [摄像机id]
     * @param {[type]} operate  [操作类型 open close]
     */
    DeviceService.prototype.operateCamera = function (deviceId, cameraId, code, operate) {
        var url = this.deviceUrl + 'camera/' + cameraId + '?code=' + code + '&did=' + deviceId + '&operation=' + operate;
        this.commonOperatGetFunc(url);
    };
    /**
     * [commonOperatFunc 公共方法]
     * @param {[type]} url  [访问地址]
     * @param {[type]} data [传输数据]
     */
    DeviceService.prototype.commonOperatFunc = function (url, data) {
        console.log(data);
        this.http
            .post(url, JSON.stringify(data), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    /**
     * [commonOperatFunc 公共方法]
     * @param {[type]} url  [访问地址]
     * @param {[type]} data [传输数据]
     */
    DeviceService.prototype.commonOperatGetFunc = function (url) {
        this.http
            .get(url)
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    return DeviceService;
}());
DeviceService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http, Constant])
], DeviceService);
export { DeviceService };
//# sourceMappingURL=device.service.js.map