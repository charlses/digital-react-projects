import { FaEnvelope, FaPhone } from 'react-icons/fa'

interface CatCardProps {
  name: string
  phone: string
  email: string
  img: string
}

const CatCard = ({ name, phone, email, img }: CatCardProps) => {
  return (
    <div className='shadow-lg rounded-xl p-5 border'>
      <img
        src={img}
        alt={name}
        className='object-cover w-full h-60 rounded-lg'
      />
      <div className='p-4 space-y-2'>
        <h3 className='font-bold text-2xl'>{name}</h3>
        <div className='text-gray-600'>
          <p className='flex items-center gap-2'>
            <FaPhone /> {phone}
          </p>
          <p className='flex items-center gap-2'>
            <FaEnvelope />
            {email}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CatCard
