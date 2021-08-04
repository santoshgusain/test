const Sequelize = require('sequelize');

const dbname='rubico';
const uname='santosh';
const password='password';
const props = {
    host:'localhost',
    dialect:'mysql'
};

const connection  = new Sequelize(dbname,uname,password,props);

connection.authenticate()
.then(()=>{
    console.log('connected to DB')
})
.catch((err)=>{
 console.log("Error : ",err)
});

module.exports = connection;