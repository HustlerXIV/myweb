import React from "react";
import styled from "styled-components";

export default function InputForm({ label, placeholder, name, id, error }) {
  return (
    <Container>
      <label className="text-white">{label}</label>
      <Input
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        error={error}
      />
      {error && <HelperText className="text-alertColor">Test</HelperText>}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: ${(props) => (props.error ? "2px solid red" : "")};
`;

const HelperText = styled.div``;
