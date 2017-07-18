
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
            let xhr = new XMLHttpRequest();
            xhr.addEventListener("load", () => {
                let movies = JSON.parse(xhr.responseText);
                movies.forEach((m: string) => {
                    let innerDiv = document.createElement("div");
                    innerDiv.innerText = m.title;
                    outPut.appendChild(innerDiv);
                })
            })
            xhr.open("GET", url)
            xhr.send();
        }   
             
        clickGetMovie.subscribe(
            v => load("./app/rxjspractice/movies.json"),
            e => console.log(`-error: ${e}`),
            () => console.log(`-complete`)            
        );


    };


}
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