const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Configuring body-parser to accept larger payloads
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(express.static('public')); // Serving static files from the 'public' directory

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'camera.html')); // Sending camera.html
});

app.post('/saveImage', (req, res) => {
    const imageData = req.body.image;
    const base64Data = imageData.replace(/^data:image\/png;base64,/, "");
    const destination = req.body.destination||__dirname+"/images"; // Get destination path
    const imagePath = path.join( destination, `image-${Date.now()}.png`); // Update file path

    fs.writeFile(imagePath, base64Data, 'base64', (err) => {
        if (err) {
            console.error('Error saving image:', err);
            res.status(500).json({ success: false, error: 'Error saving image' });
        } else {
            console.log('Image saved successfully');
            res.json({ success: true, message: 'Image saved successfully' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
