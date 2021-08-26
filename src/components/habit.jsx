import React, { useCallback } from "react";

const Habit = (props) => {
  const { name, count } = props.habit;

  const handleIncrement = useCallback(() => {
    props.onIncrement(props.habit);
  });

  const handleDecrement = useCallback(() => {
    props.onDecrement(props.habit);
  });

  const handleDelete = useCallback(() => {
    props.onDelete(props.habit);
  });

  return (
    <li>
      <span>{name}</span>
      <span>{count}</span>
      <button onClick={handleIncrement}>
        <i class="fas fa-plus-circle"></i>
      </button>
      <button onClick={handleDecrement}>
        <i class="fas fa-minus-circle"></i>
      </button>
      <button onClick={handleDelete}>
        <i class="fas fa-trash"></i>
      </button>
    </li>
  );
};
export default Habit;
