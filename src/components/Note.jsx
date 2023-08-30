import DeleteIcon from "@mui/icons-material/Delete";

export default function Note({ title, content, todos, setTodos, todo }) {
  function handleDel(id) {
    setTodos(todos.filter((item) => item.id !== id));
  }
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => handleDel(todo.id)}>
        <DeleteIcon />
      </button>
    </div>
  );
}
