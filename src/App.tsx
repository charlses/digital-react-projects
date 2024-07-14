import { useState } from 'react'
import { userData } from '@/data'
import UserCard from '@/components/UserCard'

const App = () => {
  const [useUserData, setUserData] = useState(userData)

  const handleClick = (id: number) => {
    setUserData((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, show: !user.show } : user
      )
    )
  }

  return (
    <div className='flex flex-wrap gap-10 m-10 items-center justify-center'>
      {useUserData &&
        useUserData.map(({ id, username, password, show }) => (
          <UserCard
            key={id}
            username={username}
            password={password}
            show={show}
            onClick={() => handleClick(id)}
          />
        ))}
    </div>
  )
}

export default App
