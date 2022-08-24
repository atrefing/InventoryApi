import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import {puerto} from './configx.mjs'

import {almacenRouter} from './routes/almacenRoutes.mjs';

const app=express();
console.log("puerto : ",puerto.Port);

app.set('port', puerto.Port||3000);
app.use(cors());
app.use(almacenRouter);


export default app
