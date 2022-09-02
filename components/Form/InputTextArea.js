import React, { useState } from "react";
import styled from "styled-components";

export default function InputTextArea({
  label,
  placeholder,
  name,
  id,
  setForm,
  type = "text",
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
        type={type}
        id={id}
        name={name}
        placeholder="Not available"
        value={value}
        disabled
        onChange={handleOnChange}
      />
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
