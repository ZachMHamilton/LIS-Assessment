import { useState } from 'react';
import Home from './pages/Home';
import Confirmation from './pages/Confirmation';

function App() {
  const [page, setPage] = useState<'form' | 'confirmation'>('form');

  return (
    <>
    {page === 'form' && (
      <Home onSuccess={() => setPage('confirmation')}/>
    )}
    {page === 'confirmation' && (
      <Confirmation onBack={() => setPage('form')} />
    )}
  </>
  );
}

export default App;