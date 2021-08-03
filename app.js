const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;
const db = require('./config/db');

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/dist"));
  // For resolving path
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
}

app.get('/',(req,res)=>{
  res.send('Welcome to Home Page');
});
app.get('test',(req,res)=>{
  res.send('Working fine buddy!');
});


app.listen(PORT, (err)=>{
    if (err)
        return console.log('Error occured');
    console.log('Server is running on PORT : ',PORT);
})