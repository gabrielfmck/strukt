// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Learn from './pages/Learn';
import Algorithms from './pages/Algorithms';
import DataStructures from './pages/DataStructures';
import Practice from './pages/Practice';
import NotFound from './pages/NotFound';
import { Login, Register } from './pages/auth';

// Importação das páginas de conteúdo de aprendizado
import WhatIsProgramming from './pages/learn/WhatIsProgramming';
import Variables from './pages/learn/Variables';
import ControlStructures from './pages/learn/ControlStructures';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Rotas principais */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/algorithms" element={<Algorithms />} />
          <Route path="/data-structures" element={<DataStructures />} />
          <Route path="/practice" element={<Practice />} />
          
          {/* Rotas de autenticação */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Rotas de conteúdo de aprendizado */}
          <Route path="/learn/what-is-programming" element={<WhatIsProgramming />} />
          <Route path="/learn/variables" element={<Variables />} />
          <Route path="/learn/control-structures" element={<ControlStructures />} />
          
          {/* Rota 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;