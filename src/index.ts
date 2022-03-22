import express from 'express';
import { router } from './routes/loginRoutes';
import * as bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieSession({ keys: ['lasdasdasd'] }))
app.use(router);

app.listen(3000, () => {
  console.log('Listening on port 3000');
})