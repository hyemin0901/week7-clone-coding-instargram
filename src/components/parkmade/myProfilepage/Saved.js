import styled from "styled-components";

const Wrap = styled.div`
  width: 935px;
  display: flex;
  justify-content: center;
`;

const Saved = () => {
  return (
    <Wrap>
      <h1>this component(저장됨) is skip</h1>
    </Wrap>
  )
}

export default Saved;