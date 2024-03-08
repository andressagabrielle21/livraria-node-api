import mongoose, { mongo } from "mongoose";

// Se uma parte da function tenta se ligar com algo externo, ela precisa ser assíncrona
async function connectOnDB() {
  mongoose.connect(process.env.DB_CONNECTION_STRING);
  return mongoose.connection;
};

export default connectOnDB;


