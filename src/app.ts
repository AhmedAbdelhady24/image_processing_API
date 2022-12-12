import express from 'express';
import apiRouter from './router/api.router';
const app = express();

app.use(apiRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export { app };
