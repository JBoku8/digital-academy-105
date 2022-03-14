import PropTypes from 'prop-types';

import { Button } from '../../atoms';

export const ProductTableRow = ({ name, price, qty, id, onCartAdd, onCartRemove }) => {
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        რაოდენობა: {qty}, სულ: {price * qty}
      </td>
      <td>
        <div className="btn-group">
          <Button className="btn btn-outline-success" text="➕" onClick={onCartAdd} />
          <Button className="btn btn-outline-warning" text="🗑" onClick={onCartRemove} />
        </div>
      </td>
    </tr>
  );
};

ProductTableRow.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  qty: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  onCartAdd: PropTypes.func.isRequired,
  onCartRemove: PropTypes.func.isRequired,
};
