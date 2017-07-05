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
import { usernameValidator } from '../../app/common/providers/validator';

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
		private storageService: StorageService) {
	} 

	loginForm = this.formBuilder.group({
	    'LoginName': ['', [Validators.required, Validators.minLength(2), usernameValidator]],// 第一个参数是默认值
	    'LoginPwd': ['', [Validators.required, Validators.minLength(6)]]
	 });
	login(user,event): void{
		this.userSevice.login(user.LoginName,user.LoginPwd).then(data => {
			if(data.judge == "0"){
				this.storageService.write('user',data.user);
				let me = this.storageService.read<User>('user');
				let judge = this.judgePermission(me.role.p_ids);
				if(judge) this.navCtrl.push(TabsPage);
				else this.msgToast('用户无权限！');
        		
			}else{
				this.msgToast('用户名或密码错误！');
			}
		});
	}

	judgePermission(permissions): boolean{
		console.log(permissions);
		let count = 0;
		count += permissions.find(x=>x===21)==undefined?0:1;	
		count += permissions.find(x=>x===112)==undefined?0:1;	
		count += permissions.find(x=>x===313)==undefined?0:1;
		return count==3?true:false;	
	}
	msgToast(msg): void{
		let toast = this.toastCtrl.create({
          message: msg,
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
