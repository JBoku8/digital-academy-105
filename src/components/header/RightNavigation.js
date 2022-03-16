import { NavLink } from 'react-router-dom';

import { LOGIN_PATH, REGISTER_PATH } from '../../utils';

export const RightNavigation = (props) => {
  return (
    <ul className="navbar-nav mb-2 mb-lg-0">
      <li className="nav-item">
        <NavLink className="nav-link" to={LOGIN_PATH}>
          Login ⎆
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to={REGISTER_PATH}>
          Register ✅
        </NavLink>
      </li>
    </ul>
  );
};
