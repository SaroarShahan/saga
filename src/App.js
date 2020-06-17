import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './components/Header';
import ImageGrid from './components/ImageGrid';
import store from './store/index';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <>
          <Header />
          <ImageGrid />
        </>
      </Provider>
    );
  }
}

export default App;
