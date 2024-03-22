import './App.css'
import ProductList from './components/product-list/product-list.jsx'
import products from './data/products.json';

function App() {

  return (
    <>
      <h1>Exo 02 - Liste de produit</h1>
      <ProductList products={products} />
    </>
  )
}

export default App
