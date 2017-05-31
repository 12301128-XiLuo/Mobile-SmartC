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
var VideoService = (function () {
    function VideoService(http, constant) {
        this.http = http;
        this.constant = constant;
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.videoUrl = constant.URL + 'videos/';
    }
    VideoService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    VideoService.prototype.getPullAddress = function (id, code) {
        var url = this.videoUrl + 'play/' + id + '?code=' + code;
        var data = {
            'did': id,
            'code': code
        };
        return this.commonOperaGetFunc(url);
    };
    /**
     * [operateStream 操作视频推拉流]
     * @param {[type]} id      [教室设备列表id]
     * @param {[type]} operate [操作类型 start_push|broadcast stop_push|pull|broadcast]
     */
    VideoService.prototype.operateStream = function (id, operate) {
        var url = this.videoUrl + id + '?operation=' + operate;
        this.commonOperaGetFunc(url);
    };
    /**
     * [startPullOperate description]
     * @param {[type]} inputBuilding  [教学楼]
     * @param {[type]} classroomNum [教室]
     * @param {[type]} id           [教室设备列表id]
     */
    VideoService.prototype.startPullOperate = function (inputBuilding, inputClassroom, id) {
        var url = this.videoUrl + 'pull/' + id + '?buildingNum=' + inputBuilding + '&classroomNum=' + inputClassroom;
        var data = {
            "buildingNum": inputBuilding,
            "classroomNum": inputClassroom,
            "did": id
        };
        return this.commonOperaGetFunc(url);
    };
    /**
     * [directorCamera 摄像头导播]
     * @param  {[type]}       id        [设备ID]
     * @param  {[type]}       code      [区分摄像头（1、2、3...） ]
     * @param  {[type]}       direction [方向 up down left right]
     * @return {Promise<any>}           []
     */
    VideoService.prototype.directorCamera = function (id, code, direction) {
        var url = this.videoUrl + 'camera/' + id + '?code=' + code + '&direction=' + direction;
        return this.commonOperaGetFunc(url);
    };
    /**
     * [commonOperaGetFunc 公共Get方法]
     * @param {[type]} url  [访问地址]
     */
    VideoService.prototype.commonOperaGetFunc = function (url) {
        console.log(url);
        return this.http
            .get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    return VideoService;
}());
VideoService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http, Constant])
], VideoService);
export { VideoService };
//# sourceMappingURL=video.service.js.map