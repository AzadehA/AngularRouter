﻿
import { Injectable } from '@angular/core';
import { Observable } from  'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';

  
@Injectable()
export class ObservablePracticeService {




    testOBS(): void {
        let outPut = document.getElementById("output");
        let button = document.getElementById("button");
        
        let clickGetMovie = Observable.fromEvent(button, "click");
           
        function load(url: string) {

            return Observable.create((observer : any)  => {
                let xhr = new XMLHttpRequest();
                xhr.addEventListener("load", () => {
                    let data = JSON.parse(xhr.responseText);
                    observer.next(data);
                    observer.complete();
                })

                xhr.open("GET", url)
                xhr.send();
            }); 
        } 
          
        function renderMoviews(movies: any) {
            movies.forEach((m: any) => {
                let innerDiv = document.createElement("div");
                innerDiv.innerText = m.title;
                outPut.appendChild(innerDiv);

            })
        }

        clickGetMovie.flatMap(e => load("./app/rxjspractice/movies.json"))
            .subscribe(
            renderMoviews,                
            e => console.log(`-error: ${e}`),
            () => console.log(`-complete`)            
        );


    };


}
  