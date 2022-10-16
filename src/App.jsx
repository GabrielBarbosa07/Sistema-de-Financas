import { Header } from "./components/Header/index.jsx"
import { Resume } from "./components/Resume/index.jsx"
import { Form } from "./components/Form/index.jsx"

import { GlobalStyle } from "./styles/global.js"
import { useEffect, useState } from "react"
import { json } from "express"

export default function App() {
  const data = localStorage.getItem("transactions")
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  )
  const [inCome, setInCome] = useState(0)
  const [expense, setExpense] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount))

    const amountInCome = transactionsList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount))

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2)
    const inCome = amountInCome.reduce((acc, cur) => acc + cur, 0).toFixed(2)

    const total = Math.abs(inCome - expense).toFixed(2)

    setInCome(`R$ ${inCome}`)
    setExpense(`R$ ${expense}`)
    setTotal(`${Number(inCome) < Number(expense) ? "-" : ""}R$ ${total}`)
  }, [transactionsList])

  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction]

    setTransactionsList(newArrayTransactions)

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions))
  }

  return (
    <>
      <Header />
      <Resume inCome={inCome} expense={expense} total={total} />
      <Form />
      <GlobalStyle />
    </>
  )
}
