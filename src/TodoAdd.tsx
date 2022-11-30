import React, { Component } from "react";

export class TodoAdd extends Component {
  state = {
    value: "",
  };

  handleChange = ({ target }) => {
    const value = target.value;
    this.setState({ value });
  };

  handleSubmit = (event: any) => {
    event.preventDefault();
    const { onItemAdd } = this.props;
    const { value } = this.state;
    if (!this.state.value) {
      return;
    }
    onItemAdd(value);
    this.setState(this.state);
    console.log(this);
  };

  render() {
    return (
      <div className="flex justify-center ">
        <form onSubmit={this.handleSubmit}>
          <input
            className="w-72 h-12 border-2 border-stone-700 px-5 rounded"
            placeholder="Add new task"
            onChange={this.handleChange}
            value={this.state.value}
          />
        </form>
      </div>
    );
  }
}
