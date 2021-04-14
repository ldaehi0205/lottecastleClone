import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { DefaultImage } from '~/components/common';
import { SlideBtns, ContentTitle } from '~/components/Main/atoms';

interface ISlide {
  images: any;
  title?: string;
  thumbIndex?: null | number;
  closeFunc?: boolean;
  setThumbIndex?: any;
}

export const SlideContainer: React.FC<ISlide> = ({
  title,
  images,
  thumbIndex,
  closeFunc,
  setThumbIndex,
}) => {
  const [leftValue, setLeftValue] = useState(0);
  const [moveSize, setMoveSize] = useState(0);
  const SlideBox = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (SlideBox.current) {
      const clickType: string = e.currentTarget.name;
      const maxLeftValue: number =
        SlideBox.current.offsetWidth * images.length - 1;
      const nowLeftValue: number =
        leftValue + (clickType === 'prev' ? moveSize : moveSize * -1);
      const moveCondition =
        nowLeftValue > 0
          ? false
          : nowLeftValue * -1 > maxLeftValue
          ? false
          : true;
      moveCondition && setLeftValue(nowLeftValue);
    }
  };

  const handleClose = () => {
    setThumbIndex(null);
  };

  const handleSliderResize = () => {
    if (SlideBox.current && SlideBox.current.offsetWidth < 640) {
      const nowMovesize: number = SlideBox.current.offsetWidth;
      setMoveSize(nowMovesize);
      leftValue !== 0 && setLeftValue(0);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleSliderResize);
    return () => window.removeEventListener('resize', handleSliderResize);
  }, [leftValue]);

  useEffect(() => {
    if (SlideBox.current) {
      const nowMoveSize = SlideBox.current.offsetWidth;
      setMoveSize(nowMoveSize);
      thumbIndex && setLeftValue(nowMoveSize * thumbIndex * -1);
    }
  }, [thumbIndex]);

  return (
    <>
      {title && <ContentTitle title={title} />}
      <SlideBtns
        handleClick={handleClick}
        handleClose={handleClose}
        closeFunc={closeFunc}
      />
      <div style={{ width: '100%', overflow: 'hidden' }} ref={SlideBox}>
        <SlideListWrap leftValue={leftValue}>
          {images.map((url: any, index: number) => {
            const urlCondition = url.constructor === Object ? true : false;
            const { title, video, slide_img, slide_txt } = url;
            return (
              <SlideListItem key={index}>
                {urlCondition ? (
                  <>
                    <TitleBox title={title}>
                      <DefaultImage
                        src={title === undefined ? slide_img : title}
                        alt='슬라이드 이미지'
                      />
                    </TitleBox>
                    {video ? (
                      <VideoBox href={video.link} target='_blank'>
                        <DefaultImage src={video.image} alt='슬라이드 이미지' />
                      </VideoBox>
                    ) : (
                      <DefaultImage src={slide_txt} alt='슬라이드 이미지' />
                    )}
                  </>
                ) : (
                  <DefaultImage src={url} alt='슬라이드 이미지' />
                )}
              </SlideListItem>
            );
          })}
        </SlideListWrap>
      </div>
    </>
  );
};

const SlideListWrap = styled.ul<{ leftValue: number }>`
  display: flex;
  position: relative;
  left: ${props => props.leftValue}px;
  transition: all 0.5s;
`;

const SlideListItem = styled.li`
  min-width: 100%;
`;

const TitleBox = styled.div<{ title: string }>`
  padding: ${props => (props.title ? '0 5% 8%' : '0')};
`;
const VideoBox = styled.a`
  display: block;
  padding: 0 5%;
`;
