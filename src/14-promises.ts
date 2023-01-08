import axios from 'axios';

(async () => {
  function delay(time: number) {
    const promise = new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
    return promise;
  }

  function getProducts() {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    return promise;
  }

  async function getProductsAsync() {
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
    return rta.data;
  }

  console.log('------'.repeat(10));
  const res = await delay(3000);
  console.log(res);

  console.log('------'.repeat(10));
  const resProducts = await getProducts();
  console.log(resProducts.data);

  console.log('------'.repeat(10));
  const resProductsV2 = await getProductsAsync();
  console.log(resProducts);
})();
