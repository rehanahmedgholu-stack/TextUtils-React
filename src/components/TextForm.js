import React,{ useState} from 'react'

export default function TextForm(props) {
   const handleUpClick = ()=>{
    console.log("Uppercase was clicked" +text);
    let newText=text.toUpperCase();
    setText(newText)  
    props.showAlert("Converted to uppercase!","success");
}
     const handleLoClick = ()=>{
    console.log("Lowercase was clicked" +text);
    let newText=text.toLowerCase();
    setText(newText)  
        props.showAlert("Converted to lowercase!","success");

}
     const handleClearClick = ()=>{
    console.log("clear text was clicked");
    let newText="";
    setText(newText)  
    props.showAlert("Text is cleared","success");

}
    const handleCopyClick = () => {
    console.log("I am copy");
    var textArea = document.getElementById('myBox');
    textArea.select();

    navigator.clipboard.writeText(textArea.value);
    props.showAlert("Copied to clipboard","success");

}

   const handleExtraSpaces = () => {
  let newText = text.split(/\s+/);
  setText(newText.join(" "));
  props.showAlert("Extraspaces are removed","success");

}
    const handleOnChange = (event)=>{
    console.log("handle on change");
    setText(event.target.value);
   }
    const[text ,setText]=useState("");
  return (
    <>
    <div className="conatiner" style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
  <div className="mb-3">
  
 
  <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor:props.mode==='light'?'white':'grey',
    color:props.mode==='dark'?'white':'#042743'
  }} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1 my-1"onClick={handleUpClick}>Convert To Uppercase</button>
<button className="btn btn-primary mx-1 my-1"onClick={handleLoClick}>Convert To Lowercase</button>
<button className="btn btn-primary mx-1 my-1"onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-1 my-1"onClick={handleCopyClick}>Copy Text</button>
<button className="btn btn-primary mx-1 my-1"onClick={handleExtraSpaces}>Remove Extraspaces</button>


</div>
<div className='container my-3'style={{color:props.mode==='dark'?'white':'#042743'}}>
  <h2>Your text Summary</h2>
<p>
  {text.split(" ").filter((element) => element.length !== 0).length} words and {text.length} characters
</p> 
   <p>{0.008*text.split(" ").length } Minutes read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter something in the textbox above to preview it here "}</p>
</div>
</>
  )
}
