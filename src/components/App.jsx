import { useEffect, useState } from "react";
import "../styles/app.css";
import AddNote from "./AddNote";
import Footer from "./Footer";
import Header from "./Header";
import NoteRendering from "./NoteRendering";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("items");
    if (localValue === null) return [];
    return JSON.parse(localValue);
  });
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(todos));
  }, [todos]);
  // const [todos, setTodos] = useState([]);
  return (
    <>
      <Header />
      <AddNote todos={todos} setTodos={setTodos} />
      <NoteRendering todos={todos} setTodos={setTodos} />
      <Footer />
    </>
  );
}
