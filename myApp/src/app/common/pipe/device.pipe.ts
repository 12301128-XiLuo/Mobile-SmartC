import { Pipe, PipeTransform } from '@angular/core';
import { Device } from '../entity/device.entity';

// Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
  name: 'AgePipe'
})
export class AgePipe implements PipeTransform{

  // Transform is the new "return function(value, args)" in Angular 1.x
  transform(allDevices:Device[], args:string) {
  	if(!allDevices) return [];

    // ES6 array destructuring
    console.log(allDevices+' '+args);
    return allDevices.filter(device => device.buildingNum==args);
  }

}