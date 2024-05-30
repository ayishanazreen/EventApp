require('dotenv').config();
const express=require("express");
const mongoose=require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
const eventRoutes=require('./routes/eventRoutes');


const app = express();
const PORT = process.env.PORT || 5001;

//middlewares
app.use(cors());
app.use(bodyParser.json());

app.use(express.json());

//Routes
app.use('/api/events/', eventRoutes);


//database connection
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI)
    .then(() => console.log("MongoDB connected"))
    .catch(error => console.error("MongoDB connection error:", error));

    //start to server
app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });   