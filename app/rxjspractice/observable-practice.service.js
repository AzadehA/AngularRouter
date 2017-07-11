"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
//import {  Observable } from  'rxjs';
var ObservablePracticeService = (function () {
    function ObservablePracticeService() {
    }
    ObservablePracticeService.prototype.testOBS = function () {
        var s = Observable_1.Observable.fromEvent(document, "mousemove")
            .map(function (e) {
            return {
                x: e.clientX,
                y: e.clientY
            };
        })
            .filter(function (value) { return value.x < 500; });
        s.subscribe(function (value) { return console.log(value); }, function (e) { return console.log("-error: " + e); }, function () { return console.log("-complete"); });
    };
    ;
    ObservablePracticeService = __decorate([
        core_1.Injectable()
    ], ObservablePracticeService);
    return ObservablePracticeService;
}());
exports.ObservablePracticeService = ObservablePracticeService;
/*
let numbers = [1, 4, 6, 10];
     let s = Observable.create(observer => {
         let index = 0;
         let produceValue = () => {
             observer.next(numbers[index++]);
             if (index < numbers.length)
             {
                 setTimeout(produceValue, 2000)
             }
             else {
                 observer.complete();
             }
         }
         produceValue();

     }).map(n => 2*n)
          .filter(n=> n > 4)
         //.find(n => n % 2 === 1)
         ;

*/ 
//# sourceMappingURL=observable-practice.service.js.map