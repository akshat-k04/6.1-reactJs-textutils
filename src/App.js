
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  const [lgt,setAbout] = useState(true);
  const [mode,setmode] = useState("light") ;
  const [modet,setTmode] = useState("dark");
  const [alertmod, setalrt]= useState('light')
  const toggleIt =()=>{
    if(mode==="light"){
      setmode("dark") ;
      setTmode("light");
      setAbout(false);
      setalrt('dark')
      document.body.style.backgroundColor='gray';
    }
    else{
      setTmode ("dark");
      setmode ("light");
      setalrt('light')
      setAbout(true);
      document.body.style.backgroundColor = 'white';

    }
  }
  return (
    <>
    
    <Navbar title="company name" aboutText="company about" mode={mode} textMode={modet} toggle={toggleIt}/>
    <div className='container my-3'> 
      <TextForm line='enter the text to analyse' />
        {mode === "dark" ? <Alert ale={alertmod}></Alert> : <Alert ale={alertmod}></Alert>}
    </div>
    </>
  );
}

export default App;
