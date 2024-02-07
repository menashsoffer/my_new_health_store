import express from 'express';
import cors from 'cors';
import { postgraphile } from 'postgraphile';
import 'dotenv/config';

const host = process.env.HOST || 'localhost';
const port = process.env.POSTGRAPHILE ? Number(process.env.POSTGRAPHILE) : 4000;
const jwtS = process.env.JWT_SECRET;

const app = express();
app.use(cors());

export const post = postgraphile(
  {
    database: process.env.DATABASE_NAME,
    user: process.env.USER_NAME,
    password: process.env.PASSWORD,
    host: process.env.PG_HOST,
    // port: process.env.PORT as unknown as number,
    ssl: true,
  },
  'users_for_store',
  {
    watchPg: false,
    graphiql: true,
    enhanceGraphiql: true,
    ownerConnectionString: 'owner',
    dynamicJson: true,
    classicIds: true,
    jwtPgTypeIdentifier: 'users_for_store.jwt_token',
    jwtSecret: jwtS,
  },
);

app.use(post);
//   postgraphile(process.env.POSTGRES_LOCAL, 'users_for_store', {
//     watchPg: true,
//     graphiql: true,
//     enhanceGraphiql: true,
//     jwtSecret: jwtS,
//     jwtPgTypeIdentifier: 'users_for_store.jwt_token',
//   }),
// );

app.listen(port, host, () => {
  console.log(`ready on http://${host}:${port}`);
});
