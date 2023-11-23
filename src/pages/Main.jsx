import React from "react";
import Heaeder from "../components/Heaeder";
import Form from "../components/Form";
import Todolist from "../components/Todolist";

export default function Main() {
  return (
    <>
      <Heaeder />
      <Form />
      <Todolist isDone={false} />
      <Todolist isDone={true} />
    </>
  );
}
