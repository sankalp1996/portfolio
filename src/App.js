import "./App.css";
import "./css/nav.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Service from "./components/service";
import State from "./components/state";
import navData from "../src/data/navData";
import { Routes, Route } from "react-router-dom";
import Counter from "./components/counter";
import ServiceDetail from "./components/serviceDetail";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar navData={navData} />
      </header>
      {/* <Counter/> */}
      {/* <State/> */}
      {/* <Service/>
       <Home/>
       <About/>
       <Contact/> */}
      <Routes>
        <Route path="*" element={<Home />} /> 
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
