import React, { Component } from "react";
import { Header } from "./Header";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { TodoSearch } from "./TodoSearch";
import { TodoFilters } from "./TodoFilters";

class App extends Component {
  state = {
    items: [
      { id: 1, label: "First todo", done: true },
      { id: 2, label: "Second todo", done: true },
      { id: 3, label: "Third todo", done: false },
    ],
    search: "",
    filter: "all",
  };

  idCounter = 100;

  createItem = (label: String) => {
    return {
      id: ++this.idCounter,
      label,
      done: false,
    };
  };

  handleItemAdd = (label: String) => {
    this.setState((prevState) => {
      const newItem: any = this.createItem(label);
      const items: any = [...prevState.items, newItem];

      return { items };
    });
  };

  handleItemDelete = (id: Number) => {
    this.setState((prevState) => {
      const itemIndex = prevState.items.findIndex((item) => item.id === id);
      const items = [
        ...prevState.items.slice(0, itemIndex),
        ...prevState.items.slice(itemIndex + 1),
      ];
      console.log(this);
      return { items };
    });
  };

  handleToggleDone = (id: Number) => {
    this.setState((prevState) => {
      const itemIndex = prevState.items.findIndex((item) => item.id === id);
      const oldItem = prevState.items[itemIndex];
      const newValue = !oldItem.done;
      const changedItem = { ...oldItem, done: newValue };
      const items = [
        ...prevState.items.slice(0, itemIndex),
        changedItem,
        ...prevState.items.slice(itemIndex + 1),
      ];
      return { items };
    });
  };

  handleSearchChange = (search: string) => {
    this.setState({ search });
  };

  handleFilterChange = (filter: boolean) => {
    this.setState({ filter });
  };

  searchItems = (items, search) => {
    return items.filter(({ label }) =>
      label.toLowerCase().includes(search.toLowerCase())
    );
  };

  filterItems = (items, filter) => {
    switch (filter) {
      case "all":
        return items;
      case "done":
        return items.filter(({ done }) => done);
      case "active":
        return items.filter(({ done }) => !done);
      default:
        return items;
    }
  };

  render() {
    const { items, search, filter } = this.state;
    const doneItemsCount = items.filter(({ done }) => done).length;
    const activeItemsCount = items.length - doneItemsCount;
    const visibleItems = this.searchItems(
      this.filterItems(items, filter),
      search
    );
    return (
      <div>
        <Header done={doneItemsCount} active={activeItemsCount} />
        <TodoSearch onSearchChange={this.handleSearchChange} />
        <TodoAdd onItemAdd={this.handleItemAdd} />
        <TodoFilters onFilterChange={this.handleFilterChange} filter={filter} />
        <TodoList
          items={visibleItems}
          onItemDelete={this.handleItemDelete}
          onToggleDone={this.handleToggleDone}
        />
      </div>
    );
  }
}

export default App;
