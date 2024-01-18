import express from 'express';
import cors from 'cors';
import { postgraphile } from 'postgraphile';
import 'dotenv/config';

const host = process.env.HOST;
const port = process.env.POSTGRAPHILE ? Number(process.env.POSTGRAPHILE) : 3001;
const jwtS = process.env.JWT_SECRET;

const app = express();
app.use(cors());

app.use(
  postgraphile(process.env.POSTGRES_LOCAL, 'users_for_store', {
    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
    jwtSecret: jwtS,
    jwtPgTypeIdentifier: 'users_for_store.jwt_token',
  }),
);

app.listen(port, host, () => {
  console.log(`ready on http://${host}:${port}`);
});
