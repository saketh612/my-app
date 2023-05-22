import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (

    <>
      {/* <Navbar title="Calculator" aboutText="About Calculator" /> */}
      <Navbar title="Text-Utils" />
      <div className="container">
      <TextForm heading="Enter your text to analyze" />
      <About/>
      </div>
      
    </>

  );
}

export default App;
