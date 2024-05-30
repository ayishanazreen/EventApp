import {useRef} from 'react';
import pic2 from '../assets/banners/pic2.jpeg';
import pic3 from '../assets/banners/pic3.jpeg';
import pic4 from '../assets/banners/pic4.webp';
import pic5 from '../assets/banners/pic5.webp';
import { useClickAnimation } from '../useClickAnimation';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Section.css';



function Section({setIsFormVisible}) {
    const handleButtonClick = () => {
        setIsFormVisible(true);
      };  
    const buttonRef=useRef();
    useClickAnimation(buttonRef,{});

         //use useEffect to apply when rendering, in function applyProps, add class attribute to the button div
       /* useEffect(() => {
        const applyProps =()=> {
            buttonRef.current.classList.add("effect-container");
        };
        const applyStyles=(e)=>{
         const {offsetX, offsetY} =e;
         const {style}= buttonRef.current;
         const sizeOffset=50;
         style.setProperty("--effect-top" , `${offsetY-sizeOffset}px`);
         style.setProperty("--effect-left" , `${offsetX-sizeOffset}px`);
        }
        
        const onClick =(e)=> {
            buttonRef.current.classList.remove("active");
         applyStyles(e);
         setTimeout(()=> 
         {
            buttonRef.current.classList.add("active");
         },1 );
         
        };
        //call the function to add the class
        applyProps();
        //add an event to the button 
        buttonRef.current.addEventListener("mouseup", onClick);
        const cleanupRef= buttonRef.current;
        
        // as return, once rendered, have to remove the event
        return()=>{
         cleanupRef.removeEventListener("mouseup", onClick);
        };
        });
        */
      

  return (
    <div className='section-div'>
      <h1>Managing an Event</h1>
      <div class="card-group">
  <div class="card" id='life-Events'>
    <img class="card-img-top card-img-custom" src={pic2} alt="Card cap"/>
    <div class="card-body">
      <h5 class="card-title">Communication</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top card-img-custom" src={pic3} alt="Card cap"/>
    <div class="card-body">
      <h5 class="card-title">Team Work</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top card-img-custom" src={pic4} alt="Card cap"/>
    <div class="card-body">
      <h5 class="card-title">Leadership</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
<div className='row' id="schedule">
    <div className='col-sm-8 p-2'>
    <h2 className='Life-title'>Mark Your Life Events....   "ROHO"</h2>
    <img className='pic5' src={pic5} alt='loading'></img>
    </div>
    <div className='col-sm-4'>
          <div className=' col-md-2 btn-div' >
            <button className='btn btn-secondary plan-btn btn-lg' data-toggle="button" onClick={handleButtonClick}>SCHEDULE</button>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Section;
