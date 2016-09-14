import './app.styl';

import React, { Component } from 'react';
import Toolbar from 'containers/toolbar/Toolbar';
import Surface from 'components/surface/Surface';
import Sidebar from 'components/sidebar/Sidebar';
import Framebar from 'components/framebar/Framebar';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Toolbar />
        <div className="app__content">
          <Surface />
          <Framebar />
        </div>
        <Sidebar />
      </div>
    )
  }
}

export default App;
