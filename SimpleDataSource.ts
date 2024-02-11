import { Product } from "./Product";

export class SimpleDataSource {
  private products: Array<Product>;

  constructor() {
    this.products = new Array<Product>(
      new Product(1, "Iphone 11", "Telefon", 30000),
      new Product(2, "Monster Abra A5", "Notebook", 40000),
      new Product(3, "AirPods", "EarPhone", 5000),
      new Product(4, "Iphone 13", "Telefon", 40000)
    );
  }

  getProducts(): Array<Product> {
    return this.products;
  }
}
