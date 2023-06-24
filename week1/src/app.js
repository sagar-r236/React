import React from "react";
import ReactDOM  from "react-dom/client";
import HeaderComponent from "./components/Header"
import Body from "./components/Body";
import Footer from "./components/Footer"



const AppComponent = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
   
  )
}

// console.log([...restaurantList[0]])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<AppComponent />)


