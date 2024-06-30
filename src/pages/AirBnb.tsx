import Hero from '@/components/Hero'
import ProductCard from '@/components/ProductCard'
import { ProductData } from '@/data/productdata'

const AirBnb = () => {
  return (
    <main className='w-9/12 mx-auto'>
      <Hero />
      <section className='flex flex-col mb-12 gap-6'>
        <h2 className='font-bold text-3xl'>Online Experiences</h2>
        <p className='font-light text-sm w-96'>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </section>
      <section className='flex gap-12 mb-24 w-full'>
        {ProductData &&
          ProductData.map((product, index) => (
            <ProductCard
              key={index}
              img={product.image}
              title={product.title}
              price={product.price}
              status={product.status}
              rating={product.rating}
              amountRates={product.amountRates}
              country={product.country}
            />
          ))}
      </section>
    </main>
  )
}

export default AirBnb
