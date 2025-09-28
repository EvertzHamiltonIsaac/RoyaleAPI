import express, { json } from 'express';
import { userRouter } from './routes/usersRoutes';

//* App declaration
export const app = express();

//TODO: Necesita manejo de sesion y tambien metodos de autenticación
//TODO: Necesita Encriptación de contraseña, para guardar el Hash en users.
//Middlewares
app.use(json());
app.use('/api/v1', userRouter);
