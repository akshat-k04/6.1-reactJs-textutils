import React , {useState} from 'react'
let ini = true;
export default function TextForm(hello) {
    
    const handleUpClick= ()=> {
        console.log("button was clicked");
        let newText = text.toUpperCase() ;
        setText(newText) ;
    }
    const handleOnChange = (event)=> {
        console.log("on change");
        setText(event.target.value); // this will change the value of text just similar as setText(" value of text is changed ")

    }
    const clickText = ()=> {
        if(ini == true){
            ini = false ;
            setText("");
        }
    }
    const [text, setText] = useState('enter your text');
    
  return (
    <>
      
      <div className="mb-3">
              <h1>{hello.line}</h1>
              <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} onClick ={clickText}></textarea>
      </div>
      <button className='btn btn-primary'  onClick={handleUpClick}>convert to upercase</button>
    </>
  )
}
