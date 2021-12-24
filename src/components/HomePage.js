import { useState } from "react";
import CommandPrompt from "./CommandPrompt";
import About from "./About.js";
import Contact from "./Contact.js";
import startButton from "../assets/startButton.png";
import CommandPromptMobile from "./CommandPromptMobile";
import ContactMobile from "./ContactMobile";

const HomePage = () => {
  const [showCommandPrompt, setShowCommandPrompt] = useState(true);
  const [showCommandPromptMobile, setShowCommandPromptMobile] = useState(true);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showContactMobile, setShowContactMobile] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const addContact = async (contact) => {
    try {
      const res = await fetch("https://emersoncloud.net/send_email", {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      const data = await res.json();
      console.log(data);
      setContacts([...contacts, data]);
      return true;
    } catch (error) {
      return false;
    }
  };

  const DomWindow = () => (
    <>
      {showCommandPrompt && (
        <CommandPrompt
          setVisibility={[showCommandPrompt, setShowCommandPrompt]}
        />
      )}
      {showCommandPromptMobile && (
        <CommandPromptMobile
          setVisibility={[showCommandPromptMobile, setShowCommandPromptMobile]}
        />
      )}
      {showAbout && <About setVisibility={[showAbout, setShowAbout]} />}
      {showContact && (
        <Contact
          setVisibility={[showContact, setShowContact]}
          setSuccess={[showSuccess, setShowSuccess]}
          setError={[showError, setShowError]}
          addContact={addContact}
        />
      )}
      {showContactMobile && (
        <ContactMobile
          setVisibility={[showContactMobile, setShowContactMobile]}
          addContact={addContact}
        />
      )}
    </>
  );

  const toggleCommandPrompts = () => {
    setShowCommandPrompt(!showCommandPrompt);
    setShowCommandPromptMobile(!showCommandPromptMobile);
  };

  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  const toggleContact = () => {
    setShowContact(!showContact);
    setShowContactMobile(!showContactMobile);
  };

  return (
    <div className="homePage">
      <DomWindow />
      <div className="navbar">
        <div id="start-button" href="#home">
          <img src={startButton} alt=""></img>
        </div>
        <a id="navbar-item" href="#home">
          <button onClick={toggleCommandPrompts}>Home</button>
        </a>
        <a id="navbar-item" href="#about">
          <button onClick={toggleAbout}>About</button>
        </a>
        <a id="navbar-item" href="#contact">
          <button onClick={toggleContact}>Contact</button>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
