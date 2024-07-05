import React,{useState} from 'react' // {useState} : hook-> allows to use State and other react features without creating class

export default function TextForm(props) {
    const handleOnChange = (event)=>{
        //console.log("On change ");
        setText(event.target.value);
    }
    const handleUpClick = (event) => {
        event.preventDefault();
        setText(text.toUpperCase());
    };
    const [text,setText] = useState("Enter text here");
    // text="new text" //wrong way to change state;
    // setText("new text") //correct way
    return (
        <div>
            <form>
            <div className="form-group">
                <label htmlFor="myBox"><h3>{props.heading}</h3></label>
                <textarea className="form-control" id="myBox" rows="8" onChange={handleOnChange} value={text}></textarea>
            </div>
            <br />
            <button className="btn btn-outline-success my-2 my-sm-0 my-3" onClick={handleUpClick}>Convert to UpperCase</button>
            </form>
        </div>
    )
}
