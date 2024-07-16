import { useState } from 'react'

const UserForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    age: '',
    personalid: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
    setIsSubmitted(false)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Perform form validation and submission logic here
    // Example:
    const { fullname, age, personalid } = formData
    if (fullname && age && personalid) {
      // Submit form data to server
      console.log('Form submitted:', formData)
      setIsSubmitted(true)
      ;(event.target as HTMLFormElement).reset()
    } else {
      console.error('Form validation failed')
    }
  }

  return (
    <div className='flex items-center justify-center flex-col min-h-screen gap-10'>
      <form
        className='flex flex-col items-center justify-center gap-5'
        onSubmit={handleSubmit}
      >
        <div className='flex flex-col gap-2'>
          <label htmlFor='fullname' className='font-semibold'>
            Full Name
          </label>
          <input
            type='text'
            id='fullname'
            name='fullname'
            placeholder='Full Name'
            onChange={(e) => handleInputChange(e)}
            className='border border-gray-900 rounded md w-96 h-10 p-2 focus-visible:outline-none focus-visible:border-black text-gray-900 focus-visible:text-black'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='age' className='font-semibold'>
            Age
          </label>
          <input
            type='text'
            id='age'
            name='age'
            placeholder='Age'
            onChange={(e) => handleInputChange(e)}
            className='border border-gray-900 rounded md w-96 h-10 p-2 focus-visible:outline-none focus-visible:border-black text-gray-900 focus-visible:text-black'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='personalid' className='font-semibold'>
            Personal Id
          </label>
          <input
            type='text'
            id='personalid'
            name='personalid'
            placeholder='Personal Id'
            onChange={(e) => handleInputChange(e)}
            className='border border-gray-900 rounded md w-96 h-10 p-2 focus-visible:outline-none focus-visible:border-black text-gray-900 focus-visible:text-black'
          />
        </div>
        <button
          type='submit'
          className='border border-black p-2 rounded-md hover:bg-black hover:text-white'
        >
          Submit form
        </button>
      </form>
      {formData && isSubmitted && (
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      )}{' '}
    </div>
  )
}

export default UserForm
