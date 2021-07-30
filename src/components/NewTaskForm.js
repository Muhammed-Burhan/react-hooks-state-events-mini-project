import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formData, setFormData] = useState({
    text: "",
    category: "Code",
  });

  const options = categories.map((cate) => {
    return (
      <option value={cate} key={cate}>
        {cate}
      </option>
    );
  });
  function changeHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    onTaskFormSubmit({ ...formData });
    setFormData({ text: "", category: "Code" });
  }

  return (
    <form className="new-task-form" onSubmit={submitHandler}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={changeHandler}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={formData.category}
          onChange={changeHandler}
        >
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
