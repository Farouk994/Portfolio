import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Tech from "./Components/Tech.js/Tech";
import Portfolio from "./Components/Portfolio/Portfolio"
import Footer from "./Components/Footer/footer"

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home/>
      <Tech/>
      <Portfolio/>
      <Footer/>
      <br></br>
    </div>
  );
}

export default App;
