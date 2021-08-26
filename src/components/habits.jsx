import React from "react";
import Habit from "./habit";
import HabitForm from "./habitForm";
const habits = (props) => {
  return (
    <>
      <HabitForm />
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
    </>
  );
};

export default habits;
