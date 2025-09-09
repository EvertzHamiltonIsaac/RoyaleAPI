"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class DatabaseConnection {
    constructor() {
        this.MongoStringConnection = `${process.env.MONGO_CONNECTION_STRING}`.replace('<db_password>', `${process.env.MONGO_DATABASE_PASSWORD}`);
    }
    MongoDBConnection() {
        return mongoose_1.default
            .connect(`${this.MongoStringConnection}`)
            .then(() => 'Connection with MongoDB was Succesfully')
            .catch((error) => `Connection Error with MongoDB See: ${error}`);
    }
}
exports.DatabaseConnection = DatabaseConnection;
