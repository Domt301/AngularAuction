import {Component, ViewEncapsulation} from '@angular/core';
import {Product, ProductService} from '../../services/product-service';

@Component({
    selector: 'auction-application',
    templateUrl: 'app/components/application/application.html', // <3>
    styleUrls: ['app/components/application/application.css'],
    encapsulation:ViewEncapsulation.None
})

export default class ApplicationComponent{
    products: Array<Product> = [];

    constructor(private productService: ProductService){
        this.products = this.productService.getProducts();
    }
}