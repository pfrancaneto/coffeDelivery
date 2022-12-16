import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './Layouts/DefaultLayout';
import { Checkout } from './pages/Checkout';
import { ConfirmacaoPedido } from './pages/ConfirmacaoPedido';
import { Home } from './pages/Home';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />}/>
        <Route path='/checkout' element={<Checkout />}/>
        <Route path='/confirmacao' element={<ConfirmacaoPedido />} />
      </Route>
    </Routes>
  );
}