import logo from './logo.svg';
import './App.css';
import img from "./image/navlogo.png"
import Hero from './Hero';
import { Hero2 } from './Hero2';
import { About } from './About';
import Works from './Works';
import { Skills } from './Skills';

function App() {
  return (
    <div className="App">
      <nav>
        <div className='navbar'>
          <div className='navbg'>
            <div className='navlogo'>
              <img src={img}></img>
            </div>
            <div className='navmenu'>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>My Works</li>
                <li>My Skills</li>
                <li>Education</li>
                <li> <span> Contact </span></li>
                <li><button type='submit'>Download Resume</button></li>
              </ul>

            </div>

          </div>

        </div>
      </nav>
      <Hero></Hero>
      <Hero2></Hero2>
      <About></About>
      <Works></Works>
      <Skills></Skills>
    </div>
  );
}

export default App;
