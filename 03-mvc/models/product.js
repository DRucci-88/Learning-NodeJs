const fs = require('fs');
const path = require('path');


const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = (callBack) => {
  fs.readFile(p, (err, fileContent) => {
    let product = [];
    if (!err) {
      try {
        product = JSON.parse(fileContent);
      }
      catch (err) { }
    }
    console.log(product);
    callBack(product);
  });
}

module.exports = class Product {
  constructor(title) {
    this.title = title;

  }

  save() {
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    })
  }

  static fetchAll(callBack) {
    getProductsFromFile(callBack);
  }
}
