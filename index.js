const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/student.routes')

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/students',studentRoutes);

const PORT = process.env.PORT || 5000;
// db connection
mongoose.connect(process.env.MONGOURI).then(() => {
    console.log("Mongodb Connected successfully");
    // server starting
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}).catch((error) => console.log(`Mongodb Failed to connect due to ${error}`));
