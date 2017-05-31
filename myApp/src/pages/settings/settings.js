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
import { NavController, App, ViewController } from 'ionic-angular';
//service
import { MessageService } from '../../app/common/service/message.service';
import { StorageService } from '../../app/common/service/storage.service';
import { LoginPage } from '../login/login';
var SettingsPage = (function () {
    function SettingsPage(navCtrl, messageService, storageService, viewCtrl, appCtrl) {
        this.navCtrl = navCtrl;
        this.messageService = messageService;
        this.storageService = storageService;
        this.viewCtrl = viewCtrl;
        this.appCtrl = appCtrl;
    }
    /**
 * [getDevices 获取设备列表]
 */
    SettingsPage.prototype.getMessages = function () {
        var _this = this;
        var userId = this.user.id;
        this.messageService.getMessages(userId).then(function (messages) { return _this.messages = messages; });
    };
    SettingsPage.prototype.logout = function () {
        this.storageService.remove("user");
        //this.navCtrl.push(LoginPage);
        this.appCtrl.getRootNav().push(LoginPage);
    };
    SettingsPage.prototype.ngOnInit = function () {
        this.user = this.storageService.read('user');
        //this.getMessages();	
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Component({
        selector: 'page-settings',
        templateUrl: 'settings.html'
    }),
    __metadata("design:paramtypes", [NavController,
        MessageService,
        StorageService,
        ViewController,
        App])
], SettingsPage);
export { SettingsPage };
//# sourceMappingURL=settings.js.map