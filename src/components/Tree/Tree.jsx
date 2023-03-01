import React from "react";
import styled from "styled-components";
import Node from "./Node/Node";

const TreeContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 30px;
  align-items: center;
`;

function Tree({ tree }) {
  return (
    <TreeContainer>
      <Node firstNode name={tree?.[0]?.name} left={tree?.[0]?.left} right={tree?.[0]?.right} />
    </TreeContainer>
  );
}

export default React.memo(Tree);
