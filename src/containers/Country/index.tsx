import React from 'react';
import { graphql } from 'react-apollo';

import './index.css';
import Country from '../../models/types/Country';
import { GET_COUNTRY } from '../../apollo/country/queries';

type Response = {
  country: Country;
};

type Variables = {
  countryCode: string;
};

type InputProps = {
  countryCode: string | null;
};

const withCountry = graphql<InputProps, Response, Variables>(GET_COUNTRY, {
  options: ({ countryCode }) => ({
    variables: { countryCode: countryCode ? countryCode : '' }
  })
});

export default withCountry(({ data }) => {
  if (!data) return <div>Error Fetching Country!</div>;

  const { loading, country } = data;

  if (loading) return null;
  if (!country) return <div className="select">Select a country</div>;

  const { name, currency, emoji, native } = country;

  return (
    <div className="country">
      <div className="title">
        <div className="emoji">{emoji}</div>
        <div className="label">{name}</div>
      </div>
      <div className="row">Currency Symbols: {currency}</div>
      <div className="row">Name in Native Language: {native}</div>
    </div>
  );
});
