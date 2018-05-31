import React, { Component } from "react";
import Hams from "./hams";
import Wheel from "./wheel";
import Func from "./func";
import "./App.css";

class App extends Component {
  state = {
    app: "func"
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
          <div onClick={this.onAppClick} app="hams">
            Friends of DevTools
          </div>
          <div onClick={this.onAppClick} app="wheel">
            Magic Wheel
          </div>
        </div>
      </div>
    );
  }

  renderApp() {
    if (this.state.app == "hams") {
      return <Hams goBack={this.goBack} />;
    }

    if (this.state.app == "wheel") {
      return <Wheel goBack={this.goBack} />;
    }

    if (this.state.app == "func") {
      return <Func goBack={this.goBack} />;
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
