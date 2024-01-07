import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { appRouter } from './trpcApp';
import cors from 'cors';
import connectToPG from './connectToDB';

const server = createHTTPServer({
  router: appRouter,
  middleware: cors(),
});

server.listen(3000);
server.server.on('listening', () => {
  console.log('server is up and running');
  connectToPG()
    .then(() => {
      console.log('connected to DB');
    })
    .catch((error) => console.error('not connecting to DB', error));
});
server.server.on('error', () => {
  console.log('server is not up');
});
