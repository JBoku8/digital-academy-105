import { useEffect } from 'react';
import { ProductTable } from '../../components/table';

export const ShoppingCart = () => {
  // Component first Render - once
  useEffect(() => {
    console.log('AJAX Request, started');
    const timerId = setTimeout(() => {
      console.log('AJAX Request, finished');
    }, 3000);

    return () => {
      // cleanup function
      clearTimeout(timerId);
    };
  }, []);

  return (
    <div className="row">
      <h2>Shopping Cart ✅👌🛒</h2>
      <div className="col-12">
        <ProductTable />
      </div>
    </div>
  );
};
