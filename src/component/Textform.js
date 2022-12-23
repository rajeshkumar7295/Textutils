import React,{useState} from 'react'
export default function Textform(props) {
  const handleUpperCase=()=>{
    
      const newText=text.toUpperCase();
      setText(newText);
      props.showAlert("converted to uppercase","success");
    
    }
    const handleLowerCase=()=>{
      
        const newText=text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase","success");
      
      
    }
    const handleClear=()=>{
      const newText="";
      setText(newText);
    }
    const handleCopy=()=>{
      
        
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("copied to clipboard","success");
      
    }
    const onchangeClick=(event)=>{
      // console.log('onchange');
      setText(event.target.value);
      
    }
    const handleExtraSpaces=()=>{
      
        const newText=text.replace(/\s+/g," ");
        setText(newText);
        props.showAlert("remove extra spaces","success");
      
  }
    const [text, setText] = useState("enter your thought");
  return (

    <>  
    
    <div>
      <div className="mb-3 ">
  <h1>{props.heading}</h1>
  <textarea className="form-control" value={text} style={{background:props.mode==='light'?'white':'#364f5c',color:props.mode==='light'?'black':'white'}} onChange={onchangeClick} id="myBox" rows="8"></textarea>
</div>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpperCase}>Convert To Uppercase</button>
    <button  disabled={text.length===0} className="btn btn-primary mx-2 my-2 " onClick={handleLowerCase}>Convert To Lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    
    </div>
    <div className="container my-3 ">
      <h2>your text summary</h2>
      <p>
        {text.split(/\s+/).filter((element)=>element.length!==0).length} words and characters {text.split(/\w/g).length-1}</p>
      <p>{0.008*text.split(/\s+/).filter((element)=>element.length!==0).length} minutes to read</p>
      <h2>preview</h2>
      <p>{text.length===0? "Nothing to preview":text}</p>
    </div>
      
    </>
    
  )
}
