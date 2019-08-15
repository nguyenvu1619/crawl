import express from 'express';
import photoController from '../controllers/photoControllers';

const route = express.Router();

route.get('/:pic', photoController.getImage);

export default route;
