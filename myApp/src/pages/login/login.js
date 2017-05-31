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
import { NavController, ToastController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { TabsPage } from '../tabs/tabs';
//service
import { UserService } from '../../app/common/service/user.service';
import { StorageService } from '../../app/common/service/storage.service';
//providers
import { usernameValidator } from '../../app/common/providers/validator';
var LoginPage = (function () {
    function LoginPage(formBuilder, navCtrl, toastCtrl, userSevice, storageService) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.userSevice = userSevice;
        this.storageService = storageService;
        this.loginForm = this.formBuilder.group({
            'LoginName': ['', [Validators.required, Validators.minLength(2), usernameValidator]],
            'LoginPwd': ['', [Validators.required, Validators.minLength(6)]]
        });
    }
    LoginPage.prototype.login = function (user, event) {
        var _this = this;
        this.userSevice.login(user.LoginName, user.LoginPwd).then(function (data) {
            if (data.judge == "0") {
                _this.storageService.write('user', data.user);
                // let ss = this.storageService.read<User>('user');
                //console.log(ss);
                _this.navCtrl.push(TabsPage);
            }
            else {
                _this.loginToast();
            }
        });
    };
    LoginPage.prototype.loginToast = function () {
        var toast = this.toastCtrl.create({
            message: '用户名或密码错误.',
            duration: 3000,
            position: 'bottom',
            showCloseButton: true,
            closeButtonText: '关闭'
        });
        toast.present();
    };
    LoginPage.prototype.ngOnInit = function () {
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Component({
        selector: 'page-login',
        templateUrl: 'login.html'
    }),
    __metadata("design:paramtypes", [FormBuilder,
        NavController,
        ToastController,
        UserService,
        StorageService])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.js.map