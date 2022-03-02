import { useState } from 'react';
// import debounce from 'lodash/debounce';

import { ProductItem } from './ProductItem';
import { Button, TextInput, Form } from '../../atoms';
import { Collapsible } from '../../components/collapsible';
import productsData from '../../products.json';

export const Products = () => {
  const [inStockOnly, setInStockOnly] = useState(false);
  const [filterTerm, setFilterTerm] = useState('');
  // TODO grouping by the category
  //   const renderProducts = () => {
  //       const rows = [];
  //       let lastCategory = null;

  //       productsData.forEach(product => {
  //           if( product.category !== lastCategory ) {

  //           }
  //       })
  //   }

  console.log('__Products_RENDERING__');

  const renderProducts = () => {
    let data = productsData.slice();
    if (inStockOnly) {
      data = data.filter((item) => item.stock);
    }

    if (filterTerm) {
      data = data.filter((el) => el.name.includes(filterTerm));
    }

    return data.map((item, index) => {
      return <ProductItem product={item} key={index} />;
    });
  };

  const handleFilterChange = ({ target }) => {
    setFilterTerm(target.value);
  };

  return (
    <div className="row shadow my-3 p-3">
      <h3>Products</h3>
      <Form>
        <div className="mb-3 row">
          <div className="col-8">
            <TextInput value={filterTerm} onChange={handleFilterChange} placeholder="ძიება..." />
          </div>
          <div className="col-4">
            <Button
              className="btn btn-outline-primary"
              type="button"
              onClick={() => setInStockOnly(!inStockOnly)}
            >
              {inStockOnly ? '✅ მაჩვენე სრული პროდუქცია' : '🚀 მაჩვენე მარაგში მყოფი პროდუქცია'}
            </Button>
          </div>
        </div>
      </Form>
      <hr />
      <Collapsible closedTitle="მაჩვენე პროდუქცია" openedTitle="დამალე პროდუქცია">
        {renderProducts()}
      </Collapsible>
    </div>
  );
};
