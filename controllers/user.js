
const {User} = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');


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
    res.json({status:'success',data:user});
  } catch (err) {
    console.error(err);
    res.status(400).json({status:'error',msg:err.message});
  }
};

exports.userLogin = async (req, res) => {
  try {
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
          
          delete user.createdAt;
          delete user.updatedAt;
          delete user.password;
          delete user.accessToken;
          let response = {...user};
          delete user.email;
          delete user.lastName;
          delete user.firstName;
          // generate jwt token
          let token = await jwt.sign({
            data: user
          }, config.get("jwt-secret"), { expiresIn: '1h' });

          // update jwt token
          response.accessToken = token;
          let updateStatus = await User.update({accessToken:token},{ where :{id:user.id} });
          console.log(user);
          res.json({status:'success',data:response});
        }else{
          res.json({status:'error',msg:'Invalid Credential'});
          return;
        }

  } catch (err) {
    console.error(err);
    res.status(400).send(err.message);
  }
};