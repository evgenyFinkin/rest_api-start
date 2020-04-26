require('dotenv').config();
require('./service/mongo');

const express = require('express');
const app = express();

const v1 = require('./router/v1');
const v2 = require('./router/v2');
const placeholder = require('./placeholder.json')
const Post = require('./models/Post');

const PORT = 5000;
// Middlewar JSON parser
// When there is no path argument, the middlewar is executed on every call.
app.use(express.json({ extended: false }));
app.use('/api_v1', v1);
app.use('/api_v2', v2);

// Test rout
app.get('/test', (req, res) => {
    console.log(`Hello from inside the node app`);
    res.send(`Hello client`);
});

// Lazy upload
app.patch('/lazy_placeholder_upload', async (req, res) => {
    const postUploadPromisesArray = placeholder['posts'].map(async post =>
        await new Post({ userId, title, completed } = post).save()
    )
    await Promise.all(postUploadPromisesArray).then(
        res.send('Upload successful')
    ).catch(
        res.status(500).send('Server error')

    );

});

app.listen(PORT, console.log(`app is now running at port ${PORT}`));