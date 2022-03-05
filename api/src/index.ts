import server from './servers';
import { mongoClose, verificarMongoInstancia } from './database/mongo';

import { PORT, DB_URL } from "./env_conf";

verificarMongoInstancia(DB_URL);

server.listen(PORT, () => {
  console.log(`API Rest corriendo en http://localhost:${PORT}`)
})