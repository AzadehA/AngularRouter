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
var ObservablePracticeService = (function () {
    function ObservablePracticeService() {
    }
    ObservablePracticeService.prototype.testOBS = function () {
        var outPut = document.getElementById("output");
        var button = document.getElementById("button");
        var clickGetMovie = Observable_1.Observable.fromEvent(button, "click");
        function load(url) {
            var xhr = new XMLHttpRequest();
            xhr.addEventListener("load", function () {
                var movies = JSON.parse(xhr.responseText);
                movies.forEach(function (m) {
                    var innerDiv = document.createElement("div");
                    innerDiv.innerText = m.title;
                    outPut.appendChild(innerDiv);
                });
            });
            xhr.open("GET", url);
            xhr.send();
        }
        clickGetMovie.subscribe(function (v) { return load("./app/rxjspractice/movies.json"); }, function (e) { return console.log("-error: " + e); }, function () { return console.log("-complete"); });
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