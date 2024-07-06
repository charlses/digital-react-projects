type BankCardProps = {
  bankBalance: { amount: number; currency: string }[]
  loanAmount: number
  loanCurrency: string
  personalId: string
}

const BankCard = ({
  bankBalance,
  loanAmount,
  loanCurrency,
  personalId
}: BankCardProps) => {
  return (
    <div className='flex flex-col gap-2 border w-[400px] shadow-md py-4 px-4 rounded-lg'>
      <div>
        <span className='font-semibold'>Personal ID:</span> {personalId}
      </div>
      <div className='font-semibold flex gap-1'>
        <span>Bank Balance:</span>

        <ul>
          {bankBalance.map((balance, index) => (
            <li key={index} className='text-green-800'>
              {balance.amount}{' '}
              <span className='font-semibold text-gray-900'>
                {balance.currency}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className='text-red-800'>
        <span className='font-semibold text-black'>Loan Amount:</span>{' '}
        {loanAmount}{' '}
        <span className='font-semibold text-black'>{loanCurrency}</span>
      </div>
    </div>
  )
}

export default BankCard
