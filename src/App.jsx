import { useState } from "react";
import TextField from "./components/TextField/TextField";
import { binaryTree } from "./utils/binaryTree";
import styled from "styled-components";
import Tree from "./components/Tree/Tree";

const Container = styled.div`
  padding: 35px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

function App() {
  const [names, setNames] = useState("");
  function handleChangeNames(e) {
    const { value } = e.target;
    setNames(value);
  }
  const tree = binaryTree(names);
  return (
    <Container>
      <TextField placeholder="Type in some names with space sperating between ..." value={names} onChange={handleChangeNames} />
      <Tree tree={tree} />
    </Container>
  );
}

export default App;
