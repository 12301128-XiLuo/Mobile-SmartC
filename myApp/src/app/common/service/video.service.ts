/**
 * 设备service类
 */
import { Camera } from '../entity/camera.entity'

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class VideoService {
	private deviceUrl = 'api/video';
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }
	
  	private handleError(error: any): Promise<any> {
    	console.error('An error occurred', error); // for demo purposes only
    	return Promise.reject(error.message || error);
  	}

    getPullAddress(id,cameraId): Promise<any>{
      let url = '/ajax_get_pull_address';
      let data = {
        "did":id,
        "cameraId":cameraId
      }            
      return this.http      
        .post(url, JSON.stringify(data), {headers: this.headers})
        //.get(url)
        .toPromise()
        .then(response => response.json().data.data)
        .catch(this.handleError);
    }

  
}