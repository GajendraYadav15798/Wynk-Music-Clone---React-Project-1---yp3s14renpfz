import "../styles/App.css";
import Album from "./Album";
import Login from "./Login";
import Signup from "./Signup";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';


function App() {
  return <div className="App">
  <Router>
  <Navbar/>
  <Routes>
  <Route path="/" element={<Album/>}/> 
  <Route  path="/Login" element={<Login />}/>
  <Route  path="/Signup" element={<Signup />}/>
  </Routes>
  </Router>
  </div>
 
}

export default App;
