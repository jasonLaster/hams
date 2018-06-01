import React, { Component } from "react";
import "./index.css";

export default class Func extends Component {
  state = {};

  componentDidMount() {
    this.onSearch = this.onSearch.bind(this);
  }

  async onSearch() {
    const results = await fetch(
      "https://api.github.com/repos/devtools-html/debugger.html/pulls"
    ).then(r => r.json());

    console.log(results);
    this.setState({ pulls: results });
  }

  renderPull(pr) {
    return <div>{pr.title}</div>;
  }

  render() {
    const { pulls } = this.state;
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title" onClick={this.props.goBack}>
            Pull Requests
          </h1>
        </header>
        <div>
          {(pulls || []).map(this.renderPull)}
          <button onClick={this.onSearch}>Fetch</button>
        </div>
      </div>
    );
  }
}
