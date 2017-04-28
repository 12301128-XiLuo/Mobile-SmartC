import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';

import { TabsPage } from '../tabs/tabs';

//entity
import { User } from '../../app/common/entity/user.entity';
//service
import { UserService } from '../../app/common/service/user.service';
import { StorageService } from '../../app/common/service/storage.service';

//providers
import { usernameValidator } from '../../app/common/providers/validator'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

	constructor(
		private formBuilder: FormBuilder,
		public navCtrl: NavController,
		public toastCtrl: ToastController,
		private userSevice: UserService,
		private storageService: StorageService) { } 

	loginForm = this.formBuilder.group({
	    'LoginName': ['', [Validators.required, Validators.minLength(2), usernameValidator]],// 第一个参数是默认值
	    'LoginPwd': ['', [Validators.required, Validators.minLength(6)]]
	 });
	login(user,event): void{
		this.userSevice.login(user.LoginName,user.LoginPwd).then(data => {
			console.log(data);
			if(data.msg == "0"){
				this.storageService.write('user',data.user);
				// let ss = this.storageService.read<User>('user');
    			//console.log(ss);
        		this.navCtrl.push(TabsPage);
        		
			}else{
				this.loginToast();
			}
		});
	}

	loginToast(): void{
		let toast = this.toastCtrl.create({
          message: '用户名或密码错误.',
          duration: 3000,
          position: 'bottom',
          showCloseButton: true,
          closeButtonText: '关闭'
        });
        toast.present();
	}
	ngOnInit(): void {
  }
}
