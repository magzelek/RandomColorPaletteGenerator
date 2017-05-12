import React from 'react';
import ReactDOM from 'react-dom';
require('../stylesheet/sass/style.scss');

document.addEventListener('DOMContentLoaded', function(){

  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        randomColorC1: "#726258",
        colorTagT1: "colorT1",
        randomColorC2: "#a57c55",
        colorTagT2: "colorT2",
        randomColorC3: "#c7b29b",
        colorTagT3: "colorT3",
        randomColorC4: "#534741",
        colorTagT4: "colorT4",
        randomColorC5: "#252525",
        colorTagT5: "colorT5",
      }
    }
    colorizePreview = () => {
      let color1 = Array.from(document.getElementsByClassName("color1"));
      let color2 = Array.from(document.getElementsByClassName("color2"));
      let color3 = Array.from(document.getElementsByClassName("color3"));
      let color4 = Array.from(document.getElementsByClassName("color4"));
      let color5 = Array.from(document.getElementsByClassName("color5"));
      color1.forEach( el => el.style.backgroundColor=this.state.randomColorC1 );
      color2.forEach( el => el.style.backgroundColor=this.state.randomColorC2 );
      color3.forEach( el => el.style.backgroundColor=this.state.randomColorC3 );
      color4.forEach( el => el.style.backgroundColor=this.state.randomColorC4 );
      color5.forEach( el => el.style.backgroundColor=this.state.randomColorC5 );
    }
    colorClicked = (e) => {
      let randomColor = '#'+Math.random().toString(16).slice(-6);
      e.target.style.backgroundColor=randomColor;
      let stateNameC = "randomColor"+e.target.id;
      this.setState({
        [stateNameC]: randomColor,
      });
      this.colorizePreview();
      e.preventDefault();
    }
    changeTag = (e) => {
      let targetVal = e.target.value;
      let targetId = e.target.id;
      let stateNameT = "colorTag"+targetId;
      this.setState({
        [stateNameT]: targetVal,
      });
      console.log(targetVal);
      e.preventDefault();
    }
    render() {
      return  <div id="container">
                <div className="left">
                  <Title/>
                  <Palette handleClick={this.colorClicked} handleTag={this.changeTag} randomColorC1={this.state.randomColorC1} colorTagT1={this.state.colorTagT1} randomColorC2={this.state.randomColorC2} colorTagT2={this.state.colorTagT2} randomColorC3={this.state.randomColorC3} colorTagT3={this.state.colorTagT3} randomColorC4={this.state.randomColorC4} colorTagT4={this.state.colorTagT4} randomColorC5={this.state.randomColorC5} colorTagT5={this.state.colorTagT5} />
                  <Results randomColorC1={this.state.randomColorC1} colorTagT1={this.state.colorTagT1} randomColorC2={this.state.randomColorC2} colorTagT2={this.state.colorTagT2} randomColorC3={this.state.randomColorC3} colorTagT3={this.state.colorTagT3} randomColorC4={this.state.randomColorC4} colorTagT4={this.state.colorTagT4} randomColorC5={this.state.randomColorC5} colorTagT5={this.state.colorTagT5} />
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
                  <PaletteElement colorId="C1" tagId="T1" handleClick={this.props.handleClick} handleTag={this.props.handleTag} randomColor={this.props.randomColorC1} colorTag={this.props.colorTagT1}/>
                  <PaletteElement colorId="C2" tagId="T2" handleClick={this.props.handleClick} handleTag={this.props.handleTag} randomColor={this.props.randomColorC2} colorTag={this.props.colorTagT2}/>
                  <PaletteElement colorId="C3" tagId="T3" handleClick={this.props.handleClick} handleTag={this.props.handleTag} randomColor={this.props.randomColorC3} colorTag={this.props.colorTagT3}/>
                  <PaletteElement colorId="C4" tagId="T4" handleClick={this.props.handleClick} handleTag={this.props.handleTag} randomColor={this.props.randomColorC4} colorTag={this.props.colorTagT4}/>
                  <PaletteElement colorId="C5" tagId="T5" handleClick={this.props.handleClick} handleTag={this.props.handleTag} randomColor={this.props.randomColorC5} colorTag={this.props.colorTagT5}/>
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
                <input placeholder="Tag your color" type="text" onChange={this.props.handleTag} value={this.props.colorTag} id={this.props.tagId}/>
              </div>
    }
  }

  class Results extends React.Component {
    copyVal = (e) => {
      e.preventDefault();
      e.target.previousSibling.select();
      document.execCommand('copy');
    }
    render() {
      let hex = `${this.props.randomColorC1} ${this.props.randomColorC2} ${this.props.randomColorC3} ${this.props.randomColorC4} ${this.props.randomColorC5}`;

      let less = `@${this.props.colorTagT1}: ${this.props.randomColorC1}; @${this.props.colorTagT2}: ${this.props.randomColorC2}; @${this.props.colorTagT3}: ${this.props.randomColorC3}; @${this.props.colorTagT4}: ${this.props.randomColorC4}; @${this.props.colorTagT5}: ${this.props.randomColorC5};`;

      let sass = `$colors: (${this.props.colorTagT1}: ${this.props.randomColorC1}, ${this.props.colorTagT2}: ${this.props.randomColorC2}, ${this.props.colorTagT3}: ${this.props.randomColorC3}, ${this.props.colorTagT4}: ${this.props.randomColorC4}, ${this.props.colorTagT5}: ${this.props.randomColorC5});`
      
      return  <div id="results">
                <div>
                  <span>HEX</span>
                  <input type="text" value={hex}/>
                  <button onClick={this.copyVal} className="btn">Copy to clipboard</button>
                </div>
                <div>
                  <span>LESS</span>
                  <input type="text" value={less}/>
                  <button onClick={this.copyVal} className="btn">Copy to clipboard</button>
                </div>
                <div>
                  <span>SASS</span>
                  <input type="text" value={sass}/>
                  <button onClick={this.copyVal} className="btn">Copy to clipboard</button>
                </div>
              </div>
    }
  }

  class Preview extends React.Component {
    render() {
      return  <div id="preview">
                <div className="uiContainer">
                  <div className="color1 menu">
                  </div>
                  <div className="color2 title">
                    <div className="colorText line line1"></div>
                    <div className="colorText line line2"></div>
                    <div className="colorText line line3"></div>
                  </div>
                  <div className="color3 text">
                    <div className="colorText textline"></div>
                    <div className="colorText textline"></div>
                    <div className="colorText textline"></div>
                  </div>
                  <div className="color4 slider">
                    <div className="color5 sliderElem"></div>
                    <div className="color5 sliderElem"></div>
                    <div className="color5 sliderElem"></div>
                  </div>
                </div>
              </div>
    }
  }

  class Title extends React.Component {
    render() {
      return  <div id="title">
                <h1>Random Color Palette Generator</h1>
                <span>Click the color to draw a new one!</span>
              </div>
    }
  }

  ReactDOM.render(
    <App/>,
    document.getElementById('app')
  );

});
