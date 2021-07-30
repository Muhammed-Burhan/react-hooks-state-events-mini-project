import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [category, setCategory] = useState("All");
  const [data, setData] = useState(TASKS);

  function onTaskFormSubmit(newData) {
    setData([...data, newData]);
    console.log(data);
  }
  function Deletion(deleteText) {
    setData(data.filter((data) => data.text !== deleteText));
  }
  const visibleTasks = data.filter(
    (task) => category === "All" || task.category === category
  );
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        category={category}
        onSelectCategory={setCategory}
      />
      <NewTaskForm
        categories={CATEGORIES.filter((cat) => cat !== "All")}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={visibleTasks} forDelete={Deletion} />
    </div>
  );
}

export default App;
