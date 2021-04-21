import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function imgcarousel() {
  let carousel: any = '';
  let index: any = 0;
  const [Width, setWidth] = useState(44);
  let screenWidth: any = 0;
  useEffect(() => {
    carousel = document.querySelector('.carousel');
  });

  const prevBtn = () => {
    if (index === 0) return;
    index -= 1;

    carousel.style.transform = `translate3d(-${Width * index}vw, 0, 0)`;
  };

  const nextBtn = () => {
    if (index === 1) return;
    index += 1;

    carousel.style.transform = `translate3d(-${Width * index}vw, 0, 0)`;
  };

  window.onresize = function () {
    screenWidth = screen.availWidth !== 330 ? '44' : '86';
    setWidth(screenWidth);
  };

  return (
    <>
      <Box>
        <Carousel className='carousel'>
          <img src='http://demer.lottecastle.co.kr/m/resources/img/sub/m_overview_view2.jpg' />
          <img src='http://demer.lottecastle.co.kr/m/resources/img/sub/m_overview_view1.jpg' />
        </Carousel>
        <Btnbox>
          <CarouselBtn className='prev' onClick={prevBtn}>
            ＜
          </CarouselBtn>
          <CarouselBtn className='next' onClick={nextBtn}>
            ＞
          </CarouselBtn>
        </Btnbox>
      </Box>
    </>
  );
}

export default imgcarousel;

const Box = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
`;

const Carousel = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 200px;
  background-color: rgb(213, 213, 213);
  transition: transform 0.2s;

  img {
    width: 44vw;
  }
`;

const CarouselBtn = styled.button`
  border-style: none;
  width: 22px;
  background-color: white;
  outline: none;
  cursor: pointer;
`;

const Btnbox = styled.div`
  position: absolute;
  width: 60px;
  right: 0px;
  bottom: 30px;
  opacity: 0.5;
  outline: none;
`;
