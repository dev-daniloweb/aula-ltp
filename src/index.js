require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser: true
    }
);

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

app.listen(process.env.PORT || 3000);