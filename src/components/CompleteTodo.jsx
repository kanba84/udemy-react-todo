import React from "react";

const style = {
  backgroundColor: "#ffffe0",
  width: "400px",
  height: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const CompleteTodo = (props) => {
  const { completeTodos, onClick } = props;
  return (
    <div style={style}>
      <p className="title">完了したTODO</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClick(index)}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
