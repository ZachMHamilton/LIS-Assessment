import express from 'express';
import submissionRoute from './routes/submissionRoute';
import { inDb } from './db/inDb';
import { inMemory } from './db/inMemory';

const app = express();
const PORT = 3000;

// Set to true to use the database and false to use in-memory storage
const useDb = false;
const store = useDb ? inDb : inMemory;

app.use(express.json());

// inject store
app.use('/api/submissions', submissionRoute(store));

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
