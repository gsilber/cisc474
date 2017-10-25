const User=require('../models/user');

exports.getUsers=function(req,res,next){
    User.find({},function(err,users){
        res.status(201).json(users)
    })
}

exports.createUser=function(req,res,next){
    console.log(req.body);
    var u=new User({email: req.body.email,profile:{firstName:req.body.firstName,lastName:req.body.lastName}});
    u.save(function(err,user){
        res.status(200).json(user);
    });
}
exports.getUser=function(req,res,next){
    res.status(200).json({result: 'not implemented'})

}