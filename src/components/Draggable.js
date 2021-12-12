//not currently used, trying to figure out how to store positions after movement
//to avoid moving back on re-render

import {useEffect, useRef} from 'react';

const Draggable = ({wrapper, header, children}) => {

useEffect(() => {

  const wrapper = document.querySelector(".command-prompt");
  const header = document.querySelector('.title-bar');

  function onDrag({movementX, movementY}) {
    let getStyle = window.getComputedStyle(wrapper); 
    let leftVal = parseInt(getStyle.left);
    let topVal = parseInt(getStyle.top);
    wrapper.style.left = `${leftVal + movementX}px`;
    wrapper.style.top = `${topVal + movementY}px`;  
  }
  
  header.addEventListener("mousedown", ()=>{
    header.classList.add("active");
    header.addEventListener("mousemove", onDrag);
  });

  document.addEventListener("mouseup", ()=>{
    header.classList.remove("active");
    header.removeEventListener("mousemove", onDrag);
  })})

 //toggle boolean on click return only if button is true && hidden is true

return children; 
}

export default Draggable;