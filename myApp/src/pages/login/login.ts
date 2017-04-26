import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { Subject } from 'rxjs/Subject';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';

//entity
import { User } from '../../app/common/entity/user.entity';
//service
import { UserService } from '../../app/common/service/user.service';
@Component({
  selector: 'page-device',
  templateUrl: 'device.html'
})
export class LoginPage {


	constructor(
		public navCtrl: NavController) { } 

	ngOnInit(): void {
  }
}
