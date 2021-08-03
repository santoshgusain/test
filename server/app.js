const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./config/db');
// console.log(db)


app.get('/',(req,res)=>{
    res.send('you are set up successfully')
})

app.listen(PORT, (err)=>{
    if (err)
        return console.log('Error occured');
    console.log('Server is running on PORT : ',PORT);
})