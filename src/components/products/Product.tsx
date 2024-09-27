import { Product } from '../../types/products.ts';
import './Product.css';

interface ProductProps {
    product: Product
}

export default function ProductComponent ({product:{name,description,price,emoji}}: ProductProps) {
  return (
    <div className='product-container'>
      <section className='product-image'>
        <img src={emoji}/>
      </section>
      <section className='smythe-regular'>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>${price}</p>
      </section>

    </div>
  );
}
