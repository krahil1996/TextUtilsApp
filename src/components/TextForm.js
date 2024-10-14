import React, { useState } from 'react';







export default function TextForm(props) {
    const [text, setText] = useState('Enter text here.');
    // text = "new text ", //wrong way to change state
    // setText("new text"); // correct way to change the state
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        console.log(`Entered text: ${text} converted into ${newText}`);

    }
    const handleOnChange = (e) => {
        console.log("on Change");
        setText(e.target.value)

    }
    const resetText = () => {
        setText('Enter text here.');
    }

    return (
        <div>
            <div className="mb-3">
                <h1 className='pt-4'>{props.heading}</h1>
                <button
                    onClick={resetText}
                    className="btn btn-warning float-end m-2">Reset Text</button>
                <textarea
                    onMouseDownCapture={() => { setText("") }}
                    onChange={handleOnChange}
                    value={text} className="form-control" style={{ resize: 'initial' }} id="myBox" rows="14"></textarea>
            </div>
            <button onClick={handleUpClick} className="btn btn-primary mx-1">Convert to Uppercase</button>
            {/* <button className="btn btn-primary mx-1">Convert to Lowercase</button>
            <button className="btn btn-primary mx-1">Convert to Sentence case</button>
            <button className="btn btn-primary mx-1">Convert to Uppercase</button>
            <button className="btn btn-primary mx-1">Convert to Uppercase</button> */}
        </div >


    )
}

