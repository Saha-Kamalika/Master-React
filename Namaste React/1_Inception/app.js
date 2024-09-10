import React from "react";
import ReactDOM from "react-dom/client";
// const heading = document.createElement("h1");
// heading.innerHTML = "Hello World from JS";

// const root = document.querySelector("#root");
// root.appendChild(heading);


// using React
// const heading = React.createElement("h1", {id: "heading"}, "Hello from React");

{/* <div id="parent">
    <div id="child">
        <h1>i am h1</h1>
    </div>
</div> */}
const parent=React.createElement("div", {id: "parent"},
    React.createElement("div",{id: "child"},
        [React.createElement("h1",{},"i am h1"), React.createElement("h2",{}, "i am h2")]
    )
)
console.log(parent); //returns an object

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent);
