import React from "react";
import Task from "./Task";
function TaskList({ tasks, forDelete }) {
  const taskList = tasks.map((tasky, index) => {
    return (
      <Task
        key={index}
        text={tasky.text}
        category={tasky.category}
        deleteIt={forDelete}
      />
    );
  });
  return <div className="tasks">{taskList}</div>;
}

export default TaskList;
