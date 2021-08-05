
const {User} = require("../models");
const bcrypt = require('bcrypt');


exports.registerUser = async (req, res) => {
  try {

    const {firstName, lastName, email, password} = req.body;
    // generate password hash
    const saltRounds    = 5;
    const salt          = await bcrypt.genSalt(saltRounds);
    const passwordHash  = await bcrypt.hash(password, salt);
    // set data to be saved 
    let data    = {firstName, lastName, email, password:passwordHash};
    const user  = await User.create(data);
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(400).send(err.message);
  }
};

exports.userLogin = async (req, res) => {
  try {
    
    console.log('User',User);
        const {password, email} = req.body;
        // fetch detail of the user using email id
        let user =  await User.findOne({
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
          res.json({status:'success',data:req.session.user});
        }else{
          res.json({status:'error',msg:'Invalid Credential'});
          return;
        }

  } catch (err) {
    console.error(err);
    res.status(400).send(err.message);
  }
};
