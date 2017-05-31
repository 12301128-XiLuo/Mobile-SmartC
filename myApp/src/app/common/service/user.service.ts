/**
 * 设备service类
 */
import { User } from '../entity/user.entity';
import { Constant } from '../constant/constant';

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Md5 } from "ts-md5/dist/md5";

@Injectable()

export class UserService {
	private headers = new Headers({'Content-Type': 'application/json'});
	private userUrl;
	
	constructor(private http: Http,private constant : Constant) { 
	    this.userUrl = constant.URL+'users/';
	}

	login(username: string,password: string): Promise<any>{
		//let url = this.userUrl+'/login?username='+username+'&password='+Md5.hashStr(password).toString();	    
		let url = this.constant.URL+'login?username='+username+'&password='+Md5.hashStr(password).toString();
	    return this.http      
	      .get(url)
	      .toPromise()
	      .then(response => response.json().data)
	      .catch(this.handleError);
	}
	private handleError(error: any): Promise<any> {
	  	console.error('An error occurred', error); // for demo purposes only
	  	return Promise.reject(error.message || error);
	}
}