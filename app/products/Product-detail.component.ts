import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
    pagetitle: string = "Product Detail";
    constructor( private _activateRoutr : ActivatedRoute) { }

    ngOnInit(): void {
        console.log( this._activateRoutr.snapshot.params['id']);
        let id = +this._activateRoutr.snapshot.params['id'];
        this.pagetitle += ` : ${id}`;
    }
}

