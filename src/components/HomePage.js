import { useState, useEffect } from "react";
import CommandPrompt from "./CommandPrompt";
import About from "./About.js";
import Contact from "./Contact.js";
import startButton from "../assets/startButton.png";

const HomePage = () => {
  const [showCommandPrompt, setShowCommandPrompt] = useState(true);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function stringyWait() {
      const stringy = await fetchContacts();
      console.log(stringy);
    }
    stringyWait();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await fetch("https://emersoncloud.net/all");
      const data = await res;
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const addContactText = async (contact) => {
    console.log(contact);
    const res = await fetch("https://emersoncloud.net", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-type": "text/plain",
      },
      body: JSON.stringify(contact),
    });

    const data = await res.json();
    console.log(data);
    setContacts([...contacts, data]);
  };
  const addContact = async (contact) => {
    console.log(contact);
    const res = await fetch("https://emersoncloud.net", {
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
  };

  const DomWindow = () => (
    <>
      {showCommandPrompt && (
        <CommandPrompt
          setVisibility={[showCommandPrompt, setShowCommandPrompt]}
        />
      )}

      {showAbout && <About setVisibility={[showAbout, setShowAbout]} />}
      {showContact && (
        <Contact
          setVisibility={[showContact, setShowContact]}
          addContact={addContact}
          addContactText={addContactText}
        />
      )}
    </>
  );

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
    <div className="homePage">
      <DomWindow />
      <div className="navbar">
        <div id="start-button" href="#home">
          <img src={startButton} alt=""></img>
        </div>
        <a id="navbar-item" href="#home">
          <button onClick={toggleCommandPrompt}>Home</button>
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
