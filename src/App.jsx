import { useAuth0 } from "@auth0/auth0-react";
import ClientData from './components/ClientData'
import CollegeSearch from './components/CollegeSearch'
import Footer from './components/Footer'
import Heroes from './components/Heroes'
import Navbar from './components/Navbar'
import './style/App.css'

function App() {
  const { isAuthenticated } = useAuth0();
  // if (isAuthenticated) {
  return (
    <div className="App">
      <Navbar />
      <Heroes />
      <ClientData />
      <CollegeSearch />
      <Footer />
    </div>
  )
  // }
  // else {
  //   return (
  //     <div className="App">
  //       <Navbar />
  //       <Heroes />
  //       <ClientData />
  //       <Footer />
  //     </div>
  //   )
  // }
}
export default App
