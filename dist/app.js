"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const usersBASEURL = 'http://localhost:3000/users/';
const productsBASEURL = 'http://localhost:3000/products/';
const cartBASEURL = 'http://localhost:3000/cart/';
const ordersBASEURL = 'http://localhost:3000/orders/';
//fetch all the products and display them
//create a page class - that will be re used and renedred depending on the page that we want to render
class Products {
    constructor(productsUrl) {
        this.productsUrl = productsUrl;
    }
    //Gets every product fromo our json file
    fetchProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(productsBASEURL);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const products = yield response.json();
                // console.log(products);
                return products;
            }
            catch (error) {
                console.error('Error fetching products:', error);
                throw new Error('Could not fetch products');
            }
        });
    }
    fetchProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${this.productsUrl}/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const product = yield response.json();
                return product;
            }
            catch (error) {
                console.error('Error fetching product:', error);
                throw new Error('Could not fetch product');
            }
        });
    }
}
const productService = new Products(productsBASEURL);
const products = productService.fetchProducts();
console.log('All Products:', products);
const product = productService.fetchProductById(1);
console.log('Product with ID 1:', product);
