import React, { useState, useEffect } from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["あああ", "いいい"]);

  return (
    <>
      <div className="input-area">
        <input placeholder="Todoを追加" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTodo</p>
        <ul>
          <div className="list-row">
            <li>unkonow</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTodo</p>
        <ul>
          <div className="list-row">
            <li>unkonow</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
