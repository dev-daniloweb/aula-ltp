require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Iniciando o APP
const app = express();
app.use(cors());
app.use(express.json());
app.use(require('./routes'));

// Conectando com o Banco de Dados (MongoDB)
mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser: true
    }
);

// Setando a Port
app.listen(process.env.PORT || 3000);