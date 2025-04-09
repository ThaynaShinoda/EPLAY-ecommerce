import { Routes, Route } from 'react-router-dom';
import { Banner } from './components/Banner';
import { ProductsList } from './components/ProductsList';

export function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Banner />
            <ProductsList title='Promoções' background='gray' />
          </>
        }
      />
    </Routes>
  );
}
