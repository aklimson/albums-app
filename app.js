const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');

const albumRoutes = require('./routes/albumRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Serve static files (HTML, CSS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Album API routes (mounted at /api/albums)
app.use('/api/albums', albumRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`The web app is on http://localhost:${PORT}`));
