import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
    if (mode === 'light') {
      document.body.style.backgroundColor = '#06180b';
      showAlert('Dark Mode has been enabled', 'success');
    } else {
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled', 'success');
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });

    setTimeout(()=>{
      setAlert(null);
    },2000)
 // Alert will disappear after 3 seconds
  };

  return (
    <>
    <Router>
      <Navbar title="Textutils" aboutText="About Textutils" mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alert} />
      <div className="container my-3">
      
      <Routes>
          <Route exact path="/about" element={<About mode={mode}/>} />
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>}/>
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
