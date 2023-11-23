import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { removeTodo } from "../redux/modules/todos";
import styled from "styled-components";

export default function Detail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams().id;
  const todos = useSelector((state) => state.todos);
  const foundData = todos.find((item) => item.id === params);

  const DetailRemoveButton = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <DetailWarpper>
      <h3>제목 :{foundData.title}</h3>
      <h5>내용 :{foundData.contents}</h5>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        이전
      </button>
      <button
        onClick={() => {
          DetailRemoveButton(foundData.id);
          navigate("/");
        }}
      >
        삭제
      </button>
    </DetailWarpper>
  );
}

const DetailWarpper = styled.div`
  background-color: salmon;
  padding: 10px;
`;
