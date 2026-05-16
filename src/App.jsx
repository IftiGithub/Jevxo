import Navbar from "./components/Navbar.jsx"
import './App.css'
import Hero from "./components/Hero.jsx"
import Growth from "./components/Growth.jsx"
import Roi from "./components/Roi.jsx"
import Everything from "./components/Everything.jsx"
import Flexible from "./components/Flexible.jsx"
import Pricing from "./components/Pricing.jsx"
import Outreach from "./components/Outreach.jsx"
import Footer from "./components/Footer.jsx"
import Transform from "./components/Transform.jsx"
import OurShowcase from "./components/Ourshowcase.jsx"

function App() {

  return (
    <>
    <div className="dark-graph min-h-screen w-full">
      <Navbar></Navbar>
      <Hero></Hero>
      <Growth></Growth>
      <Roi></Roi>
      <OurShowcase></OurShowcase>
      <Transform></Transform>
      <Everything></Everything>
      <Flexible></Flexible>
      <Pricing></Pricing>
      <Outreach></Outreach>
      <Footer></Footer>
    </div>
    </>
  )
}

export default App
