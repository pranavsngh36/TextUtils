import React,{useState} from "react";

export default function TextForm(props) {
  const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("text changed to Upper Case","success")
  }
  const handleDownClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("text changed to lower Case","success")
  }
  const handleClear=()=>{
    setText("");
    props.showAlert("text Cleard","success")
  }
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
  const [text,setText]=useState('');
  return (
    <div style={{color:props.mode==='light'?'#042743':'white'}}> 
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="3" style={{background:props.mode==='light'?'white':'grey',color:props.mode==='light'?'#042743':'white'}}value={text} onChange={handleOnChange} placeholder="Enter Text Here"></textarea>
      </div>
      <button className='btn btn-primary mx-1' onClick={handleUpClick}>To UpperCase</button>
      <button className="btn btn-primary mx-1" onClick={handleDownClick}>To LowerCase</button>
      <button className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>
      <div className="my-2 mx-2">
        <p>{text===""?0:text.split(" ").length} Words and {text.length} Characters</p>
      </div>
    </div>
  );
}
