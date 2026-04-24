const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const Album = require('./models/album');
const connectDB = require('./config/db');
const album = require('./models/album');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/api/albums', async function (req, res) {
    const albums = await Album.find()
    res.json(albums)
})

app.post('/api/albums', async function (req, res) {
    const {title, artist, year} = req.body
    const newAlbum = new Album ( {
        title: title,
        artist: artist,
        year: year
    })
    await newAlbum.save()
    res.json(newAlbum)
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
