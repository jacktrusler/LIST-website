import Draggable from "react-draggable";
import { useState } from "react";

const Contact = (props) => {
  const [showContact, setShowContact] = props.setVisibility;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const errors = [];

  function validate() {
    if (name.length < 1) {
      errors.push("please enter your name.");
    }
    if (!email.includes("@") || email.trim().length < 5) {
      errors.push("please enter a valid email address.");
    }
    if (phone.replace(/\D/g, "").length !== 10) {
      errors.push("please enter a valid 10 digit phone number wink");
    }

    return errors;
  }

  function submitter() {
    const errors = validate();

    // if (errors.length > 0) {
    //   alert(
    //     "One or more fields are invalid \n name must not be blank \n email must be valid \n phone must have exactly 10 digits"
    //   );
    //   return;
    // }
    props.addContact({ name, email, phone, message });
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  }
  function textSubmitter() {
    const errors = validate();

    // if (errors.length > 0) {
    //   alert(
    //     "One or more fields are invalid \n name must not be blank \n email must be valid \n phone must have exactly 10 digits"
    //   );
    //   return;
    // }
    props.addContactText({ name, email, phone, message });
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  }

  return (
    showContact && (
      <Draggable>
        <div>
          <div
            className="window"
            id="contact"
            style={{ width: 320, height: 420 }}
          >
            <div className="title-bar">
              <div className="title-bar-text">Contact Us!</div>
              <div className="title-bar-controls">
                <button
                  aria-label="Close"
                  onClick={() => setShowContact(!showContact)}
                ></button>
              </div>
            </div>
            <div className="window-body">
              <div className="field-row-stacked" style={{ width: 280 }}>
                <div
                  className="field-row-stacked"
                  id="small-input"
                  style={{ width: 200 }}
                >
                  <label htmlFor="text23" id="text-labels">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Jason Derulo"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div
                  className="field-row-stacked"
                  id="small-input"
                  style={{ width: 200 }}
                >
                  <label htmlFor="text23" id="text-labels">
                    Email Address
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="TheZimmer@Zimmerman.church"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div
                  className="field-row-stacked"
                  id="small-input"
                  style={{ width: 200 }}
                >
                  <label htmlFor="text23" id="text-labels">
                    Phone
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="xxx-xxx-xxxx"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <label htmlFor="text24" id="text-labels">
                  Message
                </label>
                <textarea
                  id="name"
                  type="text"
                  rows="11"
                  placeholder="Your Message Here :D"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <section className="field-row" id="field-row">
                <button id="submit" onClick={submitter}>
                  Submit
                </button>
                <button id="cancel" onClick={textSubmitter}>
                  Cancel
                </button>
              </section>
            </div>
          </div>
        </div>
      </Draggable>
    )
  );
};

export default Contact;
