import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Filmes from './pages/Filmes/Filmes';
import './App.css';
import { GlobalStorageFilmes } from './pages/Filmes/ContextFilmes/GlobalContextFilmes';

function App() {
  return (
    <GlobalStorageFilmes>
      <BrowserRouter>
      
        <div className="App">

          <Routes>
            <Route path='/' Element={<Home />} />
            <Route path='/filmes' element={<Filmes />} />
          </Routes>
        
        </div>
      
      </BrowserRouter>
    </GlobalStorageFilmes>
  );
}

export default App;
