import "./App.css";

import React, { useCallback, useState } from "react";
import Navbar from "./components/navbar";
import Habits from "./components/habits";

const App = () => {
  const [habits, setHabits] = useState([
    { id: 1, name: "jemin", count: 0 },
    { id: 2, name: "jaehyon", count: 0 },
    { id: 3, name: "jiwon", count: 0 },
  ]);

  const handleIncrement = useCallback((habit) => {
    const items = habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    setHabits(items);
  });

  const handleDecrement = useCallback((habit) => {
    const items = habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    setHabits(items);
  });

  const handleDelete = useCallback((habit) => {
    const items = habits.filter((item) => item.id !== habit.id);
    setHabits(items);
  });

  const handleAdd = (name) => {
    const items = [{ id: Date.now(), name, count: 0 }, ...habits];
    setHabits(items);
  };

  return (
    <>
      <Navbar />
      <Habits
        habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onAdd={handleAdd}
      />
    </>
  );
};

export default App;
