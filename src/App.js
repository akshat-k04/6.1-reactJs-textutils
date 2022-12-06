
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router ,
  Routes,
  Route,
  Link
} from "react-router-dom" ;





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
      document.title = 'textutils- dark mode';
    }
    else{
      setTmode ("dark");
      setmode ("light");
      setalrt('light')
      setAbout(true);
      document.body.style.backgroundColor = 'white';
      document.title = 'textutils- light mode';


    }
  }
  return (
    <>
    <Router>
    <Navbar title="company name" aboutText="company about" mode={mode} textMode={modet} toggle={toggleIt}/>

        <div className='container my-3'>

          <TextForm line='enter the text to analyse' />
        </div>
        <Routes>
          
          <Route path='/alert' element= {mode === "dark" ? <Alert ale={alertmod}></Alert> : <Alert ale={alertmod}></Alert> }/>
    
      </Routes>   



    <About></About>
    </Router>
    </>
  );
}

export default App;
