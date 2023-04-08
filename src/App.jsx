import ClientData from './components/ClientData'
import CollegeSearch from './components/CollegeSearch'
import Footer from './components/Footer'
import Heroes from './components/Heroes'
import Navbar from './components/Navbar'
import './style/App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Heroes/>
      <ClientData/>
      <CollegeSearch/>
      <Footer/>
    </div>
  )
}

export default App
