import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

function imgcarousel() {
  const [screenWidth, setscreenWidth] = useState(480);
  const carouselBox: any = useRef(0);
  let index: any = 0;

  useEffect(() => {
    window.onresize = () => {
      window.screen.width > 330 ? setscreenWidth(480) : setscreenWidth(280);
    };
    return window.screen.width > 330
      ? setscreenWidth(480)
      : setscreenWidth(280);
  });

  const prevBtn = () => {
    if (index === 0) return;
    index -= 1;
    carouselBox.current.style.transform = `translate3d(-${
      screenWidth * index
    }px, 0, 0)`;
  };

  const nextBtn = () => {
    if (index === 1) return;
    index += 1;
    carouselBox.current.style.transform = `translate3d(-${
      screenWidth * index
    }px, 0, 0)`;
  };

  return (
    <>
      <Box>
        <Carousel className='carouselBox' ref={carouselBox}>
          <img
            className='cauouselImg'
            src='http://demer.lottecastle.co.kr/m/resources/img/sub/m_overview_view2.jpg'
          />
          <img
            className='cauouselImg'
            src='http://demer.lottecastle.co.kr/m/resources/img/sub/m_overview_view1.jpg'
          />
        </Carousel>
        <Btnbox>
          <CarouselBtn className='prev' onClick={() => prevBtn()}>
            ＜
          </CarouselBtn>
          <CarouselBtn className='next' onClick={() => nextBtn()}>
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
  overflow: hidden;
`;

const Carousel = styled.div`
  position: relative;
  display: flex;
  width: 480px;
  background-color: rgb(213, 213, 213);
  transition: transform 0.2s;

  .cauouselImg {
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 600px) {
    width: 280px;
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
  bottom: 15px;
  opacity: 0.5;
  outline: none;
`;
