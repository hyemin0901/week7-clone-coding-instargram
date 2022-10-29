import styled from "styled-components";
import Board from "./Board";

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 87px;
`;
const Div = styled.div`
`;

const Boards = () => {
  const test = [1,2,3,4,5,6]
  return (
    <Wrap>
      <Div>
        {test.map((prop,index) => <Board key={index}/>)}
      </Div>
    </Wrap>
  );
}

export default Boards;