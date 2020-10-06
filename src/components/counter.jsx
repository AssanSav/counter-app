import React from "react";

const Counter = ({ counter, onDelete, onIncrement, onDecrement, onReset }) => {
  const formatCount = () => {
    const { value } = counter;
    return value === 0 ? "Zero" : value;
  };

  const getBadgesClasses = () => {
    let classes = "badge mr-2 badge-";
    classes += counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  return (
    <div className="row">
      <div className="col-1">
        {/* {this.props.children} */}
        <span className={getBadgesClasses()}>{formatCount()}</span>
      </div>
      <div className="col">
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => onIncrement(counter)}
        >
          +
        </button>
        <button className="btn btn-secondary btn-sm m-2" onClick={() => onDecrement(counter)}>
          -
        </button>
        <button
          className="btn btn-danger btn-sm "
          onClick={() => onDelete(counter.id)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Counter;
