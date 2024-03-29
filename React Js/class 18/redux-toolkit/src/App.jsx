import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addCounter, minusCounter } from './store/slices/counterSlice'
import axios from 'axios'
import { fetchData } from './store/slices/productSlice'

function App() {
  const [count, setCount] = useState(112)

  const { count: counterSlice } = useSelector(state => state.counter)
  console.log("counterSlice", counterSlice)
  console.log("count", count)

  const dispatch = useDispatch()

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get("https://fakestoreapi.com/products")
  //     console.log("response", response)
  //   }
  //   fetchData()
  // }, [])
  const selector = useSelector(state => state.product)
  console.log("selector", selector)
  useEffect(() => {
    dispatch(fetchData())
  }, [])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(addCounter("JAFFAR AMAN"))}>
          count is {counterSlice}
        </button>
        <button onClick={() => dispatch(minusCounter())}>
          Minus
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App



