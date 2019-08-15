import express from 'express';
import itemRouters from './itemRouters';
import photoRoute from './photoRoute';

const routerApp = express.Router();
/* GET home page. */
routerApp.use('/item', itemRouters);

routerApp.use('/photo', photoRoute);

export default routerApp;
