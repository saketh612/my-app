import React,{useState} from 'react'


export default function TextForm(props) {

    const handleClick =()=>{
        console.log("Uppercase was clicked"+text)
        let newText = text.toUpperCase();
        settext(newText)
    }

    const handlelowClick =()=>{
        console.log("Uppercase was clicked"+text)
        let newText = text.toLowerCase();
        settext(newText)
    }

    const handleOnchange =(event)=>{
        console.log("On change")
        settext(event.target.value);
    }
    const Copytext =()=>{
        navigator.clipboard.writeText(text);
    }

    const RemoveSpaces =()=>{
        let newText = text.split(/[ ]+/);
        settext(newText.join(" "))
    }
    const[text,settext] = useState('')
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value ={text} onChange={handleOnchange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handlelowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={Copytext}>Copy text</button>
            <button className="btn btn-primary mx-1" onClick={RemoveSpaces}>Remove Spaces</button>


        </div>
        <div className="container my-3">
            <h2>Text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}