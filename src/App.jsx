//Analytics
import { Analytics } from "@vercel/analytics/react";

//Modules
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

//Stylesheets
import './Stylesheets/global.css';

//Pages
import { Landing, About, Contact, SignUp, Dashboard, Offerings } from "./pages";

function App() {
  return (
    <>
      <Analytics />
      <Router>
        <Routes>
          <Route path="/" element={ <Landing/> }/>
          <Route path="/signup" element={ <SignUp/> }/>
          <Route path="/about" element={ <About/> }/>
          <Route path="/contact" element={ <Contact/> }/>
          <Route path="/dashboard" element={ <Dashboard/> }/>
          <Route path="/offerings" element={ <Offerings/> }/>
        </Routes>
      </Router>
    </>
  )
}

export default App


