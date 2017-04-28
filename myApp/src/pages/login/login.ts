import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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
		private userSevice: UserService) { } 

	loginForm = this.formBuilder.group({
	    'LoginName': ['', [Validators.required, Validators.minLength(2), usernameValidator]],// 第一个参数是默认值
	    'LoginPwd': ['', [Validators.required, Validators.minLength(6)]]
	 });
	login(user,event): void{
		this.userSevice.login(user.LoginName,user.LoginPwd).then(data => {
			console.log(data);
			if(data.msg == "0"){
				this.navCtrl.push(TabsPage,{ user: data.user });
			}
		});
	}
	ngOnInit(): void {
  }
}
