import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {

    const { count } = useSelector((state) => state.counter)
    console.log("Navbar")


    return (
        <>
            <h1>Navbar</h1>

            <h1>
                counter :{count}
            </h1>
        </>
    )
}

export default Navbar