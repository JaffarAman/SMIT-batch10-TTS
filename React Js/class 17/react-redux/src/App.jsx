import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CMPA from './components/CMPA'
import Navbar from './components/Navbar'
import { add } from './store/slices/CounterSlice'
import { useDispatch } from 'react-redux'

function App() {
  const [count, setCount] = useState(0)

  const dispatch = useDispatch()
  console.log("app")
  return (
    <>
      {/* <CMPA /> */}

      <Navbar />
      <button onClick={() => {
        dispatch(add())
      }} >COUNT</button>

    </>
  )
}

export default App




// Redux class link




// Friday class link

