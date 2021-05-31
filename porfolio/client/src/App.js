import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Tech from "./Components/Tech.js/Tech";
import Portfolio from "./Components/Portfolio/Portfolio"

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home/>
      <Tech/>
      <Portfolio/>
      <br></br>
    </div>
  );
}

export default App;
