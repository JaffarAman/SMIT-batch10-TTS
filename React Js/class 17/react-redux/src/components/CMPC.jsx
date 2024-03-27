import React from 'react'
import CMPD from './CMPD'

const CMPC = ({ userName }) => {

  console.log("CMP C RERender")

  return (
    <>
      <h1>CMPC</h1>
      <CMPD userName={userName} />
    </>
  )
}

export default CMPC