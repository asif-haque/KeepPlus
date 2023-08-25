import { useState } from "react";

function AddNote({ todos, setTodos }) {
  const [value, setValue] = useState({ title: "", content: "" });

  function handleSubmit(e) {
    e.preventDefault();
    // Add the note to the array of notes
    setTodos(
      value.content === "" && value.title === ""
        ? [...todos]
        : [...todos, { note: value, id: crypto.randomUUID() }]
    );
    setValue({ title: "", content: "" });
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="heading"></label>
      <input
        name="heading"
        type="text"
        id="heading"
        placeholder="Add title"
        value={value.title}
        onChange={(e) => setValue({ ...value, title: e.target.value })}
      />
      <label htmlFor="content"></label>
      <textarea
        name="content"
        id="content"
        cols="30"
        rows="5"
        placeholder="Take a note..."
        value={value.content}
        onChange={(e) => setValue({ ...value, content: e.target.value })}
      ></textarea>
      <button type="submit">Add</button>
    </form>
  );
}

export default AddNote;
