import React, { useEffect } from 'react';
import './App.css';
const url='http://www.omdbapi.com?apiKey=6d8b5209';
const App = () => {
    const searchMovies=async (title)=>{
        const response=await fetch(`${url}&s=${title}`);
        const data=await response.json();
        console.log(data.Search);
        
    }
    useEffect(()=>{
        searchMovies('Spiderman');
    },[])
  return(
    <h1>Hi</h1>
  )
}

export default App;
