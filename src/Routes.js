import { lazy, Suspense } from 'react';
import { Routes as Router, Route } from 'react-router-dom';

import { Loader } from './atoms';
import { Home } from './pages/home';
import { NoMatch } from './pages/NoMatch';

const Products = lazy(() => import('./pages/products'));
const ShoppingCart = lazy(() => import('./pages/shopping-cart'));

export const Routes = () => {
  return (
    <div
      className="my-3"
      style={{
        minHeight: '500px',
      }}
    >
      <Router>
        <Route path="/" index element={<Home />} />
        <Route
          path="/products"
          element={
            <Suspense fallback={<Loader message="Products Loading..." />}>
              <Products />
            </Suspense>
          }
        />
        <Route
          path="/shopping-cart"
          element={
            <Suspense fallback={<Loader message="Shopping Cart Loading..." />}>
              <ShoppingCart />
            </Suspense>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Router>
    </div>
  );
};

Routes.displayName = 'AppRoutes';
