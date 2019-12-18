import React from 'react';
import logo from './l5.svg';
import '../src/styles/App.css';
import '../src/styles/scriptGenerator.css';
import '../src/styles/selector.css';

import ScriptGenerator from './components/scriptGenerator';

function App() {
  return (
    <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="hsg">Smart House Postman</h2>
        </div>
        <div className="App-intro">
          <ScriptGenerator/>
        </div>
    </div>
  );
}

export default App;

/*const fs = require('browserify-fs');
fs.mkdir('/script-generator/src', function() {
  fs.readFile('/script-generator/src/k.txt', 'utf8', function(err, data) {
    console.log(data);
    console.log(err);
  });
});*/
