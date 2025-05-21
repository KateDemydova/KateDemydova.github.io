import express from "express";
import rootRoute from "./routes/index.mjs";
import users from './routes/users.mjs';
import articles from "./routes/articles.mjs";

const app = express();
app.use(express.json());

app.use('/', rootRoute);
app.use('/users', users);
app.use('/articles', articles);

app.use((req, res) => {
  res.status(404).send('Not Found')
})

app.use((err, req, res) => {
  console.error(err.stack)
  res.status(500).send('Internal Server Error')
});

export default app;

