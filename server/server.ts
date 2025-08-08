import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());
app.get('/', (req, res) => {
  res.send('test');
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
