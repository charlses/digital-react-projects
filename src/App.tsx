import CatCard from './components/CatCard'
import ProductCard from './components/ProductCard'
import { catsData } from './data/cats'
import { ProductData } from './data/products'

const App = () => {
  return (
    <div className='min-h-screen flex flex-col gap-12 items-center justify-center mx-5'>
      <section className='flex gap-10 flex-wrap'>
        {ProductData &&
          ProductData.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
      </section>
      <section className='flex gap-10 flex-wrap items-center justify-center'>
        {catsData &&
          catsData.map((cat, index) => <CatCard key={index} {...cat} />)}
      </section>
    </div>
  )
}

export default App
