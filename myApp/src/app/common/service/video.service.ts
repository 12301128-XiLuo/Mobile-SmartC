/**
 * 设备service类
 */
//import { Camera } from '../entity/camera.entity'
import { Constant } from '../constant/constant';

import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class VideoService {
	private videoUrl;
	//private headers = new Headers({'Content-Type': 'application/json'});
  private options : any;
	constructor(private http: Http,private constant : Constant) { 
    this.videoUrl = constant.URL+'videos/';
    this.options = new RequestOptions({withCredentials: true});
  }
	
  	private handleError(error: any): Promise<any> {
    	console.error('An error occurred', error); // for demo purposes only
      if ( String(error).indexOf('token')) {
        localStorage.removeItem('user');
        location.reload();
      }
    	return Promise.reject(error.message || error);
  	}

    getPullAddress(id,code): Promise<any>{      
      let url = this.videoUrl+'play/'+id+'?code='+code;
      // let data = {
      //   'did': id,
      //   'code':code
      // };
      return this.commonOperaGetFunc(url);
    }


    /**
     * [operateStream 操作视频推拉流]
     * @param {[type]} id      [教室设备列表id]
     * @param {[type]} operate [操作类型 start_push|broadcast stop_push|pull|broadcast]
     */
    operateStream(id,operate): Promise<any>{
      let url = this.videoUrl+id+'?operation='+operate;
      return this.commonOperaGetFunc(url);
    }

    /**
     * [startPullOperate description]
     * @param {[type]} inputBuilding  [教学楼]
     * @param {[type]} classroomNum [教室]
     * @param {[type]} id           [教室设备列表id]
     */
    startPullOperate(inputBuilding,inputClassroom,id): Promise<any>{
      let url = this.videoUrl+'pull/'+id+'?buildingNum='+inputBuilding+'&classroomNum='+inputClassroom;
      // let data = {
      //   "buildingNum":inputBuilding,
      //   "classroomNum":inputClassroom,
      //   "did":id
      // };
      return this.commonOperaGetFunc(url);
    }

    /**
     * [directorCamera 摄像头导播]
     * @param  {[type]}       id        [设备ID]
     * @param  {[type]}       code      [区分摄像头（1、2、3...） ]
     * @param  {[type]}       direction [方向 up down left right]
     * @return {Promise<any>}           []
     */
    directorCamera(id,code,direction): Promise<any>{
      let url = this.videoUrl+'camera/'+id+'?code='+code+'&direction='+direction;
      return this.commonOperaGetFunc(url)
    }
    /**
     * [commonOperaGetFunc 公共Get方法]
     * @param {[type]} url  [访问地址]
     */
    commonOperaGetFunc(url): Promise<any>{
      console.log(url);
      return this.http
        .get(url,this.options)
        .toPromise()
        .then(response => response.json().data)
        .catch(this.handleError);
    }

  
}