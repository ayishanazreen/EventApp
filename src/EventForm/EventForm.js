import React, { useState } from 'react';
import axios from 'axios';
import './EventForm.css';

function EventForm({onEventAdd}) {

 const [newEvent, setNewEvent]=useState({title: '', date: '',reminder: 'false'});
  
 const convertDateFormat = (dateString) => {
  const [day, month, year] = dateString.split('/');
  return `${year}-${month}-${day}`;
};

 const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewEvent(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

 const handleSubmit = (e) => {
    e.preventDefault();
    const formattedDate = convertDateFormat(newEvent.date);
    const eventToSubmit = { ...newEvent, date: formattedDate };
 axios.post('http://localhost:5001/api/events', newEvent, eventToSubmit, {
    headers :{
        'Content-Type': 'application/json'
    }})
    .then(response =>{
            onEventAdd(response.data);  
            setNewEvent({ title: '', date: '', reminder: false });  
        })
    .catch(error => console.error(error));
 }; 

  return (
    <div>
    <h2>Event Form</h2>
     <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title</label>
        <input type='text' name="title" value={newEvent.title} onChange={handleInputChange} required></input><br></br>
        <label htmlFor='date'>Date</label>
        <input type='date' name="date"  value={newEvent.date} onChange={handleInputChange} required></input><br></br>
       <br/>
        <button type="submit" >Add Event</button>
    </form> 
    </div>
)};

export default EventForm;