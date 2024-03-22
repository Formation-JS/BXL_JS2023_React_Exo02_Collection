import clsx from 'clsx/lite';
import PropTypes from 'prop-types';
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

ProductList.defaultProps = {
    products: []
};

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        discount: PropTypes.bool.isRequired
    }))
};

export default ProductList;