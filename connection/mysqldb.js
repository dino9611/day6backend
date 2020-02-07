const mysql=require('mysql')

const db=mysql.createConnection({
    host:'db4free.net',
    user:'dino9612',
    password:'tungkal01',
    database:'popokkece123',
    port:'3306'
})
// host:'localhost',
// user:'dino9611',
// password:'tungkal01',
// database:'popokkece',
// port:'3306'


module.exports=db
