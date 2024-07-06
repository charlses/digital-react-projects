import { useState } from 'react'

const MultipleState = () => {
  const [multiplesOfFour, setMultiplesOfFour] = useState([4, 8, 12])
  const handleAddMultiple = () => {
    const newMultiple = multiplesOfFour[multiplesOfFour.length - 1] + 4
    setMultiplesOfFour((prev) => [...prev, newMultiple])
  }
  return (
    <div className='flex items-center flex-col justify-center gap-4'>
      <button onClick={handleAddMultiple}>Add a multiple of four</button>
      <ul className='flex flex-wrap gap-4'>
        {multiplesOfFour.map((multiple, index) => (
          <li key={index}>{multiple},</li>
        ))}
      </ul>
    </div>
  )
}

export default MultipleState
