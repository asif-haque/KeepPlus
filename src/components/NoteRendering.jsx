import Note from "./Note";

function NoteRendering({ todos, setTodos }) {
  return todos.map((todo) => (
    <Note
      title={todo.note.title}
      content={todo.note.content}
      todos={todos}
      setTodos={setTodos}
      todo={todo}
      key={todo.id}
    />
  ));
}

export default NoteRendering;
