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
    const handlecopyClick = () => {
        let textcopy = document.getElementById('myBox');
        textcopy.select();
        navigator.clipboard.writeText(textcopy.value);

    }
    const handleExtraSpacesClick = () => {
        let cleanedText = text.replace(/\s+/g, ' ');
        setText(cleanedText);
    }
    const handleOnChange = (e) => {
        setText(e.target.value)
    }
    const resetText = () => {
        setText("")
    }
    let words = text.trimStart(" ").split(" ").length - 1;
    const countlines = (text) => {
        return text.split(/\r\n|\r|\n/).length - 1;
    }
    let lines = countlines(text);
    console.log(lines);
    return (
        <>
            <div>
                <div className="container">
                    <div className='d-flex flex-row flex-wrap gap-2 justify-content-between align-items-center'>
                        <h1 className='my-2'>{props.heading}</h1>
                        <button
                            onClick={resetText}
                            className="btn btn-warning my-2 ">Reset Text
                        </button>
                    </div>

                    <textarea
                        placeholder='Enter Text here.'
                        className="form-control mb-2 text-wrap " style={{ resize: 'initial' }} id="myBox" rows="14"
                        onChange={handleOnChange}
                        value={text}
                        spellCheck>

                    </textarea>
                    <button onClick={handleUpClick} className="btn btn-primary m-2"><span className='bi bi-alphabet-uppercase'></span> Convert to Uppercase</button>
                    <button onClick={handleloClick} className="btn btn-primary m-2"><span className='bi bi-alphabet'></span> Convert to Lowercase</button>
                    <button onClick={handlesenClick} className="btn btn-primary m-2"> <span className='bi bi-text-paragraph'></span> Convert to Title Case</button>
                    <button onClick={handlecopyClick} className="btn btn-primary m-2 "> <span className='bi bi-copy'></span> Copy Text</button>
                    <button onClick={handleExtraSpacesClick} className="btn btn-primary m-2 "> <span className='bi bi-backspace'></span> Remove Extra Spaces</button>
                </div>
            </div >
            <div className="container d-flex flex-wrap flex-column gap-2">
                <h2 className='m-0'>Your text summary</h2>

                <div className='mb-1'>
                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                        <button type="button" className="btn btn-danger "><span className='p-2 badge bg-dark rounded-circle text-center mx-1'>{words}</span>Words</button>
                        <button type="button" className="btn btn-warning"><span className='p-2 badge bg-dark rounded-circle text-center mx-1'>{text.length}</span>Characters</button>
                        <button type="button" className="btn btn-success"><span className='p-2 badge bg-dark rounded-circle text-center mx-1'>{lines}</span>Lines</button>
                    </div>
                </div>
                <div className='d-flex flex-row gap-2 flex-wrap align-self-lg-start w-50 bg-info  p-2 rounded-1 '>
                    <i className='bi bi-card-heading'></i>
                    <span className=' text'><strong>{words * 0.008}</strong>Minutes to read</span>
                </div>
                <h3>Preview</h3>
                <p className='shadow-lg text-wrap text-secondary rounded-1 p-2'>{text}</p>
            </div>
        </>
    )
}

