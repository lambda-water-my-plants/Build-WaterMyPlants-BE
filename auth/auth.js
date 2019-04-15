const jwt = require('jsonwebtoken'); 
const secret = require('../data/secret').jwtSecret;
const userDb = require('../data/userModel.js')
const jwtKey = process.env.JWT_SECRET || 'add a .env file to root of project with the JWT_SECRET variable';

// quickly see what this file exports
module.exports = {
  authenticate, generateToken, validUserId, validUser,
};

function authenticate(req, res, next) {
  const token = req.get('Authorization');

  if (token) {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) return res.status(401).json({error: err});
      req.decoded = decoded;
      console.log(decoded)
      next();
    });
  } else {
    return res.status(401).json({
      error: 'No token provided, must be set on the Authorization Header',
    });
  }
}

function generateToken(user){
  const payload = {
    subject: user.id,
    username : user.username,
  };
  
  const options ={
    expiresIn : '1h',
  }
  return  jwt.sign(payload, secret, options);
}

async function validUser(req, res, next){
  try{
    const userId = req.decoded.subject;
    const urlId = parseInt(req.params.id);
    if(userId !== urlId){
      res.status(403).json({error: 'You are not authorized ', userId, urlId})
    } else{ 
      next();
    }
  } catch(err){
    res.status(500).json({message: 'An error occured', err})
  }
}

async function validUserId(req, res, next){
  try {
    const user = await userDb.findById(req.params.id);
    if (!user) {
      res.status(400).json({ error: 'This Id is not exists' });
    } else {
      next();
    }
  } catch (err) {
    console.log(err);
  }
}

