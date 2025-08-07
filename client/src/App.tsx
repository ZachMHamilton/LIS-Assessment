import { useState } from 'react';
import Home from './pages/Home';
import Confirmation from './pages/Confirmation';
import type { Submission } from './types';

function App() {
  const [page, setPage] = useState<'form' | 'confirmation'>('form');
  const [submittedData, setSubmittedData] = useState<Submission>();

  const handleSubmit = (data: Submission) => { 
    setSubmittedData(data);
    setPage('confirmation');
  }

  return (
    <>
    {page === 'form' && (
      <Home onSubmit={handleSubmit} />
    )}
    {submittedData && page === 'confirmation' && (
      <Confirmation data={submittedData} onBack={() => setPage('form')} />
    )}
  </>
  );
}

export default App;