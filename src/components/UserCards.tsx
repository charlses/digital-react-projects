interface User {
  fullName: string
  age: string
  acceptedTerms: boolean
}

interface UserCardProps {
  user: User
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className='flex flex-col gap-2 border rounded-lg shadow-sm w-80 p-2 items-center justify-center max-h-52'>
      <h2>User Information</h2>
      <p>
        <strong>Full Name:</strong> {user.fullName}
      </p>
      <p>
        <strong>Age:</strong> {user.age}
      </p>
      <p>
        <strong>Accepted Terms:</strong> {user.acceptedTerms ? 'Yes' : 'No'}
      </p>
    </div>
  )
}

export default UserCard
