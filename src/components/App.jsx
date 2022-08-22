import React from 'react';
import '../styles/App.css';

import Header from './Header';
import Content from './Content';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
