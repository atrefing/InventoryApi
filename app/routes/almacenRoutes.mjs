import {Router} from 'express';
import {getAlmacenes} from '../controller/Almacen_Controller.mjs';

const almacenRouter=Router();
almacenRouter.get('/almacen',getAlmacenes);


export {almacenRouter}