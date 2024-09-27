import {products} from '../data/products.ts';
import ProductComponent from '../components/products/Product.tsx';

export default function ProductList () {
  return (
    <>
      {products.map((product => <ProductComponent product={product}/>))}
    </>
  );
}
