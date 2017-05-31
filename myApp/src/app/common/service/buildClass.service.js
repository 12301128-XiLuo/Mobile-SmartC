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
var BuildClassService = (function () {
    function BuildClassService(http, constant) {
        this.http = http;
        this.constant = constant;
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.videoUrl = constant.URL + 'videos/';
        this.buildingUrl = constant.URL + 'buildingClassrooms/';
    }
    /**
     * [getBuildings 获取教学楼列表]
     * @return {Promise<Building[]>} [教学楼列表]
     */
    BuildClassService.prototype.getBuildings = function () {
        return this.http.get(this.buildingUrl + 'buildings')
            .toPromise()
            .then(function (response) { return response.json().data.buildingList; })
            .catch(this.handleError);
    };
    BuildClassService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    /**
     * [getClassroomsByName 根据教学楼查询教室列表]
     * @param  {string}               name [教学楼]
     * @return {Promise<Classroom[]>}      [教室列表]
     */
    BuildClassService.prototype.getClassroomsByName = function (name) {
        // let url = this.classroomUrl;
        //   let data = {"name":name}
        //   console.log("buildClassService:"+name);
        //   return this.http      
        //     //.post(url, JSON.stringify(data), {headers: this.headers})
        //     .get(url)
        //     .toPromise()
        //     .then(response => response.json().data.data.classroomList as Classroom[])
        //     .catch(this.handleError);
        var url = this.videoUrl + 'classroomByBuilding?name=' + name;
        var data = {
            "name": name
        };
        return this.http
            .get(url)
            .toPromise()
            .then(function (response) { return response.json().data.classroomList; })
            .catch(this.handleError);
    };
    /**
     * [getPushBuildClass 获取正在推流的教学楼]
     * @return {Promise<Building[]>} [description]
     */
    BuildClassService.prototype.getPushBuildings = function () {
        return this.http.get(this.videoUrl + 'pushBuilding')
            .toPromise()
            .then(function (response) { return response.json().data.buildingList; })
            .catch(this.handleError);
        // let url = "api/buildings"
        // return this.http.get(url)
        //          .toPromise()
        //          .then(response => response.json().data.data.buildingList as Building[])
        //          .catch(this.handleError);
    };
    return BuildClassService;
}());
BuildClassService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http, Constant])
], BuildClassService);
export { BuildClassService };
//# sourceMappingURL=buildClass.service.js.map