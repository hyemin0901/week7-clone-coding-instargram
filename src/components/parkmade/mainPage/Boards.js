import { useQuery } from "react-query";
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

const Boards = ({setIsDeleteModalOpen}) => {
  const test = [1,2,3,4,5,6]
  // const { isLoading, data } = useQuery();
  return (
    <Wrap>
      <Div>
        {test.map((prop,index) => <Board setIsDeleteModalOpen={setIsDeleteModalOpen} key={index}/>)}
      </Div>
    </Wrap>
  );
}

export default Boards;