import { env } from './lib/env';
import { NODE_ENV } from './lib/types';
import { default as express } from 'express';
import { default as http } from 'node:http';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const server = http.createServer(app);

server.listen(env.PORT, env.HOST, () => {
  console.log(
    `${env.NODE_ENV === NODE_ENV.PRODUCTION ? 'https' : 'http'}://${env.HOST}:${env.PORT}`,
  );
});
