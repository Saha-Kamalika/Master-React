import React from "react";
import ReactDOM from "react-dom/client";

const Header=()=>{
  return (
    <div className="header">
      <div className="logo-container">
      <img src=".\public\images\image.png" alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}
const AppLayout=()=>{
  return (
    <div className="app">
      <Header/>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
