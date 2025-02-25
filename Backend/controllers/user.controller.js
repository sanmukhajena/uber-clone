const userModel = require('../models/user.model');
const userservice = require('../services/userservice');
const {validationResult} = require('express-validator');


module.exports.registerUser = async (req,res,next)=>{

  const error = validationResult(req);
  if(!error.isEmpty()){
    return res.status(400).json({errors:error.array()});
  }

  const {fullname,email,password}=req.body;

  const hashedPassword=await userModel.hashPassword(password);

  const user = await userservice.createUser({
    firstname:fullname.firstname,
    lastname:fullname.lastname,
    email,
    password:hashedPassword
  });

  const token = user.generateAuthToken();

  res.status(201).json({token,user});
}

module.exports.loginUser= async (req, res,next) => {
  const error = valisdationResult(req);
  if(!error.isEmpty()){
    return res.status(400).json({errors:error.array()});
  }

  const {email, password} = req.body;
  const user = await userModel.findOne({email}).select('+password');
  if (!user){
    return res.status(401).json({message:'Invalid or password'});
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch){
    return res.status(401).json({message:'Invalid or password'});
  }

  const token = user.generateAuthToken();
  res.status(200).json({token:token,user});



}