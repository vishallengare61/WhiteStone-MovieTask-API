import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  res.send('Hello from TypeScript + Node!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
