const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports.authUser = async (req, res, next) => {
  const token = req.cookirs.token || req.header.authorization?.spilt(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const isBlackelisted= await userModel.findOne({token:token});

  if(isBlackelisted){
    return res.status(401).json({message:'Unauthorized'});
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id)

    req.user = user;
    return next();
  }
  catch (err) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
} 