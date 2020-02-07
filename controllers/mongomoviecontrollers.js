const {MongoClient,ObjectID,url}=require('./../connection').mongodb
const assert = require('assert');
var database='sample_mflix'

module.exports={
    getmovies:(req,res)=>{
        MongoClient.connect(url,{ useUnifiedTopology: true},(err,client)=>{
            assert.equal(null,err)
            var collection=client.db('sample_mflix').collection('movies')
            collection.find({}).limit(5).toArray((err,docs)=>{
                // if(err)throw err
                client.close()
                if(err)return res.status.send(err)
                // console.log('msu')
                return res.status(200).send(docs)
    
            })
        })
    },
    getmoviesquery:(req,res)=>{
        MongoClient.connect(url,{ useUnifiedTopology: true},(err,client)=>{
            assert.equal(null,err)
            console.log(req.query)
            var collection=client.db('sample_mflix').collection('movies')
            collection.find({title:{'$regex':req.query.title,'$options':'i'}}).toArray((err,docs)=>{
                // if(err)throw err
                client.close()
                if(err)return res.status.send(err)
                // console.log('msu')
                return res.status(200).send(docs)
    
            })
        })
    },
    cobaobjectid:(req,res)=>{
        return res.send(new ObjectID(req.params.id))
    },
    insertmovies:(req,res)=>{
        MongoClient.connect(url,{ useUnifiedTopology: true},(err,client)=>{
            assert.equal(null,err)
            var collection=client.db('sample_mflix').collection('movies')
            collection.insertOne(req.body,(err,result)=>{
                client.close()
                if(err)return res.status.send(err)
                return res.status(200).send(result)
            })
        })
    },
    deletemovies:(req,res)=>{
        MongoClient.connect(url,{ useUnifiedTopology: true},(err,client)=>{
            assert.equal(null,err)
            console.log(req.params.id)
            var collection=client.db('sample_mflix').collection('movies')
            // bisa pakai new object bisa enggak
            collection.deleteOne({title:"film Keren 2"},(err,result)=>{
                client.close()
                if(err)return res.status.send(err)
                return res.status(200).send(result)
            })
        })
    },
    updatemovies:(req,res)=>{
        MongoClient.connect(url,{ useUnifiedTopology: true},(err,client)=>{
            assert.equal(null,err)
            console.log(req.params.id)
            var collection=client.db('sample_mflix').collection('movies')
            // bisa pakai new object bisa enggak
            collection.updateOne({_id:new ObjectID('5e38ecde83c35a2064203476')},{$set:req.body},(err,result)=>{
                client.close()
                if(err)return res.status.send(err)
                return res.status(200).send(result)
            })
        })
    }
}