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
import { Md5 } from "ts-md5/dist/md5";
var UserService = (function () {
    function UserService(http, constant) {
        this.http = http;
        this.constant = constant;
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.userUrl = constant.URL + 'users/';
    }
    UserService.prototype.login = function (username, password) {
        //let url = this.userUrl+'/login?username='+username+'&password='+Md5.hashStr(password).toString();	    
        var url = this.constant.URL + 'login?username=' + username + '&password=' + Md5.hashStr(password).toString();
        return this.http
            .get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return UserService;
}());
UserService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http, Constant])
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map