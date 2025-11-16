//Modules
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

//Stylesheets
import './Stylesheets/global.css';

//Pages
import Landing from './pages/Landing.jsx';
import SignUp from './pages/SignUp.jsx';

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={ <Landing/> }/> {/* Home path */}
          <Route path="/signup" element={ <SignUp/> }/> {/* For signup page */}
        </Routes>
      </Router>
  )
}

export default App


