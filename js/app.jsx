import React from 'react';
import ReactDOM from 'react-dom';
require('../stylesheet/sass/style.scss');

document.addEventListener('DOMContentLoaded', function(){

  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        randomColor1: "#726258",
        colorTag1: "color1",
        randomColor2: "#a57c55",
        colorTag2: "color2",
        randomColor3: "#c7b29b",
        colorTag3: "color3",
        randomColor4: "#534741",
        colorTag4: "color4",
        randomColor5: "#252525",
        colorTag5: "color5",
      }
    }
    colorClicked = (e) => {
      e.preventDefault();
      let randomColor = '#'+Math.random().toString(16).slice(-6);
      e.target.style.backgroundColor=randomColor;
      let stateNameC = "randomColor"+e.target.id;
      this.setState({
        [stateNameC]: randomColor,
      });
    }
    changeTag = (e, stateNameT) => {
      e.preventDefault();
      //console.log(e.target);
      var stateNameT = "colorTag"+e.target.id;
      this.setState({
        [stateNameT]: e.target.value,
      });
    }
    render() {
      return  <div id="container">
                <div className="left">
                  <Title/>
                  <Palette handleClick={this.colorClicked} handleTag={this.changeTag} randomColor1={this.state.randomColor1} colorTag1={this.state.colorTag1} randomColor2={this.state.randomColor2} colorTag2={this.state.colorTag2} randomColor3={this.state.randomColor3} colorTag3={this.state.colorTag3} randomColor4={this.state.randomColor4} colorTag4={this.state.colorTag4} randomColor5={this.state.randomColor5} colorTag5={this.state.colorTag5} />
                  <Results randomColor1={this.state.randomColor1} colorTag1={this.state.colorTag1} randomColor2={this.state.randomColor2} colorTag2={this.state.colorTag2} randomColor3={this.state.randomColor3} colorTag3={this.state.colorTag3} randomColor4={this.state.randomColor4} colorTag4={this.state.colorTag4} randomColor5={this.state.randomColor5} colorTag5={this.state.colorTag5} />
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
    }
    render() {
      return  <div>
                <div id="palette">
                  <PaletteElement colorId="1" handleClick={this.props.handleClick} handleTag={this.props.handleTag} randomColor={this.props.randomColor1} colorTag={this.props.colorTag1}/>
                  <PaletteElement colorId="2" handleClick={this.props.handleClick} handleTag={this.props.handleTag} randomColor={this.props.randomColor2} colorTag={this.props.colorTag2}/>
                  <PaletteElement colorId="3" handleClick={this.props.handleClick} handleTag={this.props.handleTag} randomColor={this.props.randomColor3} colorTag={this.props.colorTag3}/>
                  <PaletteElement colorId="4" handleClick={this.props.handleClick} handleTag={this.props.handleTag} randomColor={this.props.randomColor4} colorTag={this.props.colorTag4}/>
                  <PaletteElement colorId="5" handleClick={this.props.handleClick} handleTag={this.props.handleTag} randomColor={this.props.randomColor5} colorTag={this.props.colorTag5}/>
                </div>
              </div>
    }
  }

  class PaletteElement extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return  <div className="paletteColors">
                <div onClick={this.props.handleClick} id={this.props.colorId}></div>
                <span>{this.props.randomColor}</span>
                <input onChange={this.props.handleTag} value={this.props.colorTag} placeholder="Tag your color" type="text"/>
              </div>
    }
  }

  class Results extends React.Component {
    render() {
      let hex = `${this.props.randomColor1} ${this.props.randomColor2} ${this.props.randomColor3} ${this.props.randomColor4} ${this.props.randomColor5}`;
      let less = `@${this.props.colorTag1}: ${this.props.randomColor1}; @${this.props.colorTag2}: ${this.props.randomColor2}; @${this.props.colorTag3}: ${this.props.randomColor3}; @${this.props.colorTag4}: ${this.props.randomColor4}; @${this.props.colorTag5}: ${this.props.randomColor5};`;
      let sass = `$colors: (${this.props.colorTag1}: ${this.props.randomColor1}, ${this.props.colorTag2}: ${this.props.randomColor2}, ${this.props.colorTag3}: ${this.props.randomColor3}, ${this.props.colorTag4}: ${this.props.randomColor4}, ${this.props.colorTag5}: ${this.props.randomColor5});`
      return  <div id="results">
                <div>
                  <span>HEX</span>
                  <input type="text" value={hex}/>
                  <button>Copy to clipboard</button>
                </div>
                <div>
                  <span>LESS</span>
                  <input type="text" value={less}/>
                  <button>Copy to clipboard</button>
                </div>
                <div>
                  <span>SASS</span>
                  <input type="text" value={sass}/>
                  <button>Copy to clipboard</button>
                </div>
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
