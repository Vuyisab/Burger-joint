import { Product } from '../../types/products.ts';


interface ProductProps {
    product: Product
}

export default function ProductComponent ({product:{name,description,price,emoji}}: ProductProps) {
  return (
    <>
      {emoji}
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price}</p>
    </>
  );
}
