import React from "react";

export const Header = (props: any) => {
  const { done, active } = props;
  return (
    <div className="w-full py-1 bg-blue-300">
      <h1 className="text-center text-3xl">To do List</h1>
      <div className="flex justify-center text-2xl">
        <h1 className="flex">Done: {done}</h1>
        <br /> <h1>Active: {active}</h1>
      </div>
    </div>
  );
};
