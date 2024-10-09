import React from 'react'

export default function TextForm(props) {
    return (
        <>
            <div className="mb-3">
                <h1 className='pt-4'>{props.heading}</h1>
                <label htmlFor="myBox" className="form-label"></label>
                <textarea className="form-control" id="myBox" rows="4"></textarea>
            </div>
        </>
    )
}

