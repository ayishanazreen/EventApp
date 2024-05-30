const express = require('express');
const router = express.Router();
const Event=require('../models/eventModel');
const mongoose = require('mongoose');


//get all events

router.get('/', async (req, res) => {
    try {
      const events = await Event.find();
      res.json(events);
    } catch (error) {
      console.error('Error fetching events:', error);
      res.status(500).send('Server error');
    }
  });

//getting an event based on iD

router.get('/:id', async(req,res) => {
    const eventId=req.params.id;
    console.log(eventId);
    if (!mongoose.Types.ObjectId.isValid(eventId)) {
        return res.status(400).json({ message: "Invalid event ID format" });
    }

    try
    {
    const event=await Event.findById(eventId);
    if(!event)
        {
         res.status(404).json({message: "Event not found"});
        }
         res.json(event);    
    }
    catch(error){
        res.status(500).json({message:"internal server error"});
    }
})


// Create a new event
router.post('/', async (req, res) => {
    const event = new Event({
        title: req.body.title,
        date: req.body.date,
        reminder: req.body.reminder || true,
    });
    try {
        const newEvent = await event.save();
        console.log("reminder status from backend :", newEvent.reminder);
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
  

//updating an event

router.put('/:id', async (req, res) => {
    const eventId = req.params.id;
    const { title, date, reminder } = req.body;
    //console.log('Received update request:', JSON.stringify(updatedEvent));

    try {
        // Find the event by ID in the database
        const event = await Event.findById(eventId);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
 
        // Update the event properties
        event.date = date;
        event.title = title;
        event.reminder = reminder;
        console.log('event updated', event.reminder);
        // Save the updated event
        await event.save();
 
        // You can send the updated event in the response if needed
        res.json(event);
    } catch (error) {
        console.error('Error updating event:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


router.delete('/:id', async(req,res) => {
  const eventId=req.params.id;
  try{
    const event=await Event.findById(eventId);
    if(!event)
        {   //console.log("Event not found for ID:", eventId);
            return res.status(404).json({message:"event not found"});
        }
        await Event.deleteOne({ _id: eventId }); 
    res.status(200).json({ message: "Event deleted successfully", event });
    }
  catch(error){
    res.status(500).json({message:error.message});
  }
});

module.exports=router;