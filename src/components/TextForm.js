import React, { useState } from 'react';







export default function TextForm(props) {
    const [text, setText] = useState('');
    // text = "new text ", //wrong way to change state
    // setText("new text"); // correct way to change the state
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)

    }
    const handleloClick = () => {
        let newText = text.toLowerCase();
        setText(newText)

    }
    const handlesenClick = () => {
        function toTitleCase(str) {
            return str.replace(
                /\w\S*/g,
                text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
            );
        }
        setText(toTitleCase(text));

    }
    const handleOnChange = (e) => {
        setText(e.target.value)
    }
    const resetText = () => {
        let newText = "";
        setText(newText)
    }
    let words = text.trimStart(" ").split(" ").length;
    let lines = text.split("\r\n|\r|\n").length;
    console.log(words);
    return (
        <>
            <div>
                <div className="container">
                    <h1 className='d-inline-block my-2'>{props.heading}</h1>
                    <button
                        onClick={resetText}
                        className=" mt-3 btn btn-warning float-lg-end my-2">Reset Text</button>
                    <textarea
                        placeholder='Enter Text here.'
                        className="form-control mb-2 text-wrap" style={{ resize: 'initial' }} id="myBox" rows="14"
                        onChange={handleOnChange}
                        value={text} >

                    </textarea>
                    <button onClick={handleUpClick} className="btn btn-primary m-2">Convert to Uppercase</button>
                    <button onClick={handleloClick} className="btn btn-primary m-2">Convert to Lowercase</button>
                    <button onClick={handlesenClick} className="btn btn-primary m-2">Convert to Title Case</button>
                </div>

                {/* <button className="btn btn-primary mx-1">Convert to Lowercase</button>
            <button className="btn btn-primary mx-1">Convert to Sentence case</button>
            <button className="btn btn-primary mx-1">Convert to Uppercase</button>
            <button className="btn btn-primary mx-1">Convert to Uppercase</button> */}
            </div >
            <div className="container">
                <h2>Your text summary</h2>

                <div className='mb-1 d-inline-block'>
                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                        <button type="button" className="btn btn-danger"><span className='p-2 badge bg-dark rounded-circle text-center mx-1 bi'>{words}</span>Words</button>
                        <button type="button" className="btn btn-warning"><span className='p-2 badge bg-dark rounded-circle text-center mx-1 '>{text.length}</span>Characters</button>
                        <button type="button" className="btn btn-success"><span className='p-2 badge bg-dark rounded-circle text-center mx-1 '>{lines}</span>Lines</button>
                    </div>

                </div>

                <p className='d-flex flex-wrap flex-row bg-info w-50 p-2 rounded-1 shadow-lg align-items-center '>{text.split(" ").length * 0.008} Minutes to read</p>
                <h3>Preview</h3>
                <p className='shadow-lg text-wrap text-secondary p-2 border'>{text}</p>
            </div>
        </>


    )
}

