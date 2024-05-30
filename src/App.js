import './App.css';
import React, { useState, useEffect } from 'react';
import EventForm from './EventForm/EventForm';
import Home from './Home/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import Navbar from './Navbar/Navbar';
import 'normalize.css';
import Section from './Section/Section';
import EventList from './EventList/EventList';
import axios from 'axios';
import Footer from './Footer/Footer';

function App() {
  const [events, setEvents]= useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isFormSubmit, setIsFormSubmit]= useState(false);



  useEffect(() => {
    // Fetch events from the server
    axios.get('http://localhost:5000/api/events')
        .then(response => setEvents(response.data))
        .catch(error => console.error(error));
  }, []);
  
  const handleEventAdd = (newEvent) => {
    newEvent.reminder=true;
    console.log('Event added:', newEvent.reminder);
    setEvents([...events, newEvent]);
    setIsFormVisible(false); 
    setIsFormSubmit(true);
  // Hide the form after submission
  };

  const handleEventDelete =(eventId) => {
    axios.delete(`http://localhost:5001/api/events/${eventId}`)
    .then(()=> {
      const updatedEvents = events.filter(event => event._id !== eventId) 
      setEvents(updatedEvents);
     })
     .catch(error => console.error(error));
  };
  
  const handleToggleReminder =(eventId)=>{
    const selectedEvent =events.find(event => event._id=== eventId);
    const updatedEvent= {...selectedEvent, reminder: !selectedEvent.reminder}

    axios.put(`http://localhost:5001/api/events/${eventId}`, updatedEvent)
    .then(response => {
      console.log('Response from server:', response.data);
        const updatedEvents= events.map(event => event._id ===eventId ? updatedEvent: event );
      setEvents(updatedEvents);

      if (updatedEvent.reminder) {
        alert(`Reminder set for event: ${updatedEvent.title}`);
      }
    })
    .catch (error => 
      console.error(`error on updating the reminder status for event with id ${eventId}`, error));
    };

    const onEventEdit = (eventId, updatedData) => {
      // Update the event in the database
      updatedData.reminder=true;
      axios.put(`http://localhost:5001/api/events/${eventId}`, updatedData)
          .then(response => {
              // If the update is successful, update the events in the state
              const updatedEvents = events.map(event =>
                  event._id ===
                      eventId ?
                      { ...event, ...updatedData } : event
              );
              setEvents(updatedEvents);
          })
          .catch(error =>console.error(`Error updating event with ID ${eventId}:`, error)
          );
    };

 
  return (
    <div>
      <Navbar/>
      <Home/>
      <Section setIsFormVisible={setIsFormVisible} />
      {isFormVisible && <EventForm onEventAdd={handleEventAdd} />}
      {isFormSubmit && <EventList events={events}
            onEventDelete={handleEventDelete}
            onToggleReminder={handleToggleReminder}
            onEventEdit={onEventEdit} />     
}
<Footer/> 
    </div>
  );
}

export default App;
