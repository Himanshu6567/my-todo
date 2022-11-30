import React, { FC } from "react";
import TodoItem from "./TodoItem";

type Props = {
  items: any;
  onItemDelete: any;
  onToggleDone: any;
};

export const TodoList: FC<Props> = ({ items, onItemDelete, onToggleDone }) => {
  const todoItems = items.map((item: any) => {
    const { id, ...itemProps } = item;

    return (
      <TodoItem
        key={id}
        {...itemProps}
        onDelete={() => onItemDelete(id)}
        onDone={() => onToggleDone(id)}
      />
    );
  });

  return <div>{todoItems}</div>;
};
