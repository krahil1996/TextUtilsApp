
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// 




function App() {
  return (
    <>
      <Navbar title="Text|Utils" aboutText='About' />

      <TextForm heading="Enter the text to analyze below" />

      {/* <div className='container my-2'>
        <About about="About Us" />
      </div> */}

    </>
  );
}

export default App;
