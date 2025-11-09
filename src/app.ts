import express, { json } from 'express';
import { userRouter } from './routes/usersRoutes';
import { arenaRouter } from './routes/arenasRoutes';
import { cardsRouter } from './routes/cardsRoutes';

//* App declaration
export const app = express();

//TODO: Necesita manejo de sesion y tambien metodos de autenticación
//TODO: Necesita Encriptación de contraseña, para guardar el Hash en users.
//Middlewares
app.use(json());
app.use('/api/v1', userRouter);
app.use('/api/v1', arenaRouter);
app.use('/api/v1', cardsRouter);
