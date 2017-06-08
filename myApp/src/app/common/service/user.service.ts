/**
 * 设备service类
 */
import { Constant } from '../constant/constant';

import { Injectable } from '@angular/core';
import { Headers, Http,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Md5 } from "ts-md5/dist/md5";

@Injectable()

export class UserService {
	//private headers = new Headers({'Content-Type': 'application/json'});
	private userUrl;
	private options: any;
	constructor(private http: Http,private constant : Constant) { 
	    this.userUrl = constant.URL+'users/';
	    this.options = new RequestOptions({headers: this.getHeaders()});
	}

	login(username: string,password: string): Promise<any>{
		let url = this.constant.URL+'login?username='+username+'&password='+Md5.hashStr(password).toString();
	    return this.http      
	      .get(url)
	      .toPromise()
	      .then(response => response.json().data)
	      .catch(this.handleError);
	}

	/**
	 * [logout 注销登录]
	 * @return {Promise<any>} [description]
	 */
	logout(): Promise<any>{
		let url = this.constant.URL + 'logout'
		return this.http      
	      .post(url,this.options)	      
	      .toPromise()
	      .then(response => response.json().data)
	      .catch(this.handleError);
	}
	
	private handleError(error: any): Promise<any> {
	  	console.error('An error occurred', error); // for demo purposes only
	  	return Promise.reject(error.message || error);
	}
	private getHeaders(){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return headers;
    }
}