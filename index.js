const express = require('express');
const chats = require('./data');
const cors = require("cors");
require("dotenv").config();
const app = express()
const port = process.env.PORT || 5000;

// middleware
app.use(cors());

app.get('/api/v1/chats', (req, res) => {
  res.send(chats);
})

app.get("/api/v1/chats/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})