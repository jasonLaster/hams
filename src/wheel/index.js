import React, { Component } from "react";
import {
  toPercent,
  getHSL,
  darker,
  brightness,
  boxShadow,
  updateColor
} from "./utils";

import "./index.css";

const ranges = {
  blue: [],
  red: [],
  green: []
};

function isColor(name, color) {
  if (ranges[name]) {
    const [min, max] = ranges[name];
    const { hue } = color;
    return hue > min && hue < max;
  }
}

class Circle extends Component {
  render() {
    const { color, onSelect } = this.props;
    return (
      <div
        onClick={() => onSelect(color)}
        className="circle"
        style={{
          background: getHSL(color),
          borderColor: getHSL(darker(0.1, color)),
          boxShadow: boxShadow(brightness(0.7, color))
        }}
      />
    );
  }
}

class Selected extends Component {
  render() {
    const { color } = this.props;
    if (!color) {
      return null;
    }

    return (
      <div className="selected">
        <div
          className="swatch"
          style={{
            background: getHSL(color),
            borderColor: getHSL(darker(0.1, color)),
            boxShadow: boxShadow(getHSL(brightness(0.7, color)))
          }}
        />
        <div className="description"> {getHSL(color)}</div>
      </div>
    );
  }
}

export default class Wheel extends Component {
  state = {
    primary: {
      hue: 120,
      saturation: 0.5,
      brightness: 0.5
    },
    selected: null
  };

  componentDidMount() {
    this.incrementColor = this.incrementColor.bind(this);
    this.onSelect = this.onSelect.bind(this);
    setInterval(this.incrementColor, 200);
  }

  incrementColor() {
    this.setState({
      primary: updateColor(this.state.primary)
    });
  }

  onSelect(color) {
    this.setState({ selected: color });
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title" onClick={this.props.goBack}>
            Magic Wheel
          </h1>
        </header>
        <Circle color={this.state.primary} onSelect={this.onSelect} />
        <Selected color={this.state.selected} />
      </div>
    );
  }
}
