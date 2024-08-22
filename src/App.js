import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Service from "./routes/Service";
import About from "./routes/About";
import Blog from "./routes/Blog";
import Contact from "./routes/Contact";

export default function App() {
  return (
    <div className='parent'>
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  );
}
