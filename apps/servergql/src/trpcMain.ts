import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { appRouter } from './trpcApp';
import cors from 'cors';
import connectToPG from './connectToDB';
import { createContext } from './token/context';

const server = createHTTPServer({
  router: appRouter,
  createContext: createContext,
  middleware: cors(),
});

server.listen(3000);
server.server.on('listening', () => {
  console.log('\x1b[43m', 'server is up and running');
  connectToPG()
    .then(() => {
      console.log('\x1b[42m', 'connected to DB');
    })
    .catch((error) => console.error('not connecting to DB', error));
});
server.server.on('error', () => {
  console.log('server is not up');
});
