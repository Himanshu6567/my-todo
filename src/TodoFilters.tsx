import React, { FC } from "react";

type props = {
  onFilterChange: any;
};

export const TodoFilters: FC<props> = ({ onFilterChange }) => {
  const filtersButtons = [
    { label: "All", id: "all" },
    { label: "Done", id: "done" },
    { label: "Active", id: "active" },
  ];

  const buttons = filtersButtons.map(({ label, id }) => {
    const button = (
      <button
        className="border-2 border-green-600 w-16"
        type="button"
        key={id}
        onClick={() => onFilterChange(id)}
      >
        {label}
      </button>
    );
    return button;
  });

  return (
    <div className="flex justify-center items-center space-x-3 my-12">
      {buttons}
    </div>
  );
};
