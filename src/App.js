import './App.scss';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Advantages from "./components/Advantages";
import AllModels from "./components/AllModels";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Advantages/>
      <AllModels/>
      <AboutMe/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
