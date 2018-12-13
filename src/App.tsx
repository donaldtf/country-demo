import React, { Component } from 'react';
import './App.css';

import Countries from './containers/Countries';
import Country from './containers/Country';

interface State {
  selectedCountry: string | null;
}

class App extends Component<{}, State> {
  state = { selectedCountry: null };

  setCountry = (selectedCountry: string | null) =>
    this.setState({ selectedCountry });

  render() {
    const { selectedCountry } = this.state;

    return (
      <div className="App">
        <div className="list">
          <Countries selected={selectedCountry} onSelect={this.setCountry} />
        </div>
        <div className="details">
          <Country countryCode={selectedCountry} />
        </div>
      </div>
    );
  }
}

export default App;
