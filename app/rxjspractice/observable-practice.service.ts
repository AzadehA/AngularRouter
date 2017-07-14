
import { Injectable } from '@angular/core';
import { Observable } from  'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';

  
@Injectable()
export class ObservablePracticeService {




    testOBS(): void {
        let circle = document.getElementById("crl");
        
        let s = Observable.fromEvent(document, "mousemove")
            .map((e: MouseEvent) => {
                return {
                    x: e.clientX,
                    y: e.clientY
                   }
            })
            .filter(value => value.x < 500)
            .delay(200);
           
             
        function onNext(v : any ) {
           console.log(String(v.x));
          
           circle.style.width = '10px';
           circle.style.height = '10px';
          // circle.style.position = 'center';
           circle.style.left = String(v.x);
           circle.style.top = String(v.y);
           //circle.style.left = String(v.x);
           //circle.style.top = String(v.y);
            circle.style.backgroundColor = 'green';
        }
        s.subscribe(
            onNext,
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