import mongoose from "mongoose";

// Se uma parte da function tenta se ligar com algo externo, ela precisa ser assíncrona
// async function connectOnDB() {
//   mongoose.connect(process.env.DB_CONNECTION_STRING);
//   return mongoose.connection;
// };

mongoose.connect(process.env.DB_CONNECTION_STRING);

let db = mongoose.connection;

export default db;


