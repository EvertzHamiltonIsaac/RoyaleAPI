import express from 'express';
import { app } from './app';
import { DatabaseConnection } from './databases/db_connection';
import dotenv from 'dotenv';

//*Setting Envirotment Variables
dotenv.config();

//* Variables
const port = process.env.PORT;

//* DB Connections
const databaseConnection = new DatabaseConnection();
if ((process.argv[1] = '--MongoDB')) {
  databaseConnection
    .MongoDBConnection()
    .then((result: string) => console.log(result))
    .catch((error: string) => console.log(error));
}

app.listen(port, () => {
  console.log(`App is running on Port ${port}`);
});
