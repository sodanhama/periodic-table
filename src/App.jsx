import { useState } from 'react'
import Table from './components/Table'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <title>Periodic Table</title>
      <h1>Periodic Table</h1>
      <Table />
    </>
  )
}