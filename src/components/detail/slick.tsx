import React, { useEffect } from 'react';
import styled from 'styled-components';

function slick() {
  let slider: any = '';
  let leftValue: any = 0;
  let clickval: any = 0;

  useEffect(() => {
    slider = document.querySelector('ul');
  }, []);

  const ondrag = (event: React.DragEvent<HTMLUListElement>) => {
    if (event.pageX === clickval) {
      slider.style.left = leftValue;
    }
    if (event.pageX !== 0) {
      slider.style.left = event.pageX - clickval - 180 + 'px';
      leftValue = slider.style.left;
    }
  };

  const ondragend = () => {
    slider.style.left = leftValue + 'px';
    if (slider.style.left.split('px')[0] > 25) {
      slider.style.left = 0 + 'px';
      return;
    }
    if (slider.style.left.split('px')[0] < -310) {
      slider.style.left = 0 + 'px';
      return;
    }
  };

  const clickposition = (e: React.DragEvent<HTMLUListElement>) => {
    clickval = e.pageX - 180;
  };

  return (
    <>
      <ImgSlide
        onDrag={ondrag}
        onDragEnd={ondragend}
        onMouseDown={clickposition}
      >
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
          <img src='http://demer.lottecastle.co.kr/m/resources/img/sub/m_map.png'></img>
        </li>
        <li>
          <img src='http://demer.lottecastle.co.kr/m/resources/img/sub/m_overview_view1.jpg'></img>
        </li>
        <li>
          <img src='http://demer.lottecastle.co.kr/m/resources/img/sub/m_overview_view1.jpg'></img>
        </li>
      </ImgSlide>
    </>
  );
}

export default slick;

const ImgSlide = styled.ul`
  position: relative;
  justify-content: left;
  /* left: 200px; */
  display: flex;
  width: 100%;
  list-style: none;
  margin-top: 100px;
  width: 900px;

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
