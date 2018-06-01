import React, { Component } from "react";
import Friends from "./friends";
import Wheel from "./wheel";
import Search from "./search";
import Pulls from "./pulls";
import "./App.css";

class App extends Component {
  state = {
    app: "wheel"
  };

  constructor(props) {
    super(props);
    this.onAppClick = this.onAppClick.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  onAppClick(e) {
    const { target } = e;
    this.setState({
      app: target.attributes.app.value
    });
  }

  goBack() {
    this.setState({ app: null });
  }

  renderList() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Time Travel</h1>
        </header>
        <div className="list">
          <a onClick={this.onAppClick} app="friends">
            Friends of DevTools
          </a>
          <a onClick={this.onAppClick} app="wheel">
            Magic Wheel
          </a>
          <a onClick={this.onAppClick} app="search">
            Search
          </a>

          <a onClick={this.onAppClick} app="pulls">
            Github
          </a>
        </div>
      </div>
    );
  }

  renderApp() {
    if (this.state.app == "friends") {
      return <Friends goBack={this.goBack} />;
    }

    if (this.state.app == "wheel") {
      return <Wheel goBack={this.goBack} />;
    }

    if (this.state.app == "search") {
      return <Search goBack={this.goBack} />;
    }

    if (this.state.app == "pulls") {
      return <Pulls goBack={this.goBack} />;
    }
  }

  render() {
    return (
      <div className={`App ${this.state.app}`}>
        {this.state.app ? this.renderApp() : this.renderList()}
      </div>
    );
  }
}

export default App;
