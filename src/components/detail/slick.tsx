import React, { useState } from 'react';
import styled from 'styled-components';

function slick() {
  const [state, setstate] = useState(-30);
  const dragev = (e: React.DragEvent<HTMLUListElement>) => {
    setstate(e.pageX);
  };

  return (
    <>
      <Box>
        <ImgSlide onDrag={dragev} state={state}>
          <li>
            <img src='http://demer.lottecastle.co.kr/m/resources/img/sub/m_overview_view1.jpg'></img>
          </li>
          <li>
            <img src='http://demer.lottecastle.co.kr/m/resources/img/sub/m_overview_view1.jpg'></img>
          </li>
          <li>
            <img src='http://demer.lottecastle.co.kr/m/resources/img/sub/m_map.png'></img>
          </li>
          <li>
            <img src='http://demer.lottecastle.co.kr/m/resources/img/sub/m_overview_view1.jpg'></img>
          </li>
          <li>
            <img src='http://demer.lottecastle.co.kr/m/resources/img/sub/m_overview_view1.jpg'></img>
          </li>
          <li>
            <img src='http://demer.lottecastle.co.kr/m/resources/img/sub/m_overview_view1.jpg'></img>
          </li>
          <li>
            <img src='http://demer.lottecastle.co.kr/m/resources/img/sub/m_overview_view1.jpg'></img>
          </li>
          <li>
            <img src='http://demer.lottecastle.co.kr/m/resources/img/sub/m_overview_view1.jpg'></img>
          </li>
        </ImgSlide>
      </Box>
    </>
  );
}

export default slick;

const Box = styled.div`
  width: 640px;
  height: 300px;
  background-color: gray;
  overflow: hidden;
  padding: 20px 5px;
`;

const ImgSlide = styled.ul<{ state: number }>`
  display: flex;
  justify-content: left;
  width: 100%;
  list-style: none;
  width: 900px;

  transform: ${props => true && `translate3d(${props.state}px, 0px, 0px)`};

  li {
    width: 90px;
    height: 90px;
    margin: 0px 10px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50px;
    }
  }
`;
