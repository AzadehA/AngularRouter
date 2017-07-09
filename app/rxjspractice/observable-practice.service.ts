
import { Injectable } from '@angular/core';
import { Observable } from  'rxjs/Observable';
//import {Observable} from "rxjs";

import { Observer } from 'rxjs/Observer';
@Injectable()
export class ObservablePracticeService {




    testOBS(): void {

        let numbers = [1, 4, 6, 10];
        let s = Observable.create(observer => {
            for (let n of numbers) {
                observer.next(n);
            }
            observer.complete();
        }

        );  
        //this is clasical way
        s.subscribe(new MyObserver());

        // this is the second and easy way of creating Observer for more simple cases

        //s.subscribe(
        //    value => console.log(`-value: ${value}`),
        //    e => console.log(`-error: ${e}`),
        //    () => console.log(`-complete`)            
        //);

    };


}

//one way of creating Observer 
class MyObserver implements Observer<number> {

    next(value : any) {
        console.log(`value: ${value} `);
    }

    error(e: any) {
        console.log(`error: ${e}`);
    }

    complete()
    { console.log('completed');}
}
   