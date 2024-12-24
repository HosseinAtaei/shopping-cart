import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);
  function inc() {
    setCount(count + 1);
  }

  function dec() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <button className="p-1 rounded-l-lg bg-rose-500 text-xl" onClick={dec}>
        -
      </button>
      <span className="bg-slate-100 p-2">{count}</span>
      <button className="p-1 rounded-r-lg bg-green-300 text-xl" onClick={inc}>
        +
      </button>
    </div>
  );
};

export default Counter;
