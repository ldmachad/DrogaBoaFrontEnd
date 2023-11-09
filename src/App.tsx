import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import ListaCategorias from './components/categoria/listaCategorias/ListaCategorias';
import FormCategoria from './components/categoria/formCategoria/FormCategoria';
import DeleteCategoria from './components/categoria/deleteCategoria/DeleteCategoria';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='min-h-[80vh]'>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/categorias" element={<ListaCategorias />} />
          <Route path="/cadastrarCategoria" element={<FormCategoria />} />
          <Route path="/editarCategoria/:id" element={<FormCategoria />} />
          <Route path="/deletarCategoria/:id" element={<DeleteCategoria />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
