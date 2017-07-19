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
            return Observable_1.Observable.create(function (observer) {
                var xhr = new XMLHttpRequest();
                xhr.addEventListener("load", function () {
                    //adding logic for error handeling 
                    if (xhr.status === 200) {
                        var data = JSON.parse(xhr.responseText);
                        observer.next(data);
                        observer.complete();
                    }
                    else {
                        observer.error(xhr.statusText);
                    }
                });
                xhr.open("GET", url);
                xhr.send();
            }).retryWhen(retryStrategy({ attempts: 3, delay: 1500 }));
        }
        function retryStrategy(_a) {
            var _b = _a.attempts, attempts = _b === void 0 ? 4 : _b, _c = _a.delay, delay = _c === void 0 ? 1000 : _c;
            return function (errors) {
                return errors // this observable that is returned will be used by retryStrategy to figure out if it should retry or not 
                    .scan(function (acc, value) {
                    console.log(acc, value);
                    return acc + 1;
                }, 0)
                    .takeWhile(function (acc) { return acc < attempts; })
                    .delay(delay);
            };
        }
        function renderMoviews(movies) {
            movies.forEach(function (m) {
                var innerDiv = document.createElement("div");
                innerDiv.innerText = m.title;
                outPut.appendChild(innerDiv);
            });
        }
        clickGetMovie.flatMap(function (e) { return load("./app/rxjspractice/movies404.json"); })
            .subscribe(renderMoviews, function (e) { return console.log("-error: " + e); }, function () { return console.log("-complete"); });
    };
    ;
    ObservablePracticeService = __decorate([
        core_1.Injectable()
    ], ObservablePracticeService);
    return ObservablePracticeService;
}());
exports.ObservablePracticeService = ObservablePracticeService;
//# sourceMappingURL=observable-practice.service.js.map