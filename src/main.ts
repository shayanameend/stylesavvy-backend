import { env } from './lib/env';
import { NODE_ENV } from './lib/types';
import { default as express } from 'express';
import { default as http } from 'node:http';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
  const { email, password, deviceOS, deviceToken } = req.body;

  console.log({
    email,
    password,
    deviceOS,
    deviceToken,
  });

  res.json({
    data: {
      user: {
        name: 'John Doe',
        email,
      },
      tokens: {
        access: {
          token: 'access-token',
          expiry: new Date(),
        },
        refresh: {
          token: 'refresh-token',
          expiry: new Date(),
        },
      },
    },
    status: 'success',
    message: 'Login successful',
  });
});

const server = http.createServer(app);

server.listen(env.PORT, env.HOST, () => {
  console.log(
    `${env.NODE_ENV === NODE_ENV.PRODUCTION ? 'https' : 'http'}://${env.HOST}:${env.PORT}`,
  );
});
