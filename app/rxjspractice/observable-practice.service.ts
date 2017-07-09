
import { Injectable } from '@angular/core';
import { Observable } from  'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';


@Injectable()
export class ObservablePracticeService {




    testOBS(): void {

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
        
        s.subscribe(
            value => console.log(`-value: ${value}`),
            e => console.log(`-error: ${e}`),
            () => console.log(`-complete`)            
        );

    };


}
   