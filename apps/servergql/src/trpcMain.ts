import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { appRouter } from './trpcApp';
import cors from 'cors';
import connectToPG from './connectToDB';
import { createContext } from './token/context';
// import { createProductsTable } from './sequelize';

const server = createHTTPServer({
  router: appRouter,
  createContext: createContext,
  middleware: cors(),
});

server.listen(7000);
server.server.on('listening', () => {
  console.log('\x1b[43m', 'server is up and running');
  connectToPG()
    .then(() => {
      // createProductsTable();
      console.log('\x1b[42m', 'connected to DB');
    })
    .catch((error) => console.error('not connecting to DB', error));
});
server.server.on('error', () => {
  console.log('server is not up');
});
