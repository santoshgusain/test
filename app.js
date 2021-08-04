const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const session = require('express-session');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

const db = require("./models");
// console.log(db); 

app.use(cors({credentials: true, origin: 'http://localhost:8080'}));
// app.use(cors());
app.use(session({
  secret:'santosh',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));
app.use(express.json());

// console.log(db);

app.get('/session',(req,res)=>{
  
  res.json( req.session.user);
});

app.post('/logout',async (req,res)=>{
  const status = await req.session.destroy();
  res.json({logout:true} );
});

app.get('/user', async (req,res)=>{
  
  let data =  await db.User.findAll({
    where: {},
    raw: true,
  });
  console.log(data, data[0]);
  res.json(data)
  // res.send('This is the home page')
});

// Signup functionality
app.post('/user', async (req,res)=>{
  
  const {firstName, lastName, email, password} = req.body;
  // generate password hash
  const saltRounds    = 5;
  const salt          = await bcrypt.genSalt(saltRounds);
  const passwordHash  = await bcrypt.hash(password, salt);
  // set data to be saved 
  let data    = {firstName, lastName, email, password:passwordHash};
  const user  = await db.User.create(data);
  res.json(user);
});


// login functionality
app.post('/login',async (req,res)=>{

  const {password, email} = req.body;
  // fetch detail of the user using email id
  let user =  await db.User.findOne({
    where: {email},
    raw: true,
  });
  // check if user is not null
  if( user === null || email === null || email === 'undefined' ){
    res.json({status:'error',msg:'Invalid Credential'});
    return;
  }  
  let passwordHash = user.password;
  // check if credential matches or not
  let isLogin = await bcrypt.compare(password,passwordHash);
  // send response accordingly
  if( isLogin ){

    delete user.password;
    delete user.createdAt;
    delete user.updatedAt;
    req.session.user = user;
    res.json({status:'success',data:req.session});
  }else{
    res.json({status:'error',msg:'Invalid Credential'});
    return;
  }
});


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