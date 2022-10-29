import styled from "styled-components";
import EmptyBoards from "./EmptyBoards";

const Wrap = styled.div`
  width: 935px;
  display: flex;
  justify-content: center;
`;

const MyBoards = () => {
  const test = [];
  return (
    <Wrap>
      {!test.length ? <EmptyBoards/> : null}
    </Wrap>
  )
}

export default MyBoards;