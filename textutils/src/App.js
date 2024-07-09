import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
    if(mode==='light') document.body.style.backgroundColor='#06180b';
    else document.body.style.backgroundColor= 'white';
  };
 
  return (
    <>
      <Navbar title="Textutils" aboutText="About Textutils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyse" mode={mode}/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
