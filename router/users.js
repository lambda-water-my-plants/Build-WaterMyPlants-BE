const express = require('express');
const router = express.Router();
const userDb= require('../data/userModel.js');
const {authenticate, validUser ,validUserId} = require('../auth/auth.js');

router.get('/',authenticate, (req, res) => {
  userDb.find()
      .then(users => {
          res.json(users);
      })
      .catch(err => {
          res.status(500).send(err);
      })
});

router.get('/:id', authenticate, validUserId, validUser, async(req, res)=>{
    try{
        const user = await userDb.findById(req.params.id);
        res.status(200).json(user);
    }catch (err){
        res.status(500).json({ error: `there was an error: ${err}` });
    }
});

module.exports = router;