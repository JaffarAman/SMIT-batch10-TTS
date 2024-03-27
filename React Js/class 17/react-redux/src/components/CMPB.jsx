import React from 'react'
import CMPC from './CMPC'

const CMPB = ({ userName }) => {
  console.log("CMP B RERender")

  return (
    <>
      <h1>CMPB</h1>
      <CMPC userName={userName} />
    </>
  )
}

export default CMPB