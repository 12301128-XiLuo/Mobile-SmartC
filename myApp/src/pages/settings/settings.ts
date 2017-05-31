import { Component } from '@angular/core';
import { NavController,App, ViewController } from 'ionic-angular';

//entity
import { Message } from '../../app/common/entity/message.entity';
import { User } from '../../app/common/entity/user.entity';
//service
import { MessageService } from '../../app/common/service/message.service';
import { StorageService } from '../../app/common/service/storage.service';

import { LoginPage } from '../login/login';


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
	user: User;
	messages: Message[];
	buildModel : boolean;

  constructor(
  	public navCtrl: NavController,
  	private messageService: MessageService,
  	private storageService: StorageService,
  	public viewCtrl: ViewController,
    public appCtrl: App) {

  }
    /**
  	 * [getDevices 获取设备列表]
  	 */
  	getMessages(): void {
  		//let userId = this.user.id;
  		this.messageService.getMessages().then(messages => this.messages = messages);
  	}

  	logout(): void{
  		this.storageService.remove("user");
  		this.appCtrl.getRootNav().push(LoginPage);
  	}
  	ngOnInit(): void {
  		this.user = this.storageService.read<User>('user');
	    this.getMessages();	
	}

}
