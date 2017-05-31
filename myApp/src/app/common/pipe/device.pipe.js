var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
// Tell Angular2 we're creating a Pipe with TypeScript decorators
var BuildPipe = (function () {
    /**
     * 根据选择的教学楼进行筛选教室列表
     */
    function BuildPipe() {
    }
    // Transform is the new "return function(value, args)" in Angular 1.x
    BuildPipe.prototype.transform = function (allDevices, args) {
        if (!allDevices)
            return [];
        if (!args)
            return allDevices;
        return allDevices.filter(function (device) { return device.buildingNum == args; });
    };
    return BuildPipe;
}());
BuildPipe = __decorate([
    Pipe({
        name: 'BuildPipe'
    })
    /**
     * 根据选择的教学楼进行筛选教室列表
     */
], BuildPipe);
export { BuildPipe };
//# sourceMappingURL=device.pipe.js.map