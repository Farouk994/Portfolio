import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Tech from "./Components/Tech.js/Tech"

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home/>
      <Tech/>
    </div>
  );
}

export default App;
