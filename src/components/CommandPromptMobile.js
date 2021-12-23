import { useState } from "react";

const CommandPromptMobile = (props) => {
  const [showCommandPromptMobile, setShowCommandPromptMobile] =
    props.setVisibility;
  return (
    <div className="command-prompt-mobile" id="command-prompt-mobile">
      <div className="title-bar">
        <div className="title-bar-text">List Landing Page!</div>
        <div className="title-bar-controls">
          <button
            aria-label="Close"
            onClick={() => setShowCommandPromptMobile(!showCommandPromptMobile)}
          ></button>
        </div>
      </div>
      <div className="window-body">
        <pre>
          {">"} Echo LIST <br />
          <br />
          <pre>
            - List <br />
            -- Integrated <br />
            --- Systems <br />
            ---- Technology <br /> <br />
            Welcome to the webpage! <br />
          </pre>
        </pre>
      </div>
    </div>
  );
};

export default CommandPromptMobile;
