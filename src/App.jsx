import Navbar from "./components/Navbar.jsx"
import './App.css'
import Hero from "./components/Hero.jsx"
import Growth from "./components/Growth.jsx"
import Roi from "./components/Roi.jsx"

function App() {

  return (
    <>
    <div className="dark-graph min-h-screen w-full">
      <Navbar></Navbar>
      <Hero></Hero>
      <Growth></Growth>
      <Roi></Roi>
    </div>
    </>
  )
}

export default App
