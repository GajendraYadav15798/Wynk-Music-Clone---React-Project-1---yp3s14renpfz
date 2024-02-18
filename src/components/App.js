import Album from "./Album";
import Login from "./Login";
import Signup from "./Signup";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./Home";
import Footer from "./Footer";

function App() {
  axios.interceptors.request.use(async (config) => {
    config.headers["projectid"] = "f104bi07c490";
    return config;
  });
  return (
    <div className="App">
      <Home />

      <Routes>
        <Route path="/" element={<Album />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
