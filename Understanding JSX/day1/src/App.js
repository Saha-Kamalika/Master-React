import logo from './logo.svg';
import './App.css';

let name="World";
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>Gallery</li>
        <li>Contact</li>
      </nav>
      <div className="container">
        <h1>Hello {name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur in quibusdam nobis fugiat ullam tempore sequi doloremque impedit soluta, consectetur non, ab assumenda ut reprehenderit odit praesentium natus dolorem aliquam.</p>
      </div>
    </> //JSX fragment : used to return more than 1 elems
  );
}

export default App;
