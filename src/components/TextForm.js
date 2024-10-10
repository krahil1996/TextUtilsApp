import React, { useState } from 'react'






export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');


    return (
        <div>
            <div className="mb-3">
                <h1 className='pt-4'>{props.heading}</h1>
                <textarea placeholder={text} className="form-control" style={{ resize: 'initial' }} id="myBox" rows="14"></textarea>
            </div>
            <button className="btn btn-primary mx-1">Convert to Uppercase</button>
            <button className="btn btn-primary mx-1">Convert to Lowercase</button>
            <button className="btn btn-primary mx-1">Convert to Sentence case</button>
            <button className="btn btn-primary mx-1">Convert to Uppercase</button>
            <button className="btn btn-primary mx-1">Convert to Uppercase</button>
        </div >


    )
}

