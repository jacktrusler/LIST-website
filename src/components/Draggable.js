//not currently used, trying to figure out how to store positions after movement
//to avoid moving back on re-render

import { useEffect } from "react";

const Draggable = ({ wrapper, header, children, top, left }) => {
  useEffect(() => {
    const wrapper = document.querySelector(".command-prompt");
    const header = document.querySelector(".title-bar");

    // wrapper.style.left = `${left}px`;
    // wrapper.style.top = `${top}px`;

    function onDrag({ movementX, movementY }) {
      let getStyle = window.getComputedStyle(wrapper);
      let leftVal = parseInt(getStyle.left);
      let topVal = parseInt(getStyle.top);
      wrapper.style.left = `${leftVal + movementX}px`;
      wrapper.style.top = `${topVal + movementY}px`;
    }

    header.addEventListener("mousedown", () => {
      header.classList.add("active");
      header.addEventListener("mousemove", onDrag);
    });

    document.addEventListener("mouseup", () => {
      header.classList.remove("active");
      header.removeEventListener("mousemove", onDrag);
    });
  });

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
            e.target.getAttribute("aria-controls")
          ) {
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

  //toggle boolean on click return only if button is true && hidden is true

  return children;
};

export default Draggable;
