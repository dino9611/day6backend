const {MongoClient,ObjectID}=require('mongodb')

const url=`mongodb+srv://dino9611:tungkal11@cluster0-hgc7b.mongodb.net/test?retryWrites=true&w=majority`
module.exports={
    MongoClient,ObjectID,url
}