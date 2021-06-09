import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import Tech from "./Components/AboutMe/Tech";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/footer";


function App() {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={Tech} />
        <Route path='/work' component={Portfolio} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Footer />
      <br></br>
    </div>
  );
}

export default App;
