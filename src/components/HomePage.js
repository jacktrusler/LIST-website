import React, {useState} from 'react';
import CommandPrompt from './CommandPrompt';
import About from './About.js';
import Contact from './Contact.js';
import windowsXP from "../assets/windowsXP.png";

//parent... figure out props and pass them to children :>
const HomePage = () => {
  const [showCommandPrompt, setShowCommandPrompt] = useState(true);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const DomWindow = () => (
    <>
      {showCommandPrompt && <CommandPrompt functions={[showCommandPrompt, setShowCommandPrompt]} />}
      {showAbout && <About functions={[showAbout, setShowAbout]}/>}
      {showContact && <Contact functions={[showContact, setShowContact]}/>}
    </>
  )
  
  const toggleCommandPrompt = () => {
    setShowCommandPrompt(!showCommandPrompt);
  };

  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  const toggleContact = () => {
    setShowContact(!showContact);
  };


  return (
    <div>
      <DomWindow />
    <div className="navbar">
            <a id="navbar-item" href="#home"><button onClick={toggleCommandPrompt}>Home</button></a>
            <a id="navbar-item" href="#about"><button onClick={toggleAbout}>About</button></a>
            <a id="navbar-item" href="#contact"><button onClick={toggleContact}>Contact</button></a>
        </div> 
        <div id="start-button" href="#home"><img src={windowsXP} alt=""></img></div>
    </div>
  )
}

export default HomePage
