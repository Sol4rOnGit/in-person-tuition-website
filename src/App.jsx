//Modules
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

//Stylesheets
import './Stylesheets/global.css';

//Pages
import Landing from './pages/Landing.jsx';
import SignUp from './pages/SignUp.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={ <Landing/> }/> {/* Home path */}
          <Route path="/signup" element={ <SignUp/> }/> {/* For signup page */}
          <Route path="/about" element={ <About/> }/>
          <Route path="/contact" element={ <Contact/> }/>
        </Routes>
      </Router>
  )
}

export default App


