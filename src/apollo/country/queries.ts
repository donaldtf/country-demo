import gql from 'graphql-tag';

export const GET_COUNTRY = gql`
  query($countryCode: String!) {
    country(code: $countryCode) {
      code
      name
      native
      phone
      currency
      emoji
      languages {
        code
        name
        native
        rtl
      }
    }
  }
`;
