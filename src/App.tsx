import { bankStatementData } from './data/bank'
import BankCard from './components/BankCard'
import AgeState from './components/AgeState'
import MultipleState from './components/MultipleState'

const App = () => {
  return (
    <div className='flex flex-col space-y-10'>
      <h1 className='font-bold text-cyan-900 ml-10 text-2xl'>დავალება 1</h1>
      <div className='flex flex-wrap gap-5 justify-center mt-4 mb-16'>
        {bankStatementData.map((bankStatement, index) => (
          <BankCard key={index} {...bankStatement} />
        ))}
      </div>

      <h1 className='font-bold text-cyan-900 ml-10 text-2xl'>დავალება 2</h1>
      <AgeState />
      <h1 className='font-bold text-cyan-900 ml-10 text-2xl'>დავალება 3</h1>
      <MultipleState />
    </div>
  )
}

export default App
