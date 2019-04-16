const express = require('express');
const router = express.Router();
const plantDb= require('../data/plantModel.js');
const {authenticate, checkForPlantOwner, validPlantId} = require('../auth/auth.js');

router.get('./', async (req, res)=>{
    try{
        await plantDb.find()
            .then(plant=> {
                res.status(200).json(plant) })

    }catch (err){
         res.status(500).json({Error: 'An uexpected error happened', err});
    }
})

router.get('/:id', authenticate, validPlantId, checkForPlantOwner, async(req, res)=>{
    try{
        const plant = await plantDb.findById(req.params.id);
        res.status(200).json(plant);
    }catch (err){
        res.status(500).json({ error: `there was an error: ${err}` });
    }
});

router.delete('/:id', authenticate, validPlantId, checkForPlantOwner, async(req, res)=>{
    try{
        const plant = await plantDb.deletePlantById(req.params.id);
        res.status(200).json({message: `This ${plant} has deleted `} );
    }catch (err){
        res.status(500).json({ error: `there was an error: ${err}` });
    }
});

router.put('/:id', authenticate, validPlantId, checkForPlantOwner, async(req, res)=>{
    try{
        const changes = req.body;
        if(changes){
            const update = await plantDb.updatePlant(req.params.id, changes);
            res.status(200).json({message:  'Plant updated'} );
        } else {
            res.status(400).json({ error: 'please provide something to update' });
        }
    }catch (err){
        res.status(500).json({ error: `there was an error: ${err}` });
    }
});

