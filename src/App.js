import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { detectOverflow } from '@popperjs/core';


// pages
import Home from "./pages/Home/Home.js";
import Ministerios from "./pages/Ministérios/Ministerios.js";


//components
import Navbarr from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";
import IndividualIntervalsExample from "./components/Carousel/Carousel.js";



function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Navbarr />
      <IndividualIntervalsExample />
       <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Ministerios />} />

          
        </Routes>
       </div>
      <Footer />
     </BrowserRouter>
     
      
    </div>
  );
}



export default App;
