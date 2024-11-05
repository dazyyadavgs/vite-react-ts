import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddUser from './components/AddUser';
import About from './components/About';
function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  function setSidebarToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <Router>
     
        <Navbar setSidebarToggle={setSidebarToggle} />
        <div className='flex space-x-96'>
        {isOpen && <Sidebar />}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/AddUser" element={<AddUser />} />
        </Routes>

        </div>
        

    
    
    </Router>
  );
}

export default App;
