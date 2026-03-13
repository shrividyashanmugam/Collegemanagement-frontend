import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import About from "./components/Pages/About";
import Header from './components/Header';
import Nav from "./Nav"; 
import {BrowserRouter, Routes, Route} from "react-router-dom";

export default function Approuter() {
    return (
        <div>
            <BrowserRouter>
                <Header />     
                <Nav />         
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
