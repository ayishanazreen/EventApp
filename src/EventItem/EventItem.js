import React, { useEffect, useState } from 'react';
import './EventItem.css';
import moment from 'moment';

const EventItem = ( 
    { event, onEventDelete,
    onToggleReminder, onEventEdit} ) => {

    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(event.title);
    const [editedDate, setEditedDate] =useState(
     moment(event.date).format("YYYY-MM-DD" ));
    const [rem,setRem] = useState("") ;
    useEffect(() => {
         if(event) {
            console.log(event.reminder);
            setRem(event.reminder ? "" : "Reminder On");
            const today =new Date();
            const eventDate= new Date(event.date);

            today.setHours(0,0,0,0);
            eventDate.setHours(0,0,0,0);

            if(today.getTime() === eventDate.getTime() & event.reminder){
                alert(`today is the day of event ${event.title}` );
            }
            else
            {
              setRem("Reminder On")
            }

         }
    }, [event]);
    
 const handleEditClick = () => {
        setIsEditing(true);
    };   
 const handleSaveClick =()=> {
    onEventEdit(event._id,
        {
            title: editedTitle,
            date: editedDate
        });

    // Exit the edit mode
    setIsEditing(false);
 };

 const handleCancelClick = () =>{
    setEditedTitle(event.title);
    setEditedDate(moment(event.date)
        .format("YYYY-MM-DD"));
    setIsEditing(false);
 }
return (
        <div className="event-card">
 
            <p className='rem-para'>
                {
                    event.reminder ? "Reminder On" : ""
                }
            </p>
 
            <div className="event-info">
 
                {isEditing ? (
                    <>
                        <input
                            type="text"
                            value={editedTitle}
                            onChange={
                                (e) =>
                                    setEditedTitle(e.target.value)
                            }
                        />
                        <input
                            type="date"
                            value={editedDate}
                            onChange={
                                (e) =>
                                    setEditedDate(e.target.value)
                            }
                        />
                    </>
                ) : (
                    <>
                        <h3 className="event-title">{event.title}</h3>
                        <hr />
                        <span className="event-date">
 
                            <span style={{ "fontWeight": "700" }}>
                                Event On:
                            </span>
                            {
                                moment(event.date)
                                    .add(1, 'days').calendar()
                            };
                        </span>
                    </>
                )}
            </div>
            <div className="event-actions">
                {isEditing ? (
                    <>
                        <button onClick={handleSaveClick}>
                            Save
                        </button>
                        <button onClick={handleCancelClick}>
                            Cancel
                        </button>
                    </>
                ) : (
                    <>
                        <button onClick={
                            () => onToggleReminder(event._id)
                        }> 
                            {
                                event.reminder ?
                                    'Disable Reminder' : 'Enable Reminder'
                            }
                        </button>
                        <button className='delete-btn'
                            onClick={
                                () => onEventDelete(event._id)}>
                            Delete
                        </button>
                        <button onClick={handleEditClick}>
                            Edit
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};    
export default EventItem;