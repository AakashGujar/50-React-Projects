import React, { useState } from "react";
import {
  BtnAdd,
  Container,
  DelBtn,
  ShowTaskWrap,
  SingleTask,
  TaskInput,
  TaskWrapper,
  Taskname,
  ToDoWrap,
  Wrapper,
} from "../../styles/ToDo";

const ToDo = () => {
  const [task, setTask] = useState("");
  const [array, setArray] = useState([]);

  const handleTask = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    setArray([...array, task]);
  };

  const delArray = (index) => {
    const updatedArray = [...array];
    updatedArray.splice(index, 1);
    setArray(updatedArray);
  };

  return (
    <>
      <Container>
        <Wrapper>
          <ToDoWrap>
            <TaskWrapper>
              <TaskInput
                onChange={handleTask}
                placeholder="Enter task name..."
              ></TaskInput>
              <BtnAdd onClick={addTask}>Add</BtnAdd>
            </TaskWrapper>
            <ShowTaskWrap>
              {array.map((value, index) => (
                <SingleTask key={index}>
                  <Taskname>{value}</Taskname>
                  <DelBtn onClick={()=>delArray(index)}>X</DelBtn>
                </SingleTask>
              ))}
            </ShowTaskWrap>
          </ToDoWrap>
        </Wrapper>
      </Container>
    </>
  );
};

export default ToDo;
