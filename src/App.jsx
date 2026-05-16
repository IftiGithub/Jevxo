import Navbar from "./components/Navbar.jsx"
import './App.css'
import Hero from "./components/Hero.jsx"
import Growth from "./components/Growth.jsx"
import Roi from "./components/Roi.jsx"
import Everything from "./components/Everything.jsx"
import Flexible from "./components/Flexible.jsx"

function App() {

  return (
    <>
    <div className="dark-graph min-h-screen w-full">
      <Navbar></Navbar>
      <Hero></Hero>
      <Growth></Growth>
      <Roi></Roi>
      <Everything></Everything>
      <Flexible></Flexible>
    </div>
    </>
  )
}

export default App
