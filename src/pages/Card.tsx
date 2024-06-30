import ProfileCard from '@/components/ProfileCard'
import girl from '@/assets/girl.svg'

const CardPage = () => {
  return (
    <div className='flex justify-center mt-8 mb-8 gap-5'>
      <ProfileCard
        img={girl}
        fullname='Laura Smith'
        profession='Frontend Developer'
        email='laurasmith.website'
      />
    </div>
  )
}

export default CardPage
