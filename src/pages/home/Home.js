import HomeContent from './HomeContent';
import { CountriesByRegion } from '../../components/countries-by-region';

import './home.css';

export const Home = () => {
  return (
    <div className="col-12 my-3">
      <HomeContent />
      <CountriesByRegion />
    </div>
  );
};
