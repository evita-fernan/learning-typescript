import { ProductMemoryService } from './services/product-memory.service';

const productService = new ProductMemoryService();

productService.create({
  title: 'product 1',
  price: 100,
  description: 'hola',
  categoryId: 12,
  images: [],
});

const products = productService.getAll();
console.log(products); //con este método se verifica los productos que se encuentran cargados al momento de la consulta
const productId = products[0].id;

//actualizar el title de un producto por medio de su id del producto
productService.update(productId, {
  title: "holis"
})

const res = productService.findOne(productId)
console.log(res);

