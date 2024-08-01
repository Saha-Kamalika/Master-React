import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import './App.css';

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API; // Make sure your env variable is named correctly
  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <div>
        <NavBar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)} // Reset progress after completion
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={5} country="in" category="general" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={5} country="in" category="health" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={5} country="in" category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={5} country="in" category="entertainment" />} />
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={5} country="in" category="general" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={5} country="in" category="science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={5} country="in" category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={5} country="in" category="technology" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
