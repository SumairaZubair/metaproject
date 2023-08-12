// import logo from './logo.svg';
import './App.css';
import Nav from './components/First/Nav';
import Narrate from './components/seconds/Narrate'
import Slider from './components/Third/Slider';
// import NavText from './components/First/NavText'
function App() {
  return (
    <div className="App">
      <Nav/>
      <Narrate/> 
      <Slider/>
    </div>
  );
}

export default App;
