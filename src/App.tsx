import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

import { Loader } from './components/Base';
import Dashboard from './app/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/app/*" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
