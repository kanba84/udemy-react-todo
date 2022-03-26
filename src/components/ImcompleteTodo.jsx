import React from "react";

const style = {
  backgroundColor: "#c6ffe2",
  width: "400px",
  height: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const ImcompleteTodo = (props) => {
  const { imcompleteTodos, onClickComplete, onClickDelete } = props;
  return (
    <div style={style}>
      <p className="title">未完了のTODO</p>
      <ul>
        {imcompleteTodos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
