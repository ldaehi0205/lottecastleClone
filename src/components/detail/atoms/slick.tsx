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
        {SlickImg.map((value: any, index: number) => {
          return (
            <li key={index}>
              <img src={value.imgurl} />
            </li>
          );
        })}
      </ImgSlide>
    </>
  );
}

export default slick;

const ImgSlide = styled.ul`
  position: relative;
  display: flex;
  justify-content: left;
  width: 900px;
  margin-top: 100px;
  list-style: none;

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

const SlickImg = [
  {
    id: 0,
    imgurl:
      'http://demer.lottecastle.co.kr/m/resources/img/sub/m_overview_view1.jpg',
  },
  {
    id: 1,
    imgurl: 'http://demer.lottecastle.co.kr/m/resources/img/sub/m_layout.jpg',
  },
  {
    id: 2,
    imgurl: 'http://demer.lottecastle.co.kr/m/resources/img/sub/m_vr_con.jpg',
  },
  {
    id: 3,
    imgurl:
      'http://demer.lottecastle.co.kr/m/resources/img/sub/m_overview_view1.jpg',
  },
  {
    id: 4,
    imgurl: 'http://demer.lottecastle.co.kr/m/resources/img/sub/m_vr_con.jpg',
  },
  {
    id: 5,
    imgurl:
      'http://demer.lottecastle.co.kr/m/resources/img/sub/m_overview_view1.jpg',
  },
  {
    id: 6,
    imgurl: 'http://demer.lottecastle.co.kr/m/resources/img/sub/m_vr_con.jpg',
  },
  {
    id: 7,
    imgurl:
      'http://demer.lottecastle.co.kr/m/resources/img/sub/m_overview_view1.jpg',
  },
];
