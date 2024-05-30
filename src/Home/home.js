import React from 'react';
import './Home.css';
import pic1 from '../assets/images/pic1.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
      <div className='main-div' name="/home">
          <div className='image-div'>
              <img src={pic1} className="img-fluid" alt="Loading"/>
          </div>

         <div className='title_div' id="home"> 
            <h1 className='title'>Schedule Your Events of Your Life....</h1>
            <p>Event planning is a growing business. People like me are searching for their passions, while people like you are requiring the services of event planner to fulfill their wildest event dreams. In fact, according to the BLS (USA labor stats), demand for event planners is expected to grow 11% on average over the next 10 years (whereas the average US job market is expected to increase by 7%).
            A good event has a schedule that is set in advance. If you've ever been to a great party, you'll know that the host took some time to break down the event into sections - greeting the guests, appetizers and cocktails, a game to break the ice, the main event - dinner, then perhaps more socializing with dessert. Professional events follow much of the same format.
            </p>
        </div> 
      </div>
    )
  }

export default Home;