import { FaStar } from 'react-icons/fa'

interface ProductCardProps {
  img: string
  title: string
  price: number
  status?: string | null
  rating: number
  amountRates: number
  country: string
}

const ProductCard = ({
  img,
  title,
  price,
  status,
  rating,
  amountRates,
  country
}: ProductCardProps) => {
  return (
    <article className=''>
      <div className='relative'>
        {status && (
          <p className='h-4 w-16 absolute top-2 left-2 bg-white text-black text-xs text-center'>
            {status}
          </p>
        )}
        <img src={img} alt={title} className=' rounded-md' />
      </div>
      <div className='flex gap-2 text-sm'>
        <FaStar className='text-[#FE395C] h-5' />
        <p>{rating}</p>
        <p>({amountRates})</p>
        <p>&bull; {country}</p>
      </div>
      <div>
        <p>{title}</p>
        <p>
          <span className='font-semibold'>From ${price} /</span> personn
        </p>
      </div>
    </article>
  )
}

export default ProductCard
