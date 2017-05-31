import { Building } from '../entity/building.entity';
import { BuildClass } from '../entity/buildclass.entity';
import { Classroom } from '../entity/classroom.entity';
import { Constant } from '../constant/constant';


import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class BuildClassService {
	private buildingUrl;
  private videoUrl;
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http,private constant : Constant) { 
    this.videoUrl = constant.URL+'videos/';
    this.buildingUrl = constant.URL+'buildingClassrooms/';
  }
	/**
	 * [getBuildings 获取教学楼列表]
	 * @return {Promise<Building[]>} [教学楼列表]
	 */
	getBuildings(): Promise<Building[]> {
    	return this.http.get(this.buildingUrl+'buildings')
             .toPromise()
             .then(response => response.json().data.buildingList as Building[])
             .catch(this.handleError);
  	}
	private handleError(error: any): Promise<any> {
  	console.error('An error occurred', error); // for demo purposes only
  	return Promise.reject(error.message || error);
	}

	/**
	 * [getClassroomsByName 根据教学楼查询教室列表]
	 * @param  {string}               name [教学楼]
	 * @return {Promise<Classroom[]>}      [教室列表]
	 */
	getClassroomsByName(name: string): Promise<Classroom[]>{
		// let url = this.classroomUrl;
  //   let data = {"name":name}
  //   console.log("buildClassService:"+name);
  //   return this.http      
  //     //.post(url, JSON.stringify(data), {headers: this.headers})
  //     .get(url)
  //     .toPromise()
  //     .then(response => response.json().data.data.classroomList as Classroom[])
  //     .catch(this.handleError);
      let url = this.videoUrl + 'classroomByBuilding?name='+name;
      let data = {
        "name": name
      };
      return this.http
              .get(url)
              .toPromise()
              .then(response => response.json().data.classroomList as Classroom[])
              .catch(this.handleError);
	}
  /**
   * [getPushBuildClass 获取正在推流的教学楼]
   * @return {Promise<Building[]>} [description]
   */
  getPushBuildings(): Promise<Building[]>{
    return this.http.get(this.videoUrl+'pushBuilding')
             .toPromise()
             .then(response => response.json().data.buildingList as Building[])
             .catch(this.handleError);
    // let url = "api/buildings"
    // return this.http.get(url)
    //          .toPromise()
    //          .then(response => response.json().data.data.buildingList as Building[])
    //          .catch(this.handleError);
  }
}