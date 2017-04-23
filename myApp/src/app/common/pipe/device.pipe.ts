import { Pipe, PipeTransform } from '@angular/core';
import { Device } from '../entity/device.entity';

// Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
  name: 'BuildPipe'
})

/**
 * 根据选择的教学楼进行筛选教室列表
 */
export class BuildPipe implements PipeTransform{

  // Transform is the new "return function(value, args)" in Angular 1.x
  transform(allDevices:Device[], args:string) {
  	if(!allDevices) return [];
  	if(!args) return allDevices;
    return allDevices.filter(device => device.buildingNum==args);
  }

}