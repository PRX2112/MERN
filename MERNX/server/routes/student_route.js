const express = require("express");
const router=express.Router()
const signupinfo=require('../models/student_models')

// insert data
router.post('/signup',(req,res)=>{
    const signupentry=new signupinfo({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        username:req.body.username,
        password:req.body.password,
    })
    signupentry.save()
})

router.get('/dispStudent',async (req,res)=>{
    const data =await signupinfo.find()
    res.json(data)
})

module.exports=router