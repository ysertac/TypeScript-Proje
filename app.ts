import { Product } from "./Product";
import { ProductService } from "./ProductService";

let _productService = new ProductService();

let result1;
let result2;
let result3;

let p = new Product();

p.id = 2;
p.name = "IPhone 14";
p.category = "Telefon";
p.price = 50000;

_productService.saveProduct(p);
//_productService.deleteProduct(_productService.getById(3));
//_productService.deleteProduct(_productService.getById(1));

result1 = _productService.getProducts();
result2 = _productService.getById(2);
result3 = _productService.getById(5);

console.log(result1);
console.log("***************");
console.log(result2);
console.log("***************");
console.log(result3);
/* console.log(result);
console.log(result);
 */
