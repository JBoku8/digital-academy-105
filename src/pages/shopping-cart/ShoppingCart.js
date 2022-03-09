import { useEffect, useState } from 'react';
import { ProductTable } from '../../components/table';

export const ShoppingCart = () => {
  const [value, setValue] = useState();

  // Component each Re-Render
  // useEffect(() => {
  //   console.log('SHOPPING CART');
  // });

  // Component first Render - once
  useEffect(() => {
    console.log('AJAX Request, started');
    const timerId = setTimeout(() => {
      console.log('AJAX Request, finished');
      setValue(Math.random());
    }, 3000);

    return () => {
      // cleanup function
      clearTimeout(timerId);
    };
  }, []);

  // useEffect(() => {
  //   console.log('SHOPPING CART');
  // }, [value]);

  return (
    <div className="row">
      <h2 onClick={() => setValue(Math.random())}>Shopping Cart ✅👌🛒</h2>
      <div className="col-12">
        <ProductTable />
      </div>
    </div>
  );
};
