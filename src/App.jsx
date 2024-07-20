import Canvas from "./canvas"
import Customizer from "./pages/Customizer"
import Home from "./pages/Home"
import React from "react"
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  

  return (
    <>
      <main className="app transition-all ease-in">
     <Home/>
     <Canvas/>
     <Customizer/>
     {/* <Router> */}
      {/* <Switch>
        <Route path="/" exact component={Customizer} />
        <Route path="/payment" component={PaymentPage} />
      </Switch> */}
    {/* </Router> */}

      </main>
     
    </>
  )
}

export default App
