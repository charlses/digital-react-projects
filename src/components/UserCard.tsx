import { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { Button } from './ui/button'

type UserCardProps = {
  username: string
  password: string
  show: boolean
  onClick: () => void
}

const UserCard = ({ username, password, show, onClick }: UserCardProps) => {
  const [randomColor, setRandomColor] = useState('')

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    setRandomColor(color)
  }

  return (
    <div className='border rounded-md flex flex-col justify-center items-center w-96 h-64 gap-5'>
      <h1
        className={`text-2xl font-bold cursor-pointer`}
        style={{ color: randomColor }}
        onClick={generateRandomColor}
      >
        {username}
      </h1>
      <div className='flex justify-center items-center gap-6'>
        <span>{show ? password : '•'.repeat(password.length)}</span>
        <Button variant='ghost' onClick={onClick}>
          {show ? <FaRegEyeSlash /> : <FaRegEye />}
        </Button>
      </div>
    </div>
  )
}

export default UserCard
