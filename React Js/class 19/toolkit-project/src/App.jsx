import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import { Grid } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from './redux/slices/productSlice'

function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()
  const { loading, products } = useSelector(state => state.product)

  useEffect(() => {
    dispatch(fetchProduct())
  }, [])

  return (
    <>
      <Navbar />

      {
        loading ? <h1>LOADING....</h1> :
          <Grid container >
            {
              products?.map((prod) => {
                return (
                  <Grid key={prod.id} item lg={3} md={6} sm={6} xs={12} >
                    <ProductCard product={prod} />
                  </Grid>
                )
              })
            }
          </Grid>

      }



    </>
  )
}

export default App
