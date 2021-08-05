const express = require('express');
const cors    = require('cors');
const path    = require('path');
const app     = express();
const PORT    = process.env.PORT || 3001; 

app.use(cors({credentials: true, origin: 'http://localhost:8080'}));
app.use(express.json());
app.use('/',require('./routes'));

// Serve static assets in production
// if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/dist"));
  // For resolving path
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
// }

app.listen(PORT, (err)=>{
    if (err)
        return console.log('Error occured');
    console.log('Server is running on PORT : ',PORT);
})