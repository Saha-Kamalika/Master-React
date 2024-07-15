import React, { useState } from 'react';

export default function TextForm(props) {
    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleUpClick = (event) => {
        event.preventDefault();
        setText(text.toUpperCase());
        props.showAlert("Converted to Uppercase","success");
    };

    const handleLowClick = (event) => {
        event.preventDefault();
        setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase","success");
    };

    const handleClearClick = (event) => {
        event.preventDefault();
        setText('');
        props.showAlert("Text Cleared","success");
    };
    const handleCopy = () => {
        var text=document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied","success");
    };

    const handleExtraSpaces = (event) => {
        event.preventDefault();
        text.trim();
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Cleared Extra Spaces","success");
    };
    
    const [text, setText] = useState("");

    const calculateWordCount = (text) => {
        return text.trim() === '' ? 0 : text.split(/\s+/).filter((elem)=>{return elem.length!==0}).length;
    };

    const calculateMinuteRead = (wordCount) => {
        return (wordCount * 0.008).toFixed(2);
    };

    const wordCount = calculateWordCount(text);
    const minuteRead = calculateMinuteRead(wordCount);

    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <form>
                    <div className="form-group">
                        <label htmlFor="myBox"><h3>{props.heading}</h3></label>
                        <textarea className="form-control" id="myBox" rows="8" onChange={handleOnChange} value={text} style={{color: props.mode==='dark'?'white':'black', backgroundColor: props.mode==='dark'?'#06180b':'white'}}></textarea>
                    </div>
                    <br />
                    <button disabled={text.length===0} className="btn btn-outline-success my-2 my-sm-0 my-3 mx-1" onClick={handleUpClick}>Convert to UPPERCASE</button>
                    <button disabled={text.length===0} className="btn btn-outline-success my-2 my-sm-0 my-3 mx-1" onClick={handleLowClick}>Convert to lowercase</button>
                    <button disabled={text.length===0} className="btn btn-outline-success my-2 my-sm-0 my-3 mx-1" onClick={handleClearClick}>Clear Text</button>
                    <button disabled={text.length===0} className="btn btn-outline-success my-2 my-sm-0 my-3 mx-1" onClick={handleCopy}>Copy Text</button>
                    <button disabled={text.length===0} className="btn btn-outline-success my-2 my-sm-0 my-3 mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                </form>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your text summary: </h2>
                <p>{wordCount} words and {text.length} characters</p>
                <p>{minuteRead} minutes read</p>
                <h3>Preview: </h3>
                <p>{text.length>0?text:'Enter text in the above textbox to preview'}</p>
            </div>
        </>
    );
}

