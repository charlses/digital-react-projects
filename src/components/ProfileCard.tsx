import { Button } from './ui/button'
import {
  FaEnvelope,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGithub
} from 'react-icons/fa6'

interface ProfileCardProps {
  img: string
  fullname: string
  profession: string
  email: string
}

const ProfileCard = ({
  img,
  fullname,
  profession,
  email
}: ProfileCardProps) => {
  return (
    <article className='w-80 flex items-center flex-col justify-center space-y-2 dark:bg-[#1A1B21] rounded-b-xl bg-[#F5F5F5]'>
      <div className='w-80 h-80'>
        <img src={img} alt={fullname} className='object-cover w-full h-full' />
      </div>

      <div className='flex flex-col items-center justify-center space-y-1 px-8 pb-8'>
        <h2 className='font-bold text-2xl'>{fullname}</h2>
        <h3 className='font-normal text-sm text-[#F3BF99]'>{profession}</h3>
        <p className='text-xs text-[#4A4E74]'>{email}</p>
        <div className='flex gap-4 px-4'>
          <Button className='flex gap-2 items-center justify-center w-32 bg-[#D1D5DB] hover:bg-[#D1D5DB] text-[#374151] dark:text-[#374151]'>
            <FaEnvelope />
            Email
          </Button>
          <Button className='flex gap-2 w-32 bg-[#5093E2] dark:text-[#fff] hover:bg-[#5093E2]'>
            <FaLinkedin className='h-5' />
            Linkedin
          </Button>
        </div>
        <div className='pt-8 space-y-8 dark:text-[#DCDCDC]'>
          <div>
            <h5 className='font-semibold text-xl'>About</h5>
            <p className='text-xs'>
              I am a frontend developer with a particular interest in making
              things simple and automating daily tasks. I try to keep up with
              security and best practices, and am always looking for new things
              to learn.
            </p>
          </div>
          <div>
            <h5 className='font-semibold text-xl'>Interests</h5>
            <p className='text-xs'>
              Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
              Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </p>
          </div>
        </div>
      </div>
      <footer className='h-12 w-full bg-[#D5D4D8] rounded-b-xl  dark:bg-[#161619] text-[#918E9B]dark:text-[#918E9B]'>
        <div className='flex items-center h-full justify-center'>
          <Button variant='ghost'>
            <FaTwitter className='h-5' />
          </Button>
          <Button variant='ghost'>
            <FaFacebook className='h-5' />
          </Button>
          <Button variant='ghost'>
            <FaInstagram className='h-5' />
          </Button>
          <Button variant='ghost'>
            <FaGithub className='h-5' />
          </Button>
        </div>
      </footer>
    </article>
  )
}

export default ProfileCard
