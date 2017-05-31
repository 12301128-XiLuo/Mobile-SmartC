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
import { BuildClassService } from '../../../../app/common/service/buildClass.service';
var BuildClassModalPage = (function () {
    function BuildClassModalPage(platform, params, viewCtrl, alertCtrl, buildClassService) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.buildClassService = buildClassService;
    }
    BuildClassModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    BuildClassModalPage.prototype.confirm = function () {
        if (this.build && this.class) {
            var data = {
                "buildingNum": this.build,
                "classroomNum": this.class
            };
            this.viewCtrl.dismiss(data);
        }
        else {
            this.showAlert();
        }
    };
    /**
     * [getPushBuildings 获取教学楼列表]
     */
    BuildClassModalPage.prototype.getPushBuildings = function () {
        var _this = this;
        this.buildClassService.getPushBuildings().then(function (buildings) { return _this.buildings = buildings; });
    };
    BuildClassModalPage.prototype.getPushClass = function () {
        var _this = this;
        this.buildClassService.getClassroomsByName(this.build).then(function (classrooms) { return _this.classrooms = classrooms; });
    };
    BuildClassModalPage.prototype.selectPushBuilding = function () {
        this.getPushClass();
    };
    BuildClassModalPage.prototype.ngOnInit = function () {
        this.getPushBuildings();
    };
    BuildClassModalPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: '注意！',
            subTitle: '请选择教学楼和教室！',
            buttons: ['好']
        });
        alert.present();
    };
    return BuildClassModalPage;
}());
BuildClassModalPage = __decorate([
    Component({
        templateUrl: 'buildClassModal.html'
    }),
    __metadata("design:paramtypes", [Platform,
        NavParams,
        ViewController,
        AlertController,
        BuildClassService])
], BuildClassModalPage);
export { BuildClassModalPage };
//# sourceMappingURL=buildClassModal.js.map