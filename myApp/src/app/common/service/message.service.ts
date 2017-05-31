/**
 * 设备service类
 */
import { Message } from '../entity/message.entity'
import { Constant } from '../constant/constant';

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class MessageService {
	private messageUrl : string;
	
	constructor(private http: Http,private constant : Constant) { 
	    this.messageUrl = constant.URL+'messages/';
	}

	getMessages(): Promise<Message[]>{
	    return this.http      
	      .get(this.messageUrl+'allList')
	      .toPromise()
	      .then(response => response.json().data.list as Message[])
	      .catch(this.handleError);
	}
	private handleError(error: any): Promise<any> {
	  	console.error('An error occurred', error); // for demo purposes only
	  	return Promise.reject(error.message || error);
	}
}