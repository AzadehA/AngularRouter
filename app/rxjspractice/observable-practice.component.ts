import { Component, OnInit } from '@angular/core';
import { ObservablePracticeService } from './observable-practice.service';

@Component({
    selector: 'observable-practice',
    templateUrl: 'app/rxjspractice/observable-practice-component.html',
    providers: [ObservablePracticeService]
    //,
    //styles: [`#circle { width: 20px ;
    //                    height: 20px;
    //                    border-radius: 50%;
    //                    background-color: red;
    //                    position: absolute;
    //                  }`]

})

export class ObservablePracticeComponent implements OnInit {
    pagetitle: string = "Product Detail";
    constructor(private _srv: ObservablePracticeService) { }

    ngOnInit(): void {

        this._srv.testOBS();
    }


}
