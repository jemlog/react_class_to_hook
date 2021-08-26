import React, { useRef } from "react";

const HabitForm = (props) => {
  const inputRef = useRef();
  const formRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <input ref={inputRef} type="text" placeholder="원하는 값 입력하세요" />
      <button type="submit">
        <i class="fas fa-arrow-alt-circle-up"></i>
      </button>
    </form>
  );
};

export default HabitForm;
