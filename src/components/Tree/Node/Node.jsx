import React from "react";
import styled from "styled-components";

const NodeContainer = styled.div`
  position: ${(props) => (props.firstNode ? `relative` : `absolute`)};
`;
const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid #000;
  font-size: 20px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Left = styled.div`
  position: absolute;
  left: -100px;
  top: calc(100% + 50px);
`;
const Right = styled.div`
  position: absolute;
  right: 0;
  top: calc(100% + 50px);
`;
const LeftHand = styled.div`
  border-left: 1px dashed #000;
  position: absolute;
  left: 100px;
  bottom: -18px;
  height: 84px;
  width: 0;
  transform: rotate(45deg);
`;
const RightHand = styled.div`
  border-left: 1px dashed #000;
  position: absolute;
  right: 0px;
  bottom: -18px;
  height: 84px;
  width: 0;
  transform: rotate(-45deg);
`;

function Node({ name, firstNode = false, left, right }) {
  if (name)
    return (
      <NodeContainer firstNode={firstNode}>
        <Circle>{name}</Circle>
        {left?.name && (
          <Left firstNode={firstNode}>
            <Node
              name={left.name}
              left={left?.left || false}
              right={left?.right || false}
            />
            <LeftHand />
          </Left>
        )}
        {right?.name && (
          <Right firstNode={firstNode}>
            <Node
              name={right.name}
              left={right?.left || false}
              right={right?.right || false}
            />
            <RightHand />
          </Right>
        )}
      </NodeContainer>
    );
  return <></>;
}

export default Node;
