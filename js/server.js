"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const db_connection_1 = require("./databases/db_connection");
const dotenv_1 = __importDefault(require("dotenv"));
//*Setting Envirotment Variables
dotenv_1.default.config();
//* Variables
const port = process.env.PORT;
//* DB Connections
const databaseConnection = new db_connection_1.DatabaseConnection();
if ((process.argv[1] = '--MongoDB')) {
    databaseConnection
        .MongoDBConnection()
        .then((result) => console.log(result))
        .catch((error) => console.log(error));
}
app_1.app.listen(port, () => {
    console.log(`App is running on Port ${port}`);
});
