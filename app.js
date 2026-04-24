const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const Album = require('./models/album');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
