import React from 'react';
import ReactDOM from 'react-dom';
require('../stylesheet/sass/style.scss');

class App extends React.Component {
  render() {
    return  <div id="container">
              <div className="left">
                <Title/>
                <Palette/>
              </div>
              <div className="right">
                <Preview/>
              </div>
            </div>
  }
}

class Palette extends React.Component {
  colorClicked = (e) => {
    e.preventDefault();
    let randomColor = '#'+Math.random().toString(16).slice(-6);
    e.target.style.backgroundColor=randomColor;
  }
  render() {
    return  <div id="palette">
              <div className="paletteColors paletteColor1" onClick={this.colorClicked}></div>
              <div className="paletteColors paletteColor2" onClick={this.colorClicked}></div>
              <div className="paletteColors paletteColor3" onClick={this.colorClicked}></div>
              <div className="paletteColors paletteColor4" onClick={this.colorClicked}></div>
              <div className="paletteColors paletteColor5" onClick={this.colorClicked}></div>
            </div>
  }
}

class Preview extends React.Component {
  render() {
    return  <div id="preview"></div>
  }
}

class Title extends React.Component {
  render() {
    return  <div id="title">Random Color Palette Generator</div>
  }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
