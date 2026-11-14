import React from 'react'

const Middle = ({onDelete, expenses}) => {
  return (
    <div>
        {
            expenses.map((expense) =>(
              <div key={expense.id} className= 'p-2 mt-3 rounded-sm border-2 bg-[#FFF7CD] w-full h-auto flex flex-row gap-3 md:justify-between items-center'>
                
                <span className='flex-1 min-w-0 truncate md:flex-none md:w-52 px-2'>{expense.title}</span>
                <span className='flex-1 min-w-0 md:flex-none md:w-52 px-2'>{expense.amount}</span>
                <button className='w-20 shrink-0 border-2 bg-[#FFCA97] rounded-sm hover:bg-[#FCBE85] cursor-pointer' onClick={() => onDelete(expense.id)}>Delete</button>

              </div>
            ))
        }
    </div>
  )
}

export default Middle
