import React, { Component } from "react";
import { emojis, cycleItems } from "./utils/emojis";

import "./index.css";

const styles = {
  background: {
    light: {
      primary: "white",
      secondary: "grey"
    },
    dark: {
      primary: "blue",
      secondary: "grey"
    }
  },
  padding: {
    small: "2px",
    medium: "4px"
  },
  size: {
    small: {}
  }
};

class ListItem extends Component {
  render() {
    const { index, item, highlight, theme } = this.props;
    return (
      <li
        styles={{ backgroundColor: styles.background[theme].primary }}
        key={index}
        className={index === highlight ? "highlighted" : null}
      >
        {item}
      </li>
    );
  }
}

class UnorderedList extends Component {
  render() {
    const { items, highlight } = this.props;
    return (
      <ul>
        {items.map((item, i) => (
          <ListItem
            key={i}
            theme="light"
            item={item}
            index={i}
            highlight={highlight}
          />
        ))}
      </ul>
    );
  }
}

export default class Friends extends Component {
  state = {
    highlight: 0
  };

  onSortClick() {
    this.setState({
      highlight: cycleItems(this.state.highlight, emojis)
    });
  }

  render() {
    return (
      <div className="hams">
        <header className="App-header">
          <h1 className="App-title" onClick={this.props.goBack}>
            Friends of DevTools
          </h1>
        </header>
        <UnorderedList items={emojis} highlight={this.state.highlight} />
        <button onClick={() => this.onSortClick()}>Cycle</button>
      </div>
    );
  }
}
