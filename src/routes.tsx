import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Categories } from './pages/Categories';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  );
}
