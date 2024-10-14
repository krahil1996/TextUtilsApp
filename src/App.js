
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';





function App() {
  return (
    <>
      <Navbar title="Text|Utils" aboutText='About' />
      <div className="container-xl">
        <TextForm heading="Enter the text to analyze below" />
      </div>
    </>
  );
}

export default App;
