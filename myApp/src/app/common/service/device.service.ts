/**
 * 设备service类
 */
import { Device } from '../entity/device.entity'

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class DeviceService {
	private deviceUrl = 'api/devices';
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }
	
	/**
	 * [getDevices 获取设备列表]
	 * @return {Promise<Device[]>} [设备列表]
	 */
  	getDevices(): Promise<Device[]> {
    	return this.http.get(this.deviceUrl)
             .toPromise()
             .then(response => response.json().data.data.deviceStatusList as Device[])
             .catch(this.handleError);
  	}
  	private handleError(error: any): Promise<any> {
    	console.error('An error occurred', error); // for demo purposes only
    	return Promise.reject(error.message || error);
  	}
}