import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InpuTodo";
import { ImcompleteTodo } from "./components/ImcompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [imcompleteTodos, setImcompleteTodos] = useState([]);
  const [completeTodos, setcompleteTodos] = useState([]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...imcompleteTodos, todoText];
    setImcompleteTodos(newTodos);
    setTodoText("");
  };
  const onClickDelete = (index) => {
    const newTodos = [...imcompleteTodos];
    newTodos.splice(index, 1);
    setImcompleteTodos(newTodos);
    //alert(index);
  };
  const onClickComplete = (index) => {
    //alert(index);
    const newImcompleteTodos = [...imcompleteTodos];
    newImcompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, imcompleteTodos[index]];

    setImcompleteTodos(newImcompleteTodos);
    setcompleteTodos(newCompleteTodos);
  };
  const onClickBack = (index) => {
    //alert(index);
    const newImcompleteTodos = [...imcompleteTodos, completeTodos[index]];
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    setImcompleteTodos(newImcompleteTodos);
    setcompleteTodos(newCompleteTodos);
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={imcompleteTodos.length >= 3}
      />
      {imcompleteTodos.length >= 3 && (
        <p style={{ color: "red" }}>登録できるToDoは3つまでです。</p>
      )}
      <ImcompleteTodo
        imcompleteTodos={imcompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodo completeTodos={completeTodos} onClick={onClickBack} />
    </>
  );
};
