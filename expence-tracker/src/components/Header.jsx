import React from 'react'

const Header = ({title, setTitle, amount, setAmount, onAdd}) => {

  return (
    <div className=' w-auto h-auto flex md:justify-between gap-3 flex-row'>
        <input onChange={(e) => setTitle(e.target.value)} 
          value={title} 
          className='px-2 md:flex-none md:w-52 min-w-0 flex-1 border-2 bg-[#FFF7CD] rounded-sm'
          type='text' 
          placeholder='Title' 
        />

        <input onChange={(e) => setAmount(e.target.value)} 
          value={amount} className=' px-2 md:flex-none md:w-52 min-w-0 flex-1 border-2 bg-[#FFF7CD] rounded-sm [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none' 
          type='number' 
          placeholder='Amount'
        />
        
        <button onClick={onAdd} className='md:flex-none md:w-20 w-20 shrink-0 border-2 bg-[#E5FFB3] rounded-sm hover:bg-[#D3EBA5] cursor-pointer' >Add</button>

    </div>
  )
}

export default Header
