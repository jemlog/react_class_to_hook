import React from "react";
import Habit from "./habit";
import HabitForm from "./habitForm";
const habits = (props) => {
  return (
    <>
      <HabitForm onAdd={props.onAdd} />
      <ul>
        {props.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={props.onIncrement}
            onDecrement={props.onDecrement}
            onDelete={props.onDelete}
          />
        ))}
      </ul>
      <button onClick={props.onReset}>all reset</button>
    </>
  );
};

export default habits;
