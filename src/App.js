import React from "react"
import Header from "./components/Header"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Header name="tracy" id={1} school="Wild" />
      {/* <Header name="abdou" id={2} school="Chickenschool" /> */}
    </div>
  )
}

export default App
