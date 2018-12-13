import React from 'react';
import { graphql } from 'react-apollo';
import './index.css';
import { GET_COUNTRIES } from '../../apollo/countries/queries';
import Country from '../../models/types/Country';
import Loader from '../../components/Loader';
import classnames from 'classnames';

type Response = {
  countries: Country[];
};

type InputProps = {
  selected: string | null;
  onSelect(countryCode: string): void;
};

const withCountries = graphql<InputProps, Response, {}>(GET_COUNTRIES);

export default withCountries(({ data, selected, onSelect }) => {
  if (!data) return null;

  const { loading, countries } = data;
  if (loading) return <Loader />;
  if (!countries) return <div>Error fetching countries!</div>;

  return (
    <div>
      {countries.map(country => {
        const { code, name } = country;
        const itemClasses = classnames('item', { selected: selected === code });

        return (
          <div
            className={itemClasses}
            key={code}
            onClick={() => onSelect(code)}
          >
            {name}
          </div>
        );
      })}
    </div>
  );
});
