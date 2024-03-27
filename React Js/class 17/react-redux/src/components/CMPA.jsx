import React, { useState } from 'react'
import CMPB from './CMPB'

const CMPA = () => {
    const [userName, setUserName] = useState("Jaffar")


    return (
        <>
            <h1>userName :{userName}  </h1>
            <h1>CMPA</h1>
            <button onClick={() => setUserName("Jaffar Aman")} >UPDATE</button>
            <CMPB userName={userName} />
        </>
    )
}

export default CMPA