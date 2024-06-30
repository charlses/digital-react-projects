import logo from '@/assets/airbnb.svg'
import { ModeToggle } from './theme/mode-toggle'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header className='h-16 flex items-center px-12 border-b justify-between shadow-lg'>
      <img src={logo} alt='Air bnb logo' />
      <div className='flex items-center gap-5'>
        <Link to='/'>Profile Card</Link>
        <Link to='/airbnb'>AirBnb</Link>
        <ModeToggle />
      </div>
    </header>
  )
}

export default NavBar
