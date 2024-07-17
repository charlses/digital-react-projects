import { useState, ChangeEvent, FormEvent } from 'react'

interface UserFormProps {
  onSubmit: (formData: User) => void
}

interface User {
  fullName: string
  age: string
  acceptedTerms: boolean
}

const UserForm = ({ onSubmit }: UserFormProps) => {
  const [formData, setFormData] = useState<User>({
    fullName: '',
    age: '',
    acceptedTerms: false
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(formData)
    setFormData({ fullName: '', age: '', acceptedTerms: false })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-4 p-4 border rounded-lg shadow-sm w-96'
    >
      <h2 className='text-xl lg:text-2xl font-bold'>User Form</h2>
      <div className='flex flex-col gap-2'>
        <label className='font-semibold'>Full Name:</label>
        <input
          type='text'
          name='fullName'
          placeholder='Full Name'
          value={formData.fullName}
          onChange={handleChange}
          className='border border-gray-900 rounded md w-80 h-10 p-2 focus-visible:outline-none focus-visible:border-black text-gray-900 focus-visible:text-black'
          required
        />
      </div>
      <div className='flex flex-col gap-2'>
        <label className='font-semibold'>Age:</label>
        <input
          type='number'
          name='age'
          value={formData.age}
          onChange={handleChange}
          className='border border-gray-900 rounded md w-80 h-10 p-2 focus-visible:outline-none focus-visible:border-black text-gray-900 focus-visible:text-black'
          required
        />
      </div>
      <div className='flex gap-2 items-center'>
        <label className='text-xs'>Accept terms and conditions</label>
        <input
          type='checkbox'
          name='acceptedTerms'
          checked={formData.acceptedTerms}
          onChange={handleChange}
        />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default UserForm
