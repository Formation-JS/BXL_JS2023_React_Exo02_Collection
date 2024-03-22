import clsx from 'clsx/lite';
import style from './product-list.module.css';
import Price from '../price/price.jsx';

const ProductItem = ({name, price, discount}) => (
    <article className={style['product']}>
        <p className={style['product-name']}>{name}</p>
        {/* <p className={`${style['price-font']} ${discount ? style['discount'] : ''}`}> */}
        <p className={clsx(style['price-font'], discount && style['discount'])}>
            <Price price={price} /> <span>{discount && 'en promo'}</span>
        </p>
    </article> 
);

const ProductList = ({products}) => {
    const productsJSX = products.map(
        product => <ProductItem {...product} key={product.id} />
    );
    console.log('products', products);
    console.log('productsJSX', productsJSX);

    return (
        <section>
            {productsJSX}
        </section>
    )
};

export default ProductList;