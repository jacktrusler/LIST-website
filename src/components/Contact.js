

const Contact = (props) => {  

  const [showContact, setShowContact] = props.functions
  

  return showContact && (
    <div>
      <div className="window" id="contact" style={{width:320, height: 420}}>
        <div className="title-bar">
          <div className="title-bar-text">Contact Us!</div>
          <div className="title-bar-controls">
            <button aria-label="Close" onClick={() => setShowContact(!showContact)}></button>
          </div>
        </div>
        <div className="window-body">
            <div className="field-row-stacked" style={{width:280}}>
                <div className="field-row-stacked" style={{width:200}}>
                    <label htmlFor="text23" id="text-labels">Name</label>
                    <input id="name" type="text" autoComplete="off" />
                  </div>
                  <div className="field-row-stacked" style={{width:200}}>
                    <label htmlFor="text23" id="text-labels">Email Address</label>
                    <input id="email" type="text" autoComplete="off"/>
                  </div>
                  <div className="field-row-stacked" style={{width:200}}>
                    <label htmlFor="text23" id="text-labels">Phone</label>
                    <input id="phone" type="text" autoComplete="off"/>
                  </div>
                  <label htmlFor="text24" id="text-labels">Message</label>
                <textarea id="message" rows="8" autoComplete="off" defaultValue="Your message here"></textarea>
              </div>
              <section className="field-row" id="field-row" >
                <button id="submit">Submit</button>
                <button id="cancel">Cancel</button>
              </section>
        </div>
      </div>
    </div>
);
}

export default Contact; 