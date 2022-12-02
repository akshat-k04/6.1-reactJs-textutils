import React , {useState} from 'react'
let ini = true;
let text = "";

export default function TextForm(hello) {
    const wordchanger = (event) => {
        worset(event.target.value); // this will change the value of text just similar as setText(" value of text is changed ")

    }
    const handleUpClick= ()=> {
        console.log("upper button was clicked");
        let newText = text.toUpperCase() ;
        setText(newText) ;
    }
    const handleLowClick = () => {
        console.log("lower button was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event)=> {
        
        setText(event.target.value); // this will change the value of text just similar as setText(" value of text is changed ")

    }
    const textClear = () => {
        setText("") ;

    }
    const clickText = ()=> {
        if(ini === true){
            ini = false ;
            setText("");
        }
    }
    const finder =() => {
        
        let num = word.length; 
        for(let e=0 ; e< text.length - num +1 ; e++){
            let str = text.substring(e, e+num);
            let fin = e+num ;
            let inl = e+1 ;
            if(str.toLowerCase() === word.toLowerCase()){
                
                vlaer('the word is from '+(inl)+'th character to '+ fin+ 'th character') ;
                console.log ({val});
                break ;
            }
            else if(e=== text.length - num){
                console.log('no') ;
                vlaer('the word is not present in the above text') ;
            }
        }
    }
    
    const [text, setText] = useState('enter your text');
    const [word, worset] = useState('') ;
    const [val , vlaer] = useState('') ;
  return (
    <>
      <div className="container">
        <div className="mb-3">
         <h1>{hello.line}</h1>
         <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} onClick={clickText}></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>convert to upercase</button>
        <button className='btn btn-primary mx-1' onClick={handleLowClick}>convert to lowercase</button>
        <button className='btn btn-primary mx-1' onClick={textClear}>clear text</button>
        <div className="input-group flex-nowrap">
          <input type="text" onChange={wordchanger} className="form-control" placeholder="word" aria-label="Username" aria-describedby="addon-wrapping" value = {word}/>
        </div>
        <button className='btn btn-primary mx-1' onClick={finder}>word finder</button>


      </div>
      

      <div className="container">
        <p > {val}</p>
        <h1>your text summary</h1>
        <p>there are {text.split(" ").length} words and {text.length} character in your text </p>
        <p> you need {0.008 * text.split(" ").length }  minutes to read this text </p>
        <h2>preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}