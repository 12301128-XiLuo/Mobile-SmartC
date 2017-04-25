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

    /**
     * [operateDevice 操作设备状态]
     * @param {[type]} id      [教室设备列表id]
     * @param {[type]} device  [设备类型]
     * @param {[type]} operate [操作类型 open close]
     */
    operateDevice(id,device,operate): void{
      let url = '/ajax_edit_device_status';
      let data = {
        "did":id,
        "device":device,
        "operation":operate
      }
      console.log(data);
      this.http
        .post(url, JSON.stringify(data), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data)
        .catch(this.handleError);
    }

    /**
     * [operateCamera 操作摄像机状态]
     * @param {[type]} id      [摄像机id]
     * @param {[type]} operate [操作类型 open close]
     */
    operateCamera(id,operate): void{
      let url = '/ajax_edit_camera_status';
      let data = {
        "cid":id,
        "operation":operate
      }
      console.log(data);
      this.http
        .post(url, JSON.stringify(data), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data)
        .catch(this.handleError);
    }

    operateStream(id,operate): void{
      let url = '/ajax_edit_stream_status';
      let data = {
        "did":id,
        "operation":operate
      }
      console.log(data);
      this.http
        .post(url, JSON.stringify(data), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data)
        .catch(this.handleError);
    }
}