import { useState } from 'react'
import UserForm from './components/UserForm'
import UserCard from './components/UserCards'

interface User {
  fullName: string
  age: string
  acceptedTerms: boolean
}

const App = () => {
  const [users, setUsers] = useState<User[]>([])

  const handleFormSubmit = (formData: User) => {
    setUsers((prevUsers) => [...prevUsers, formData])
  }

  return (
    <div className='flex flex-col lg:flex-row p-4 gap-5'>
      <UserForm onSubmit={handleFormSubmit} />
      <div className='flex flex-wrap gap-2'>
        {users.length === 0 ? (
          <div>No user data submitted.</div>
        ) : (
          users.map((user, index) => <UserCard key={index} user={user} />)
        )}
      </div>
    </div>
  )
}

export default App
