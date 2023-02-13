import { productList } from "../mock/productList";
import { validRequest } from "./utils/validateRequest";

export default class Products{

    constructor(){};

    get(){
        return productList;
    }

    add(productName: string, price: number){

        const validation = validRequest(productName, price);
        if (validation) return validation;   

        const addProducts: ProductsModel = {
            productName: productName,
            price: price
        }
        productList.push(addProducts);
        return productList;
    }
}