import React, { useState, useEffect } from 'react';
import './EventList.css';
import EventItem from '../EventItem/EventItem';

const EventList = (
        { 
        events, onEventDelete,onToggleReminder, onEventEdit}) => 
        {
        const [editedEvents, setEditedEvents] = useState([]);
        useEffect(() => {
            setEditedEvents([]);
        }, [events]);

    const handleEventEdit = (eventId, updatedData) => {
        // Find the index of the event being edited
        const eventIndex = editedEvents.findIndex(event => event._id === eventId);
    
        let updatedEditedEvents;
    
        if (eventIndex !== -1) {
            // Update the edited event in the local state
            updatedEditedEvents = editedEvents.map((event, index) => 
                index === eventIndex ? { ...event, ...updatedData } : event
            );
        } 
        else
        {
            // If the event is not already in the local state, add it
            updatedEditedEvents = [...editedEvents, { _id: eventId, ...updatedData }];
            // Update the local state
            setEditedEvents(updatedEditedEvents);
        }
        // Pass the edit request to the parent component
        onEventEdit(eventId, updatedData);
    };
  return (
    <div className='container w-100 h-100'>
        {events.map(event =>( 
             <EventItem
             key={event._id}
             event={editedEvents.find(editedEvent => editedEvent._id === event._id) || event
        }
        onToggleReminder={onToggleReminder}
        onEventDelete={onEventDelete}
        onEventEdit={handleEventEdit}
        />
        ))}
    </div>
  )
};

export default EventList;