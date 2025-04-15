import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Categories } from './pages/Categories';
import { Product } from './pages/Product';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
}
