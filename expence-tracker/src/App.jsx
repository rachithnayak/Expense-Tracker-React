import { useState } from "react"
import Header from "./components/Header"
import Middle from "./components/Middle"
import Bottom from "./components/Bottom"

const App = () => {
const [title, setTitle] = useState("")
const [amount, setAmount] = useState("")
const [expenses, setExpenses] = useState([])

// header.jsx ---------------------
function handleAdd() {
  if (title === "" || amount === "") {
  return
}

const newExpense = {
  id : Date.now(),
  title : title,
  amount : Number(amount)
}

setExpenses([...expenses, newExpense])

setTitle("")
setAmount("")

}

// Middle.jsx ---------------------------
function handleDelete(id) {
  setExpenses (expenses.filter((expense) => {

    return expense.id !== id
    
  }
)
)}

// Bottom.jsx ------------------------------
const total = expenses.reduce((sum, expense) => {

  return sum + expense.amount

}, 0)

  return (
    <div className="font-medium w-auto flex flex-col gap-3 border-2 m-10 px-10 pb-10 pt-4 rounded-2xl bg-[#DCE3AC]">

      <h1 className="text-3xl font-bold text-center pb-8 md:text-left">Expense Tracker</h1>

      <Header 
        setTitle={setTitle}
        setAmount={setAmount}
        amount={amount}
        title={title}
        onAdd={handleAdd}
      />

      <Middle 
        onDelete={handleDelete}
        expenses={expenses}
      />

      <Bottom
        total={total}
       />
    </div>
  )
}

export default App
