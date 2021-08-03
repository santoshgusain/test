const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const db = require('./config/db');
// Set static folder
app.use(express.static("client/dist"));


app.get('test',(req,res)=>{
  res.send('Working fine buddy!');
});

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
}

app.listen(PORT, (err)=>{
    if (err)
        return console.log('Error occured');
    console.log('Server is running on PORT : ',PORT);
})