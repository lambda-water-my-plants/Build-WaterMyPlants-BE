const express = require('express');
const router = express.Router();
const userDb= require('../data/userModel.js');
const plantDb= require('../data/plantsModel.js');
const {authenticate, validUser ,validUserId} = require('../auth/auth.js');

router.get('/',authenticate, async (req, res) => {
  await userDb.find()
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

router.post('/:id/plants', authenticate, validUserId, validUser, async (req, res) => {
      try {
        const {id}  = req.params;
        const plant = req.body;
        if (!plant.name) {
          res.status(404).json({ error: 'Please provide the name of your plant' });
        } else {
          const newPlant = await plantDb.addPlant(id, plant);
          res.status(200).json(newPlant);
        }
      } catch (err) {
        res.status(500).json({ planterror: `${err}` });
      }
    }
  );


module.exports = router;