import './App.css';
import { useSelector } from 'react-redux';

import { RootState } from './redux/store';
import { Route, Routes } from 'react-router-dom';
import { Landing } from './app/Landing';
import { StyledLoader } from './components/Base/Loader/styled';
import { Loader } from './components/Base';

import { Suspense } from 'react';
import { License } from './app/License';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* <Route path="/" element={<Hello />} /> */}
          <Route path="/license" element={<License />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
