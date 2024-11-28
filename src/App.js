import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// 




function App() {
  const [mode, setMode] = useState('dark') // whether dark mode is enabled or noting

  return (
    <>
      <Navbar title="Text|Utils" home='Home' aboutText='About' mode={mode} />

      <TextForm heading="Enter the text to analyze below" />

      {/* <div className='container my-2'>
        <About about="About Us" />
      </div> */}

    </>
  );
}

export default App;
