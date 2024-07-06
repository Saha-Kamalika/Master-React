import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
function App() {
  return (
    <>
    <Navbar title="Textutils" aboutText="About Textutils"></Navbar>
    <div className="container my-3">
      {/* <TextForm heading='Enter the text to analyse'/> */}
      <About></About>
    </div>
    </>
  );
}

export default App;
