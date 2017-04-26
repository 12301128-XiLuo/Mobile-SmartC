/**
 * 设备service类
 */
import { User } from '../entity/user.entity'

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class UserService {
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }


}