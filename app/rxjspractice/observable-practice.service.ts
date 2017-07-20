
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
                    //adding logic for error handeling 
                    if (xhr.status === 200) {
                        let data = JSON.parse(xhr.responseText);
                        observer.next(data);
                        observer.complete();
                    }
                    else {
                        observer.error(xhr.statusText);
                    }
                })

                xhr.open("GET", url)
                xhr.send();
            }).retryWhen(retryStrategy({attempts : 3 , delay : 1500})); 
        } 

        function loadWithFetch(url: string)
        {
           
           return Observable.fromPromise( fetch("./app/rxjspractice/movies.json").then( r => r.json()));
        }
        function retryStrategy({attempts = 4, delay = 1000}) {
            return function (errors : Observable<string>) {
                return errors   // this observable that is returned will be used by retryStrategy to figure out if it should retry or not 
                                // if this observable complete or gives error retryStrategy will say I am done
                    .scan((acc : number, value : string) => {
                       console.log(acc , value);
                       return acc + 1;
                    },0)
                    .takeWhile(acc =>  acc < attempts )
                    .delay(delay);
            }
        }

        function renderMoviews(movies: any) {
            movies.forEach((m: any) => {
                let innerDiv = document.createElement("div");
                innerDiv.innerText = m.title;
                outPut.appendChild(innerDiv);

            })
        }

        clickGetMovie.flatMap(e => loadWithFetch("./app/rxjspractice/movies.json"))//load("./app/rxjspractice/movies.json"))
            .subscribe(
            renderMoviews,                
            e => console.log(`-error: ${e}`),
            () => console.log(`-complete`)            
        );


    };


}
  