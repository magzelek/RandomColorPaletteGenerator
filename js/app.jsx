import React from 'react';
import ReactDOM from 'react-dom';
require('../stylesheet/sass/style.scss');

document.addEventListener('DOMContentLoaded', function(){

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
    constructor(props) {
      super(props);
      this.state = {
        randomColor: "",
        colorTag: "",
      }
    }
    render() {
      return  <div>
                <div id="palette">
                  <PaletteElement className="paletteColor1"/>
                  <PaletteElement className="paletteColor2"/>
                  <PaletteElement className="paletteColor3"/>
                  <PaletteElement className="paletteColor4"/>
                  <PaletteElement className="paletteColor5"/>
                </div>
                <div id="results">
                  <div>
                    <span>HEX</span>
                    <input type="text" value="HEX value"/>
                    <button>Copy to clipboard</button>
                  </div>
                  <div>
                    <span>LESS</span>
                    <input type="text" value="LESS value"/>
                    <button>Copy to clipboard</button>
                  </div>
                  <div>
                    <span>SASS</span>
                    <input type="text" value="SASS value"/>
                    <button>Copy to clipboard</button>
                  </div>
                </div>
              </div>
    }
  }

  class PaletteElement extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        randomColor: this.props.randomColor,
        colorTag: this.props.colorTag,
      }
    }
    colorClicked = (e) => {
      e.preventDefault();
      let randomColor = '#'+Math.random().toString(16).slice(-6);
      this.setState({
        randomColor: randomColor,
      });
      e.target.style.backgroundColor=randomColor;
    }
    changeTag = (e) => {
      e.preventDefault();
      this.setState({
        colorTag: e.target.value,
      });
    }
    render() {
      return  <div className="paletteColors">
                <div onClick={this.colorClicked}></div>
                <span>{this.state.randomColor}</span>
                <input onChange={this.changeTag} value={this.state.colorTag} placeholder="Tag your color" type="text"/>
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
      return  <div id="title">
                <h1>Random Color Palette Generator</h1>
                <h2>Click the color to draw a new one!</h2>
              </div>
    }
  }

  ReactDOM.render(
    <App/>,
    document.getElementById('app')
  );

});
