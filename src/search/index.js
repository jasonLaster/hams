import React, { Component } from "react";
import "./index.css";

function binarySearch(list, value) {
  let start = 0;
  let stop = list.length - 1;
  let middle = Math.floor((start + stop) / 2);

  while (list[middle] !== value && start < stop) {
    if (value < list[middle]) {
      stop = middle - 1;
    } else {
      start = middle + 1;
    }

    middle = Math.floor((start + stop) / 2);
  }

  if (list[middle] === value) {
    return value;
  }

  return -1;
}

export default class Search extends Component {
  onSearch() {
    const list = [2, 5, 8, 9, 13, 45, 67, 99];
    const index = binarySearch(list, 99);
  }

  render() {
    return (
      <div className="search">
        <header className="App-header">
          <h1 className="App-title" onClick={this.props.goBack}>
            Search
          </h1>
        </header>
        <div>
          <div>
            List: <div class="list">2, 5, 8, 9, 13, 45, 67, 99</div>
          </div>
          <div>
            Item: <span class="term">99</span>
          </div>
          <div className="button" onClick={this.onSearch}>
            Search
          </div>
        </div>
      </div>
    );
  }
}
