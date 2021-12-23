import Draggable from "react-draggable";
import { useState } from "react";

const About = (props) => {
  const [showAbout, setShowAbout] = props.setVisibility;
  const [hideLogan, setHideLogan] = useState(false);
  const [hideHayden, setHideHayden] = useState(true);

  return (
    showAbout && (
      <Draggable>
        <div className="window" id="about" style={{ width: 360, height: 280 }}>
          <div className="title-bar">
            <div className="title-bar-text">About the Professionals</div>
            <div className="title-bar-controls">
              <button
                aria-label="Close"
                onClick={() => {
                  setShowAbout(!showAbout);
                }}
              ></button>
            </div>
          </div>
          <div className="window-body">
            <div className="window-body">
              <menu role="tablist">
                <button
                  onClick={(e) => {
                    setHideLogan(!hideLogan);
                    setHideHayden(!hideHayden);
                  }}
                >
                  Logan
                </button>
                <button
                  onClick={(e) => {
                    setHideLogan(!hideLogan);
                    setHideHayden(!hideHayden);
                  }}
                >
                  Hayden
                </button>
              </menu>
              <article id="Logan" role="tabpanel" hidden={hideLogan}>
                <p>
                  <strong>Logan List:</strong> IT and Jesus professional
                </p>
                <ul>
                  <li>Praises Jesus</li>
                  <li>Blesses Up</li>
                  <li>Promotes System Integrity</li>
                  <li>Becomes Based</li>
                </ul>
              </article>
              <article id="Hayden" role="tabpanel" hidden={hideHayden}>
                <p>
                  <strong>Hayden Smart:</strong> Networking Heathen{" "}
                </p>
                <ul>
                  <li>Praises Entropy</li>
                  <li>Wires Up</li>
                  <li>Promotes System Integrity</li>
                  <li>Becomes Based</li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </Draggable>
    )
  );
};

export default About;
