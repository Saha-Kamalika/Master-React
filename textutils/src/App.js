import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';

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
      <Navbar title="Textutils" aboutText="About Textutils" mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
