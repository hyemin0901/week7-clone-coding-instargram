import { Link, Outlet, useLocation, useMatch, useParams } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const UpperDiv = styled.div`
  width: 935px;
  margin-bottom: 44px;

  @media screen and (max-width: 935px) {
    align-items:flex-end;
  }
`;
const UpperSelectorDiv = styled.div`
  width: 935px;
  height: 52px;
  border-top: 1px solid rgb(219, 219, 219);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SelectorDiv = styled.div`
  width: 57px;
  height: 52px;
  margin-right: ${prop=>prop.marginRight};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: rgb(142, 142, 142);
`;
const SelectorSpan = styled.span`
  margin-left: 6px;
`;

const Selector = ({data}) => {
  const nowLocation = useLocation().pathname;
  const { id } = useParams();
  return (
    <Wrap>
      <UpperDiv>
        <UpperSelectorDiv>
          {/* 선택시 color = #262626, 아닐떄는 color = #8e8e8e */}
          <SelectorDiv marginRight="60px">
            <Link to="" style={{textDecoration:"none", color:`${nowLocation === `/my-profile/${id}` ? "#262626" : "#8e8e8e"}`}}>
              <svg aria-label="" color={nowLocation === `/my-profile/${id}` ? "#262626" : "#8e8e8e"} fill={nowLocation === `/my-profile/${id}` ? "#262626" : "#8e8e8e"} height="12" role="img" viewBox="0 0 24 24" width="12">
                <rect fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="3"></rect>
                <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="9.015" x2="9.015" y1="3" y2="21"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="14.985" x2="14.985" y1="3" y2="21"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="9.015" y2="9.015"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="14.985" y2="14.985"></line>
              </svg>
              <SelectorSpan>
                게시물
              </SelectorSpan>
            </Link>
          </SelectorDiv>
          <SelectorDiv marginRight="60px">
            <Link to="saved" style={{textDecoration:"none", color:`${nowLocation === `/my-profile/${id}/saved` ? "#262626" : "#8e8e8e"}`}}>
              <svg aria-label="" color={nowLocation === `/my-profile/${id}/saved` ? "#262626" : "#8e8e8e"} fill={nowLocation === `/my-profile/${id}/saved` ? "#262626" : "#8e8e8e"} height="12" role="img" viewBox="0 0 24 24" width="12">
                <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon>
              </svg>
              <SelectorSpan>
                저장됨
              </SelectorSpan>
            </Link>
          </SelectorDiv>
          <SelectorDiv>
            <Link to="tagged" style={{textDecoration:"none", color:`${nowLocation === `/my-profile/${id}/tagged` ? "#262626" : "#8e8e8e"}`}}>
              <svg aria-label="" color={nowLocation === `/my-profile/${id}/tagged` ? "#262626" : "#8e8e8e"} fill={nowLocation === `/my-profile/${id}/tagged` ? "#262626" : "#8e8e8e"} height="12" role="img" viewBox="0 0 24 24" width="12">
                <path d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                <path d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                <circle cx="12.072" cy="11.075" fill="none" r="3.556" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle>
              </svg>
              <SelectorSpan>
                태그됨
              </SelectorSpan>
            </Link>
          </SelectorDiv>
        </UpperSelectorDiv>
        <Outlet context={{data}}/>
      </UpperDiv>
    </Wrap>
  );
}

export default Selector;

// 아웃렛으로 들어감