const express = require('express');
const router = express.Router();
const userDb= require('../data/plantModel.js');
const {authenticate, validUser ,validUserId} = require('../auth/auth.js');