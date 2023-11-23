import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Warpper>
      <h1>TodoList</h1>
    </Warpper>
  );
}

const Warpper = styled.div`
  background-color: blanchedalmond;
  padding: 10px;
`;
