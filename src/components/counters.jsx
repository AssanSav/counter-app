import React, { Component } from "react";
import Counter from "./counter";

const Counters = ({ counters, onDelete, onIncrement, onDecrement, onReset }) => {
  return (
    <>
      <button
        className="btn btn-primary btn-sm mt-2"
        onClick={() => onReset()}
      >
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onDelete={onDelete}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        >
          <h4>Id {counter.id}</h4>
        </Counter>
      ))}
    </>
  );
};

export default Counters;
