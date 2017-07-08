import { ActivatedRoute , Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
    pagetitle: string = "Product Detail";
    constructor( private _activateRoutr : ActivatedRoute , private _router: Router) { }

    ngOnInit(): void {
        console.log( this._activateRoutr.snapshot.params['id']);
        let id = +this._activateRoutr.snapshot.params['id'];
        this.pagetitle += ` : ${id}`;
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }
}

