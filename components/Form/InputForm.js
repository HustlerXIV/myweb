import React, { useState } from "react";
import styled from "styled-components";

export default function InputForm({
  label,
  placeholder,
  name,
  id,
  error,
  setForm,
}) {
  const [value, setValue] = useState("");
  const handleOnChange = (e) => {
    setValue(e.target.value);
    setForm(e.target.value);
  };

  return (
    <Container>
      <label className="text-white">{label}</label>
      <Input
        type="text"
        id={id}
        value={value}
        name={name}
        onChange={handleOnChange}
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
