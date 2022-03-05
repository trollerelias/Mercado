import { connect, connection } from "mongoose";

let connectionInstance: any;

const mongoConn = async (URL_DB_MONGO: string) => {
  const urlConnectionMongo: string = URL_DB_MONGO;
  await connect(
    urlConnectionMongo,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    }
  )
  .then(() => {
    connectionInstance = connection;
    console.log(`[Mongo] => Conexion a Mongo Satisfactoria`);
  })
  .catch(() => {
    console.log(`[Mongo] => Conexion a Mongo Finalizada"`);
    process.exit(1);
  })
};

export const mongoClose = async () => {
  await connection.close(() => {
    console.log("[Mongo] => Conexion a Mongo Finalizada");
    process.exit(1);
  });
};

export const verificarMongoInstancia = async (url: string) => {
  if (!connectionInstance) {
    mongoConn(url);
  } else {
    mongoClose();
    mongoConn(url);
  }
};