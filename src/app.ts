import express, { json } from 'express';

//* App declaration
export const app = express();

//Middlewares
app.use(json());
