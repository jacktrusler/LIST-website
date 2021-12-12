import Draggable from './Draggable'
import useRef from 'react';

const CommandPrompt = (props) => {

  const [showCommandPrompt, setShowCommandPrompt] = props.functions
  
  return showCommandPrompt && (
    <Draggable>
      <div  className="command-prompt" >
        <div className="title-bar">
          <div className="title-bar-text">List Landing Page</div>
          <div className="title-bar-controls">
            <button aria-label="Close" onClick={() => setShowCommandPrompt(!showCommandPrompt)}> </button>
          </div>
        </div>
        <div className="window-body" id="homeheader">
          <pre>
            Microsoft&#10094;R&#10095; Windows DOS &#10094;C&#10095; Copyright
            Microsoft Corp 1990-2001. <br />
            <br />
            <pre>
              C:&#92;WINDOWS&#92;SYSTEM32 > echo LIST                                                                   <br />
              > Welcome to the List Integrated Systems Technology (LIST) Home
              page!                         <br />
              > Click on the about menu bar button below to get an idea of who we
              are.                      <br />
              > Click on the contact button if there are any services we IT chads
              can take care of for you. <br />
              C:&#92;WINDOWS&#92;SYSTEM32 >                                                                             <br /> 
            </pre>
          </pre>
        </div>
      </div>
    </Draggable>
  )

}

export default CommandPrompt;