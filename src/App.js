
import './App.css';
import About from './components/About';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import NavBar from "./components/NavBar"; 
import Portfolio from './components/Portfolio';
import Rades from './components/Rades';
import SocialLinks from './components/SocialLinks';


function App() {
  return (
   <div>
    <NavBar/>
    <Home/>
    <About/>
    <SocialLinks/>
    <Portfolio/>
    <Experience/>
    <Activities/>
    <Rades/>
    <Contact/>
    
    
   
    
    
   </div>
  );
}

export default App;
