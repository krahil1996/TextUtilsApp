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
                    <button onClick={handlesenClick} className="btn btn-primary m-2">Convert to Sentence Case</button>
                </div>

                {/* <button className="btn btn-primary mx-1">Convert to Lowercase</button>
            <button className="btn btn-primary mx-1">Convert to Sentence case</button>
            <button className="btn btn-primary mx-1">Convert to Uppercase</button>
            <button className="btn btn-primary mx-1">Convert to Uppercase</button> */}
            </div >
            <div className="container">
                <h2>Your text summary</h2>

                <div className='d-flex flex-wrap gap-2 flex-row shadow-lg align-items-center justify-content-evenly text-light w-50 bg-danger rounded-1 p-1 mb-1'>
                    <div className='p-1   '>
                        <span className='p-2 badge bg-dark rounded-circle text-center'>{words}</span><p className='px-1 d-inline'>Words</p>
                    </div>
                    <span className='border-2 border-end border-secondary border-opacity-50 text-danger'>{"."}</span>
                    <div className='p-1 '>
                        <span className='p-2 badge bg-dark rounded-circle text-center '>{text.length}</span><p className='px-1 d-inline'>Characters</p>
                    </div>
                    <span className='border-2 border-end border-secondary border-opacity-50 text-danger'>{"."}</span>
                    <div className='p-1 '>
                        <span className='p-2 badge bg-dark rounded-circle text-center '>{lines}</span><p className='px-1 d-inline'>Characters</p>
                    </div>

                </div>

                <p>{text.split(" ").length * 0.008} Minutes read</p>
                <h3>Preview</h3>
                <p className='shadow-lg text-wrap text-secondary p-2 border'>{text}</p>
            </div>
        </>


    )
}

