
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
    
    <Navbar title="company name" aboutText="company about" />
    <div className='container my-3'> 
        <TextForm line='enter the text to analyse' />
    </div>
    </>
  );
}

export default App;
