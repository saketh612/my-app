import React, { useState } from 'react'


export default function TextForm(props) {

    const handleClick = () => {
        // console.log("Uppercase was clicked"+text)
        let newText = text.toUpperCase();
        settext(newText)
        props.showAlert("Converted to Uppercase", "success")
    }

    const handlelowClick = () => {
        // console.log("Uppercase was clicked"+text)
        let newText = text.toLowerCase();
        settext(newText)
        props.showAlert("Converted to Lowercase", "success")
    }

    const handleOnchange = (event) => {
        console.log("On change")
        settext(event.target.value);
    }
    const Copytext = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard!", "success")
    }

    const RemoveSpaces = () => {
        let newText = text.split(/[ ]+/);
        settext(newText.join(" "))
        props.showAlert("Removed Spaces!", "success")
    }

    const Cleartext = () => {
        settext("")
    }
    const [text, settext] = useState('')
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handlelowClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={Copytext}>Copy text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={RemoveSpaces}>Remove Spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={Cleartext}>ClearText</button>



            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Text summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter your text for preview"}</p>
            </div>
        </>
    )
}
