import { useOutletContext } from "react-router-dom";
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
const FirImg = styled.img`
  width: 100%;
  height: 100%;
`;

const MyBoards = () => {
  const { data } = useOutletContext();
  // const { isLoading, data } = useQuery();
  return (
    <>
      {!data?.length ? 
        <WrapOne>
          <EmptyBoards/>
        </WrapOne> 
        :
        <WrapTwo>
          {data.map((prop,index)=>
            <Board key={index}>
              <FirImg src={prop.postImgUrl[0]}/>
            </Board>
          )}
        </WrapTwo>
      }
    </>
  )
}

export default MyBoards;