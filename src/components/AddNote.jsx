import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function AddNote({ todos, setTodos }) {
  const [value, setValue] = useState({ title: "", content: "" });
  const [expand, setExpand] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // Add the note to the array of notes
    setTodos(
      value.content === "" && value.title === ""
        ? [...todos]
        : [...todos, { note: value, id: crypto.randomUUID() }]
    );
    setValue({ title: "", content: "" });
    setExpand(false);
  }

  function handleExpand() {
    setExpand(true); // here had to pass true, bcz '!expand' would result in collapse of the textarea when clicked again
  }

  return (
    <form action="" onSubmit={handleSubmit} className="create-note">
      <label htmlFor="heading"></label>
      {/* Initially the note will only show the textarea of 1 line */}
      {expand && (
        <input
          name="heading"
          type="text"
          id="heading"
          placeholder="Add title"
          value={value.title}
          onChange={(e) => setValue({ ...value, title: e.target.value })}
        />
      )}
      <label htmlFor="content"></label>
      <textarea
        name="content"
        id="content"
        cols="30"
        rows={expand ? "5" : "1"}
        placeholder="Take a note..."
        value={value.content}
        onChange={(e) => setValue({ ...value, content: e.target.value })}
        onClick={handleExpand}
      ></textarea>
      {expand && (
        <Zoom in={true}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      )}
    </form>
  );
}

export default AddNote;
