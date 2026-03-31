import { Toaster } from 'sonner';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Boletim } from './pages/Boletim';

export default function App() {
  return (
    <>
      {/* O Toaster precisa estar aqui fora das rotas */}
     <Toaster position="top-right" toastOptions={{ style: { background: 'transparent', border: 'none', boxShadow: 'none' } }} />
      
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/boletim" element={<Boletim />} />
        </Routes>
      </Router>
    </>
  );
}