import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { emojis, cycleItems } from "./utils/emojis";

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

class UnorderedList extends React.Component {
  render() {
    const { items, highlight } = this.props;
    return (
      <ul>
        {items.map((item, i) => (
          <ListItem theme="light" item={item} index={i} highlight={highlight} />
        ))}
      </ul>
    );
  }
}

class Game extends React.Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

/* the main page for the index route of this app */
class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h1>Friends of DevTools!</h1>
        <Game>
          <UnorderedList items={emojis} highlight={this.state.highlight} />
          <button onClick={this.onSortClick}>Cycle</button>
        </Game>
      </div>
    );
  }
}

class App extends Component {
  state = {
    highlight: 0
  };

  onSortClick = () => {
    this.setState({
      highlight: cycleItems(this.state.highlight, emojis)
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Friends of DevTools</h1>
        </header>

        <UnorderedList items={emojis} highlight={this.state.highlight} />
        <button onClick={this.onSortClick}>Cycle</button>
      </div>
    );
  }
}

export default App;
