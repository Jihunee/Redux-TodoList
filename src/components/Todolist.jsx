import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { removeTodo, switchTodo } from "../redux/modules/todos";
import { useNavigate } from "react-router-dom";

export default function Todolist({ isDone }) {
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const switcButton = (id) => {
    dispatch(switchTodo(id));
  };

  const removeButton = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <>
      <ListWarpper>
        <h3>{isDone ? "완료한 일" : "해야할 일"}</h3>
        {todos
          .filter((item) => item.isDone === !isDone)
          .map((item) => {
            return (
              <Card key={item.id}>
                <h4>{item.title}</h4>
                <p>{item.contents}</p>
                <button onClick={() => switcButton(item.id)}>
                  {isDone ? "취소" : "완료"}
                </button>
                <button onClick={() => removeButton(item.id)}>삭제</button>
                <button onClick={navigate(`/${item.id}`)}>상세보기</button>
              </Card>
            );
          })}
      </ListWarpper>
    </>
  );
}

const ListWarpper = styled.div`
  background-color: beige;
`;

const Card = styled.div`
  background-color: burlywood;
  padding: 10px;
  margin: 10px;
`;
