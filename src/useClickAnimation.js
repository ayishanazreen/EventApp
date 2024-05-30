import {useEffect} from 'react';

export const useClickAnimation = (element, config) => {
const {
    size = 100,
    color = "#fff",
    duration= 800,

} = config;
 //use useEffect to apply when rendering, in function applyProps, add class attribute to the button div
useEffect(() => {
    if (!element.current) 
        return;
const applyProps =()=> {
    element.current.classList.add("effect-container");
};
const applyStyles=(e)=>{
 const {offsetX, offsetY} =e;
 const {style}= element.current;
 const sizeOffset=50;
 style.setProperty("--effect-top" , `${offsetY-sizeOffset}px`);
 style.setProperty("--effect-left" , `${offsetX-sizeOffset}px`);
 style.setProperty("--effect-duration" , `${duration}px`);
 style.setProperty("--effect-height" , `${size}px`);
 style.setProperty("--effect-width" , `${size}px`);
 style.setProperty("--effect-color" , `${color}px`);
}

const onClick =(e)=> {
    element.current.classList.remove("active");
    applyStyles(e);
 setTimeout(()=> 
 {
    element.current.classList.add("active");
 },1 );
 
};
//call the function to add the class
applyProps();
//add an event to the button 
element.current.addEventListener("mouseup", onClick);
const cleanupRef= element.current;

// as return, once rendered, have to remove the event
return()=>{
 cleanupRef.removeEventListener("mouseup", onClick);
};
} , [color, duration,element, size]);
}