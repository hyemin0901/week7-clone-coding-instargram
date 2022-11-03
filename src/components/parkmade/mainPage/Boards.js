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

const Boards = ({setIsDeleteModalOpen, setIsDetailOpen, data}) => {
  return (
    <Wrap>
      <Div>
        {data?.data.map((prop,index) => <Board setIsDeleteModalOpen={setIsDeleteModalOpen} setIsDetailOpen={setIsDetailOpen} key={index} data={prop}/>)}
      </Div>
    </Wrap>
  );
}

export default Boards;