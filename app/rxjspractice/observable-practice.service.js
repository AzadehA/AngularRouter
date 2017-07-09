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
var ObservablePracticeService = (function () {
    function ObservablePracticeService() {
    }
    ObservablePracticeService.prototype.testOBS = function () {
        var numbers = [1, 4, 6, 10];
        var s = Observable_1.Observable.create(function (observer) {
            for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
                var n = numbers_1[_i];
                observer.next(n);
            }
            observer.complete();
        });
        //this is clasical way
        s.subscribe(new MyObserver());
        // this is the second and easy way of creating Observer for more simple cases
        //s.subscribe(
        //    value => console.log(`-value: ${value}`),
        //    e => console.log(`-error: ${e}`),
        //    () => console.log(`-complete`)            
        //);
    };
    ;
    ObservablePracticeService = __decorate([
        core_1.Injectable()
    ], ObservablePracticeService);
    return ObservablePracticeService;
}());
exports.ObservablePracticeService = ObservablePracticeService;
//one way of creating Observer 
var MyObserver = (function () {
    function MyObserver() {
    }
    MyObserver.prototype.next = function (value) {
        console.log("value: " + value + " ");
    };
    MyObserver.prototype.error = function (e) {
        console.log("error: " + e);
    };
    MyObserver.prototype.complete = function () { console.log('completed'); };
    return MyObserver;
}());
//# sourceMappingURL=observable-practice.service.js.map