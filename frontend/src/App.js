import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';

import About from './containers/About/About';
import Rating from './containers/Rating/Rating';
import Changes from "./containers/Changes/Changes";
import GreatPowers from './containers/GreatPowers/GreatPowers';

class App extends Component {
  render() {
    return (
        <Layout>
          <Switch>
            <Route path="/" exact component={About}/>
            <Route path="/rating" component={Rating} />
            <Route path="/changes" component={Changes} />
            <Route path="/great-powers" component={GreatPowers} />
          </Switch>
        </Layout>
    );
  }
}

export default App;
