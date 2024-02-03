import { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
// import { useState } from "react"

function App() {

  // const foo = () => {
  //   console.log("foo")
  // }

  // foo()

  // const foo2 = (firstName, lastName) => {
  //   console.log("foo2", firstName, lastName)
  // }

  // const foo = (ele) => {
  //   console.log("ele", ele.target.innerHTML)
  // }

  // const fooEle = (firstName, ele) => {
  //   console.log("ele", ele.target, firstName)
  // }


  // const finalFoo = () => {
  //   console.log("firstName, elem")
  // }




  // const finalFoo = (firstName) => {
  //   console.log("firstName, elem", firstName)
  // }

  // const finalFoo = (ele) => {
  //   console.log("firstName, elem", ele.target)
  // }

  // const finalFoo = (ele, firstName) => {
  //   console.log("firstName, elem", ele.target, firstName)
  // }



  // var heading = "HELLO WORLD!"

  // const changeTxt = () => {
  //   heading = "HELLO REACT!"
  //   console.log("heading", heading)
  // }

  // const [counter, setCounter] = useState("Jaffar")

  // console.log("counter", counter)

  // const [userName, setUserName] = useState("Jaffar")
  // // console.log("userName", userName)


  // const chagneName = () => {
  //   setUserName("Jaffar Aman")
  // }
  // console.log("Render")






  // var counter = 0
  let [counter, setCounter] = useState(0)

  const plusCounter = () => {
    // counter++
    setCounter(++counter)
  }
  const minusCounter = () => {
    if (counter > 0) {
      setCounter(--counter)
    }

  }

  console.log("render")
  return (
    <>
      {/* <Header /> */}
      {/* <h1>{userName}</h1> */}
      {/* <button onClick={chagneName} >CLICK</button> */}
      {/* <h1>  {heading}  </h1> */}
      {/* <button onClick={changeTxts} >CLICK</button> */}


      <h1>COunter : {counter} </h1>
      <button onClick={minusCounter} >MINUS</button>
      <button onClick={plusCounter} >PLUS</button>
      <button className="btn btn-dark" >HELLO</button>

      <img src="/car1.jpg" alt="" />

      {/* Events start*/}
      {/* <button onClick={foo} >CLICK!  </button> */}
      {/* <button onClick={() => {
          foo("Jaffar")
      }} >CLICK!  </button> */}

      {/* <button onClick={foo}   >ON CLICK EVENT</button> */}
      {/* <button onClick={() => {
        foo2("Jaffar", "Aman")
      }}>ON CLICK EVENT</button> */}
      {/* <button onClick={foo} >GET ELE</button> */}
      {/* <button onClick={(ele) => {
        fooEle("jaffar", ele)
      }} >GET ELE</button> */}

      {/* <button onClick={finalFoo} >CLick</button> */}

      {/* <button onClick={() => {
        finalFoo("asdasd")
      }} >CLick</button> */}

      {/* <button onClick={(ele)=>{
        finalFoo(ele , "Jaffar")
      }} >CLick</button> */}
      {/* Events start*/}









      {/* <Footer /> */}
    </>
  )



}




export default App
