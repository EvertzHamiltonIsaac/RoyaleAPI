import mongoose from 'mongoose';

export class DatabaseConnection {
  private readonly MongoStringConnection: string;

  constructor() {
    this.MongoStringConnection = `${process.env.MONGO_CONNECTION_STRING}`.replace(
      '<db_password>',
      `${process.env.MONGO_DATABASE_PASSWORD}`,
    );
  }

  MongoDBConnection() {
    return mongoose
      .connect(`${this.MongoStringConnection}`)
      .then(() => 'Connection with MongoDB was Succesfully')
      .catch((error: unknown) => `Connection Error with MongoDB See: ${error}`);
  }
}
