import { Outlet } from 'react-router-dom';

import { Footer } from '../footer';
import { Header } from '../header';

const sizes = {
  default: 'container',
  fluid: 'container-fluid',
};

const outletStyles = {
  minHeight: '500px',
};

export const Layout = ({ className, size = 'default' }) => {
  return (
    <div className={`${sizes[size]} ${className}`}>
      <Header />
      <div className="my-3" style={outletStyles}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
