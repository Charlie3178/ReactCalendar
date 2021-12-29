import React, { Component } from 'react';

import ContentWrapper from './contentWrapper';
import Footer from './footer';
import Header from './header';


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <ContentWrapper />
        <Footer />
      </div>
    );
  }
}
