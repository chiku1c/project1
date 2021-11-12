import React, { useState } from 'react'

export default function TextForm(props) {
    const [state, setstate] = useState(initialState)
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="TextBox" rows="8"></textarea>
            </div>
            <button className="btn btn primary">Contvert Upercase</button>
        </div>
    )
}
