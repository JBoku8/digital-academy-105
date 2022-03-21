import { NavLink } from 'react-router-dom';
import { Button } from '../../atoms';
import { useAuthProvider } from '../../providers/AuthProvider';
import { useCart } from '../../providers/CartProvider';

import { LOGIN_PATH, REGISTER_PATH, PROFILE_PATH } from '../../utils';

export const RightNavigation = (props) => {
  const { user, logOut } = useAuthProvider();
  const { resetBucket } = useCart();

  const renderGuestNavLinks = () => {
    return (
      <>
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
      </>
    );
  };

  const renderUserNavLinks = () => {
    return (
      <>
        <li className="nav-item">
          <NavLink className="nav-link" to={PROFILE_PATH}>
            Profile 💻
          </NavLink>
        </li>
        <li className="nav-item">
          <Button
            className="btn btn-link nav-link"
            onClick={() => {
              logOut();
              resetBucket();
            }}
          >
            Log Out
          </Button>
        </li>
      </>
    );
  };

  return (
    <ul className="navbar-nav mb-2 mb-lg-0">
      {user ? renderUserNavLinks() : renderGuestNavLinks()}
    </ul>
  );
};
