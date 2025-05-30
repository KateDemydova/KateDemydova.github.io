import express from "express";
import rootRoute from "./routes/index.mjs";
import users from './routes/users.mjs';
import articles from "./routes/articles.mjs";
import {mockAuth} from './mock/mockAuth.mjs';
import path from 'path';
import favicon from 'serve-favicon';
import themeRoute from './routes/theme.mjs';
import authRouters from './routes/auth.mjs';
import cookieParser from 'cookie-parser';
import { fileURLToPath } from 'url';
import ejs from 'ejs';
import pug from 'pug';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(mockAuth);

app.use('/', rootRoute);
app.use('/users', users);
app.use('/articles', articles);
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cookieParser());
app.use('/', authRouters);
app.use('/', themeRoute);

app.engine('ejs', ejs.__express);
app.engine('pug', pug.__express);

app.set('views', path.join(__dirname, 'views'))


app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

export default app;

