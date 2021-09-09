import Navbar from "./components/Navbar"
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
