import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2061cb;
  padding-inline: 15px;
`;

export const ToDoWrap = styled.div`
  width: 100%;
  max-width: 400px;
  min-height: 500px;
  background-color: white;
  border-radius: 20px;
  padding-inline: 15px;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
`;

export const TaskWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 5px;
  margin-bottom: 1rem;
`;

export const TaskInput = styled.input`
  font-size: 1rem;
  width: 100%;
  padding: 15px 20px;
  border-radius: 10px;
  border: 1px solid grey;
`;

export const BtnAdd = styled.button`
  background-color: #2061cb;
  cursor: pointer;
  color: white;
  padding: 15px 20px;
  border-radius: 10px;
`;

export const ShowTaskWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  /* overflow-y: ; */
`;

export const SingleTask = styled.div`
  background-color: #e1dfdf;
  border-radius: 10px;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Taskname = styled.p`
padding-left: 10px;
font-size: 16px;
  font-weight: 500;
`;

export const DelBtn = styled.div`
  background-color: red;
  font-weight: 800;
  color: white;
  padding: 10px 15px;
  border-radius: 10px;
  cursor: pointer;
`;
