import { productList } from "../mock/productList";

export default class Product{

    constructor(){};

    get(){
        return productList.filter((x)=> x.price < 50);
    }
}