import {products} from '../../data/products'


export const productsDb = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
  