import Product from "../src/Product";
import { productList } from "../mock/productList";
import Products from "../src/Products";

describe('Get Product', ()=>{
  test('Success', () => {
    const newProduct = new Product()
    const getProduct = newProduct.get();
    console.log(getProduct);
    expect(newProduct).toBeInstanceOf(Products);
  });
})

describe('Get Products', ()=>{
  test('Success', () => {
    const newProducts = new Products()
    const getProducts = newProducts.get();
    console.log(getProducts);
    expect(newProducts).toBeInstanceOf(Products);
    expect(getProducts).toEqual(productList);
  });
})

describe('Add Products', ()=>{
  test('Success', () => {
    const newProducts = new Products()
    const addProduct = newProducts.add("Mouse pad", 10);
    console.log(addProduct);
    expect(newProducts).toBeInstanceOf(Products);
  });

  test('Bad Request', () => {
    const newProducts = new Products()
    const addProduct = newProducts.add('', 0);
    console.log(addProduct);
    expect(newProducts).toBeInstanceOf(Products);
    expect(addProduct[0]).toEqual('the productName field is required');
    [  ]
  });
})

