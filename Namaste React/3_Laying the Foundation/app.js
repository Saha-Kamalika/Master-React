import React from "react";
import ReactDOM from "react-dom/client";

//JSX - HTML like or XML like syntax
const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;
// console.log(jsxHeading);
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

//React Components:
//// Functional component: A js function that returns React Element(s)
const HeadingComponent = () => {
  return (
    <div className="container">
      {/* <Title /> component composition */}
      <h1 className="heading">Namaste React Functional Component</h1>
    </div>
  );
};
const title=<span>Hey Rumi</span>
const Title = () => {
  return (
    <>
      {title}
      <h1>Hello Functional Component</h1>
      {HeadingComponent()}
      <HeadingComponent/>
      <HeadingComponent></HeadingComponent>
    </>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Title/>);
