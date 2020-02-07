const express=require('express')
const {Moviecontroller}= require('../controllers')
// const {auth}=require('../helper/auth')

const router=express.Router()

router.get('/getmovie',Moviecontroller.getmovies)
router.get('/getmoviequery',Moviecontroller.getmoviesquery)
router.post('/postmovie',Moviecontroller.insertmovies)
router.get('/testobjectid',Moviecontroller.cobaobjectid)
router.delete('/deletemovie/:id',Moviecontroller.deletemovies)
router.put('/updatemovie',Moviecontroller.updatemovies)

module.exports=router