import "../styles/App.css";
import Album from "./Album";
import Login from "./Login";
import Signup from "./Signup";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import axios from "axios";


function App() {
  axios.interceptors.request.use(async (config) => {
    config.headers['projectid'] = "f104bi07c490";
    return config;
  })
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
