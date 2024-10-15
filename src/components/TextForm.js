import React, { useState } from 'react';







export default function TextForm(props) {
    const [text, setText] = useState('Enter text here.');
    // text = "new text ", //wrong way to change state
    // setText("new text"); // correct way to change the state
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        // console.log(`Entered text: ${text} converted into ${newText}`);

    }
    const handleloClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        // console.log(`Entered text: ${text} converted into ${newText}`);

    }
    const handlesenClick = () => {
        if (text === null) {
            return false;
        }
        else {
            text.replace(/\w\S*/g,
                function (txt) {
                    return txt.charAt(0).toUpperCase() +
                        txt.substring(1).toLowerCase();
                }

            )
        }

        // console.log(`Entered text: ${text} converted into ${newText}`);

    }
    const handleOnChange = (e) => {
        // console.log("on Change");
        setText(e.target.value)

    }
    const resetText = () => {
        setText('Enter text here.');
    }
    let words = text.trimStart().split(" ").length;
    console.log(text.trimStart().split(" ").length);
    return (
        <>
            <div>
                <div className="container">
                    <h1 className='d-inline-block my-2'>{props.heading}</h1>
                    <button
                        onClick={resetText}
                        className=" mt-3 btn btn-warning float-lg-end my-2">Reset Text</button>
                    <textarea
                        className="form-control mb-2" style={{ resize: 'initial' }} id="myBox" rows="14"
                        onChange={handleOnChange}
                        value={text} >Rahil-Khan</textarea>
                    <button onClick={handleUpClick} className="btn btn-primary m-2">Convert to Uppercase</button>
                    <button onClick={handleloClick} className="btn btn-primary m-2">Convert to Lowercase</button>
                    <button onClick={handlesenClick} className="btn btn-primary m-2">Convert to Sentence Case</button>
                </div>

                {/* <button className="btn btn-primary mx-1">Convert to Lowercase</button>
            <button className="btn btn-primary mx-1">Convert to Sentence case</button>
            <button className="btn btn-primary mx-1">Convert to Uppercase</button>
            <button className="btn btn-primary mx-1">Convert to Uppercase</button> */}
            </div >
            <div className="container">
                <h1>Your text summary</h1>
                <p>{words} words and {text.length} Characters</p>
                <p>{text.split(" ").length * 0.008} Minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>


    )
}

