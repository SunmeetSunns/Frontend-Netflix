const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require("./routes/userRoutes");

const app = express();

// Enable CORS middleware
app.use(cors());

// JSON parsing middleware
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb+srv://kaursunmeet624:sunmeet2002@cluster0.uugaopx.mongodb.net/netflix", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('DB Connected');
});

// User routes
app.use('/api/user', userRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
