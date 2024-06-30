import one from '@/assets/1.svg'
import two from '@/assets/2.svg'
import three from '@/assets/3.svg'
import four from '@/assets/4.svg'
import five from '@/assets/5.svg'
import six from '@/assets/6.svg'
import seven from '@/assets/7.svg'
import eight from '@/assets/8.svg'
import nine from '@/assets/9.svg'

const Hero = () => {
  return (
    <div className='grid grid-rows-4 items-center justify-center max-h-[800px] gap-5 mx-5 mt-0  lg:mt-10'>
      <div className=' row-start-2 row-end-3 mt-5'>
        <img src={one} alt='wtf' className='w-52' />
      </div>
      <div className='row-start-1 row-end-4 space-y-5'>
        <img src={two} alt='wtf' className='w-52' />
        <img src={three} alt='wtf' className='w-52' />
      </div>
      <div className='row-start-2 row-end-3 space-y-5'>
        <img src={four} alt='wtf' className='w-52' />
        <img src={five} alt='wtf' className='w-52' />
      </div>
      <div className='row-start-1 row-end-4 -mt-4 space-y-5'>
        <img src={six} alt='wtf' className='w-52' />
        <img src={seven} alt='wtf' className='w-52' />
      </div>
      <div className=' row-start-1 row-end-4 mt-4 space-y-5'>
        <img src={eight} alt='wtf' className='w-52' />
        <img src={nine} alt='wtf' className='w-52' />
      </div>
    </div>
  )
}

export default Hero
