import express, { json } from 'express';
import { userRouter } from './routes/usersRoutes';
import { arenaRouter } from './routes/arenasRoutes';
import { cardsRouter } from './routes/cardsRoutes';
import { profilesRouter } from './routes/profilesRoutes';
import { decksRouter } from './routes/deckRoutes';
import { deckCardRouter } from './routes/deckcardsRoutes';
import { userCardRouter } from './routes/usercardsRoutes';
//* App declaration
export const app = express();

//TODO: Necesita manejo de sesion y tambien metodos de autenticación
//TODO: Necesita Encriptación de contraseña, para guardar el Hash en users.
//TODO: Crear una carpeta de Middlewares para guardarlos todos ahi.

app.set('query parser', 'extended'); //Hace que las URL con Query String puedan leer el lo que esta dentro de corchetes gte, gt, lt, lte

//Middlewares
const api_version = '/api/v1';

app.use(json());
app.use(api_version, userRouter);
app.use(api_version, arenaRouter);
app.use(api_version, cardsRouter);
app.use(api_version, profilesRouter);
app.use(api_version, decksRouter);
app.use(api_version, deckCardRouter);
app.use(api_version, userCardRouter);
