/**
 * 设备service类
 */
import { Device } from '../entity/device.entity'
import { Constant } from '../constant/constant';

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class DeviceService {
  private deviceUrl;  
	private assignDeviceUrl;	
  private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http,private constant : Constant) { 
    this.deviceUrl = constant.URL+'deviceMonitor/';
    this.assignDeviceUrl = constant.URL+'assignDevice/';
  }
	
	/**
	 * [getDevices 获取设备列表]
	 * @return {Promise<Device[]>} [设备列表]
	 */
  	getDevices(): Promise<Device[]> {
    	return this.http.get(this.deviceUrl)
             .toPromise()
             .then(response => response.json().data.deviceStatusList as Device[])
             .catch(this.handleError);
  	}
  	private handleError(error: any): Promise<any> {
    	console.error('An error occurred', error); // for demo purposes only
    	return Promise.reject(error.message || error);
  	}

    /**
     * [getDeviceById 根据ID获取deviceinfo]
     * @param  {[type]}          id [设备ID]
     * @return {Promise<Device>}    [description]
     */
    getDeviceById(id): Promise<Device>{
      let url = this.assignDeviceUrl+id;
      return this.http
          .get(url)
          .toPromise()
          .then(response => response.json().data.deviceInfo as Device)
          .catch(this.handleError);
    }

    /**
     * [operateDevice 操作设备状态]
     * @param {[type]} id      [教室设备列表id]
     * @param {[type]} device  [设备类型]
     * @param {[type]} operate [操作类型 open close]
     */
    operateDevice(id,device,operate): Promise<any>{      
      let url = this.deviceUrl+id+'?device='+device+'&operation='+operate;
      return this.commonOperatGetFunc(url);
    }

    /**
     * [operateCamera 操作摄像机状态]
     * @param {[type]} deviceId [设备id]
     * @param {[type]} cameraId [摄像机id]
     * @param {[type]} operate  [操作类型 open close]
     */
    operateCamera(deviceId,cameraId,code,operate): Promise<any>{
      let url = this.deviceUrl+'camera/'+cameraId+'?code='+code+'&did='+deviceId+'&operation='+operate;
      return this.commonOperatGetFunc(url);
    }

    /**
     * [commonOperatFunc 公共方法]
     * @param {[type]} url  [访问地址]
     * @param {[type]} data [传输数据]
     */
    commonOperatFunc(url,data): void{
      console.log(data);
      this.http
        .post(url, JSON.stringify(data), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data)
        .catch(this.handleError);
    }

    /**
     * [commonOperatFunc 公共方法]
     * @param {[type]} url  [访问地址]
     * @param {[type]} data [传输数据]
     */
    commonOperatGetFunc(url): Promise<any>{
      return this.http
        .get(url)
        .toPromise()
        .then(res => res.json().data)
        .catch(this.handleError);
    }
}