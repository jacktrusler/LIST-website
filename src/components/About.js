const About = (props) => {
  const [showAbout, setShowAbout] = props.functions

  const tabs = document.querySelectorAll("menu[role=tablist]");

  for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i];

    const tabButtons = tab.querySelectorAll("menu[role=tablist] > button");

    tabButtons.forEach((btn) =>
      btn.addEventListener("click", (e) => {
        e.preventDefault();

        tabButtons.forEach((button) => {
          if (
            button.getAttribute("aria-controls") ===
            e.target.getAttribute("aria-controls")){
              button.setAttribute("aria-selected", true);
              openTab(e, tab);
          } else {
            button.setAttribute("aria-selected", false);
          }
        });
      })
    );
  }

  function openTab(event, tab) {
    const articles = tab.parentNode.querySelectorAll('[role="tabpanel"]');
    articles.forEach((p) => {
      p.setAttribute("hidden", true);
    });
    const article = tab.parentNode.querySelector(
      `[role="tabpanel"]#${event.target.getAttribute("aria-controls")}`
    );
    article.removeAttribute("hidden");
  }

  return showAbout && (
      <div class="window" id="about" style={{width:400, height:280}}>
            <div class="title-bar">
              <div class="title-bar-text">About the Professionals</div>
                
              <div class="title-bar-controls">
                <button aria-label="Close" onClick={() => {setShowAbout(!showAbout)}}></button>
              
              </div>
            </div>
            <div class="window-body">
                <menu role="tablist"> 
                    <button aria-selected="true" aria-controls="Logan">Logan</button>
                    <button aria-selected="false" aria-controls="Hayden">Hayden</button>
                </menu>
                  <article id="Logan" role="tabpanel">
                      <p><strong>Logan List:</strong> IT and Jesus professional</p>
                    <ul>
                        <li>Praises Jesus</li>
                        <li>Blesses Up</li>
                        <li>Promotes System Integrity</li>
                        <li>Becomes Based</li>
                      </ul> 
                  </article>
                  <article id="Hayden" role="tabpanel" hidden="true">
                    <p><strong>Hayden Smart:</strong> Networking Heathen </p>
                    <ul>
                        <li>Praises Entropy</li>
                        <li>Wires Up</li>
                        <li>Promotes System Integrity</li>
                        <li>Becomes Based</li>
                      </ul> 
                  </article>
            </div>
        </div>

  )
}

export default About;