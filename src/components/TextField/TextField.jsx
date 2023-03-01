import React from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 10px 20px;
  font-size: 24px;
  border-radius: 15px;
  border: 1px solid #ccc;
`;

function TextField({ ...rest }) {
  return <Input {...rest} />;
}

export default React.memo(TextField);
