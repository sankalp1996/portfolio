import React, { useEffect, useState } from "react";

const Counter = () => {
  const [add, onAdd] = useState(0);
  const addOnClick = () => {
    if (add < 20) {
      onAdd(add + 1);
    }
  };
  const minOnClick = () => {
    if (add > 0) {
      onAdd(add - 1);
    }
  };
  useEffect(()=>{
   document.title="you clicked" + {add} +" times";
  //  count = count +1
  //  document.title=`you clicked  ${count} times`;
},[add]);

  return (
    <div>
      <h3>Count: {add}</h3>
      <button
        type="button"
        class="btn btn-primary m-4"
        onClick={addOnClick}
        id="add"
      >
        +
      </button>
      <button
        type="button"
        class="btn btn-primary"
        onClick={minOnClick}
        id="min"
      >
        -
      </button>
    </div>
  );
};

export default Counter;
