import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  res.send('Hello from Express');
});

app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
