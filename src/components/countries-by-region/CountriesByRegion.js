import { useEffect, useState } from 'react';

import { useAsync } from '../../hooks';
import { Button } from '../../atoms/Button';
import { Loader } from '../../atoms/Loader';
import { REGIONS } from '../../utils/constants';
import { getByCountriesByRegionName } from '../../api/rest.service';

export const CountriesByRegion = ({ region = 'Europe' }) => {
  const [currentRegion, setCurrentRegion] = useState(region);
  const { execute, status, error, data } = useAsync(getByCountriesByRegionName, false);

  useEffect(() => {
    execute(currentRegion);
  }, [currentRegion, execute]);

  const renderRegions = () => {
    return REGIONS.map((item) => {
      return (
        <Button
          className="btn btn-outline-success"
          key={item}
          onClick={() => {
            setCurrentRegion(item);
          }}
        >
          {currentRegion === item && status === 'pending' && (
            <>
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            </>
          )}

          {item}
        </Button>
      );
    });
  };

  const renderCountries = () => {
    return data.map((country) => {
      return (
        <div className="card mb-2" style={{ width: '18rem' }} key={country.name.common}>
          <img src={country.flags.svg} className="card-img-top" alt={country.name.common} />
          <div className="card-body">
            <h5 className="card-title">{country.name.common}</h5>
            <p className="card-text d-flex justify-content-between">
              <img src={country.coatOfArms.svg} alt={country.name.official} width="40" />
              {country.name.official}
            </p>
            {country.capital && <p className="card-text">Capital: {country?.capital[0]}</p>}
            <a
              href={country.maps.googleMaps}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="row">
      <div className="row col-12 mb-3">
        <h2 className="text-muted col-4">
          Selected Region: <span className="text-primary">{currentRegion}</span>
        </h2>
        <div className="text-muted col-6 justify-content-between d-flex">{renderRegions()}</div>
      </div>
      <hr />
      <div className="row col-12">
        {status === 'idle' && <h3 className="text-warning">Please select a region</h3>}
        {status === 'error' && <h3 className="text-danger">{error}</h3>}
        {status === 'pending' && <Loader />}
        {status === 'success' && (
          <div className="d-flex justify-content-between flex-wrap">{renderCountries()}</div>
        )}
      </div>
    </div>
  );
};
