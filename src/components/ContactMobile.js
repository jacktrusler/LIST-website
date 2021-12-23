import { useState } from "react";

const ContactMobile = (props) => {
  const [showContactMobile, setShowContactMobile] = props.setVisibility;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  function validate() {
    const newErrors = {};

    if (name.length < 1) {
      newErrors["name"] = "Name must not be blank";
    }
    if (!email.includes("@") || email.trim().length < 5) {
      newErrors["email"] = "E-mail must include @";
    }
    if (phone.replace(/\D/g, "").length !== 10) {
      newErrors["phone"] = "Phone number must be 10 digits";
    }

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return false;
    }

    return true;
  }

  function submitter() {
    if (validate()) {
      props.addContact({ name, email, phone, message });
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setErrors({});
    }
  }

  return (
    showContactMobile && (
      <div>
        <div
          className="window"
          id="contact-mobile"
          style={{ width: 320, height: 420 }}
        >
          <div className="title-bar">
            <div className="title-bar-text">Contact Us!</div>
            <div className="title-bar-controls">
              <button
                aria-label="Close"
                onClick={() => setShowContactMobile(!showContactMobile)}
              ></button>
            </div>
          </div>
          <div className="window-body">
            <div className="field-row-stacked" style={{ width: 280 }}>
              <div
                className={`field-row-stacked ${errors["name"] ? "error" : ""}`}
                id="small-input"
                style={{ width: 200 }}
              >
                <label htmlFor="text23" id="text-labels">
                  {errors["name"] ? errors["name"] : "Name"}
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
                className={`field-row-stacked ${
                  errors["email"] ? "error" : ""
                }`}
                id="small-input"
                style={{ width: 200 }}
              >
                <label htmlFor="text23" id="text-labels">
                  {errors["email"] ? errors["email"] : "E-mail"}
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
                className={`field-row-stacked ${
                  errors["phone"] ? "error" : ""
                }`}
                id="small-input"
                style={{ width: 200 }}
              >
                <label htmlFor="text23" id="text-labels">
                  {errors["phone"] ? errors["phone"] : "Phone"}
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
              <button id="cancel">Cancel</button>
            </section>
          </div>
        </div>
      </div>
    )
  );
};

export default ContactMobile;
