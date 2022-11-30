import React, { Component } from "react";

export class TodoSearch extends Component {
  state = {
    value: "",
  };

  handleChange = ({ target }) => {
    const { onSearchChange } = this.props;
    const value = target.value;
    this.setState({ value: " " });
    onSearchChange({ value: " " });
    console.log(`Prop data -> ${this.props}`);
  };

  render() {
    return (
      <div className="flex justify-center mt-6">
        <input
          className="w-72 h-12 border-2 px-5 border-stone-700 rounded"
          placeholder="Search"
          onChange={this.handleChange}
          value={this.state.value}
        />
      </div>
    );
  }
}
