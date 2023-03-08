const express = require('express');
const cors = require('cors')

const authRoutes = require('./routes/auth.js');

const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();

app.listen(PORT, () => console.log(`Server runnin on ${PORT}`));

// middleware
app.use(cors()); // make cross-origin requests
app.use(express.json()); // pass json payload from the front-end to the back-end
app.use(express.urlencoded());

app.get('/', (req,res)=>{
    res.send('Hello from Banja')
});

app.use('/auth', authRoutes);