import { useQuery } from "react-query";
import styled from "styled-components";
import EmptyBoards from "./EmptyBoards";

const WrapOne = styled.div`
  width: 935px;
  display: flex;
  justify-content: center;
`;
const WrapTwo = styled.div`
  width: 935px;
  display: flex;
  justify-content: center;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;
const Board = styled.div`
  width: 290px;
  height: 290px;
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MyBoards = () => {
  const test = [];
  // const { isLoading, data } = useQuery();
  return (
    <>
      {!test.length ? 
        <WrapOne>
          <EmptyBoards/>
        </WrapOne> 
        :
        <WrapTwo>
          {test.map((prop,index)=>
            <Board key={index}>
              {prop}
            </Board>
          )}
        </WrapTwo>
      }
    </>
  )
}

export default MyBoards;