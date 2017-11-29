import React, { Component } from 'react';
import Main from './Main';
import Header from './Header';
import 'spectre.css/docs/dist/spectre.css';
import '../css/App.css';
import 'react-toastify/dist/ReactToastify.min.css';
import Toast from './Toast';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Toast />
      </div>
    );
  }
}

export default App;
