import React from "react";
import styled from "styled-components";

export default function InputTextArea({ label, placeholder, name, id }) {
  return (
    <Container>
      <label className="text-white">{label}</label>
      <Input type="text" id={id} name={name} placeholder={placeholder} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const Input = styled.textarea`
  padding: 10px;
  border-radius: 5px;
  height: 100px;
`;
