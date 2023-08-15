// import logo from './logo.svg';
import './App.css';
import Nav from './components/First/Nav';
import Specs from './components/forth/Specs';
import Narrate from './components/seconds/Narrate'
// import Question from './components/sixth/Questions';
// import Slider from './components/Third/Slider';
// import Specs from './components/forth/Specs';
// import NavText from './components/First/NavText'
function App() {
  return (
    <div className="App">
      <Nav/>
      <Narrate/> 
  
      <Specs/>
     
      {/* <Slider/> */}
      {/* <Question/> */}
      {/* <ProgressBar/> */}
    </div>
  );
}

export default App;
