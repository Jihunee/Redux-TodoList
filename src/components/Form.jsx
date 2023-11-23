import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../redux/modules/todos";

export default function Form() {
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  return (
    <FormWarpper>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (title === "") {
            alert("제목을 입력해주세요");
            return false;
          } else if (contents === "") {
            alert("내용을 입력해주세요");
            return false;
          }
          const newTodo = {
            id: todos.length + 1,
            title,
            contents,
          };
          dispatch(addTodo(newTodo));
          setTitle("");
          setContents("");
        }}
      >
        제목 :{" "}
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
        />
        내용 :{" "}
        <input
          value={contents}
          onChange={(e) => setContents(e.target.value)}
          type="text"
        />
        <button type="submit">추가</button>
      </form>
    </FormWarpper>
  );
}

const FormWarpper = styled.div`
  background-color: salmon;
  padding: 5px;
`;
