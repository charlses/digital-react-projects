import { useState } from 'react'

const AgeState = () => {
  const [age, setAge] = useState(10)
  const handleIncrement = () => {
    setAge((prev) => prev + 5)
  }
  const handleDecrement = () => {
    setAge((prev) => (prev >= 3 ? prev - 3 : 0))
  }
  return (
    <div className='flex items-center justify-center gap-6'>
      <button onClick={handleIncrement}>+5</button>
      <p className='w-8'>{age}</p>
      <button onClick={handleDecrement}>-3</button>
    </div>
  )
}

export default AgeState
