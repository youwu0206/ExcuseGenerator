import { Routes, Route } from 'react-router-dom';
import GeneratorPage from './pages/GeneratorPage';
import SavedPage from './pages/SavedPage'; 
import NavBar from './components/NavBar'; 
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<GeneratorPage />} />
         <Route path="/saved" element={<SavedPage />} />
      </Routes>
    </div>
  );
}

export default App;