import React from 'react'

const Bottom = ({total}) => {
  return (
    <div className='flex flex-row justify-between gap-5 mt-2'>

      <h2 className='border-2 bg-[#FFF7CD] rounded-sm px-2 '>Total Amount</h2>
      <h2 className='border-2 bg-[#FFF7CD] w-20 items-center justify-center flex rounded-sm'>{total}</h2>

    </div>
  )
}

export default Bottom
