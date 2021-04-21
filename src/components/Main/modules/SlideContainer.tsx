import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {
  DefaultImage,
  SlideBtns,
  ContentTitle,
  SlideImageClass,
  VideoLink,
} from '~/components';
import { VideoBox } from '../atoms/VideoLink';

export interface ISlide {
  auto?: boolean;
  images: Array<SlideImageClass | string>;
  title?: string;
  thumbIndex?: null | number;
  closeFunc?: boolean;
  handleClose?: () => void;
}

export const SlideContainer: React.FC<ISlide> = ({
  auto,
  title,
  images,
  thumbIndex,
  closeFunc,
  handleClose,
}) => {
  const [leftValue, setLeftValue] = useState<number>(0);
  const [moveSize, setMoveSize] = useState<number>(0);
  const [oldStamp, setOldStamp] = useState<number>(0);
  const SlideBox = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const currentStamp = Number(e.timeStamp);

    if (oldStamp === 0) setOldStamp(currentStamp);
    if (SlideBox.current && currentStamp - oldStamp >= 1000) {
      const SlideListBox = SlideBox.current.querySelector('ul') as HTMLElement;
      const clickType: string = e.currentTarget.name;
      const maxLeftValue: number = SlideBox.current.offsetWidth * images.length;
      const nowLeftValue: number =
        leftValue + (clickType === 'prev' ? moveSize : moveSize * -1);

      setLeftValue(nowLeftValue);
      setOldStamp(currentStamp);
      SlideListBox.style.transition = 'all 0.5s';

      setTimeout(() => {
        SlideListBox.style.removeProperty('transition');
        if (nowLeftValue * -1 > maxLeftValue) setLeftValue(moveSize * -1);
        else if (nowLeftValue >= 0) setLeftValue(maxLeftValue * -1);
      }, 500);
    }
  };

  useEffect(() => {
    if (SlideBox.current && thumbIndex) {
      const currentThumbPosition = leftValue + moveSize * thumbIndex * -1;
      setLeftValue(currentThumbPosition);
    }
  }, [thumbIndex]);

  useEffect(() => {
    if (SlideBox.current && auto) {
      const maxLeftValue: number = SlideBox.current.offsetWidth * images.length;
      const SlideListBox = SlideBox.current.querySelector('ul') as HTMLElement;
      SlideListBox.style.transition = 'all 0.5s';

      const autoPlay = setTimeout(() => {
        setLeftValue(leftValue - moveSize);
        if (leftValue * -1 >= maxLeftValue) {
          setTimeout(() => {
            SlideListBox.style.removeProperty('transition');
            setLeftValue(moveSize * -1);
          }, 1000);
        }
      }, 3000);

      return () => {
        clearTimeout(autoPlay);
      };
    }
  }, [leftValue]);

  const handleSliderResize = () => {
    if (SlideBox.current) {
      const nowMovesize: number = SlideBox.current.offsetWidth;
      setMoveSize(nowMovesize);
      setLeftValue(nowMovesize * -1);
    }
  };

  useEffect(() => {
    if (SlideBox.current) {
      const SlideWrap = SlideBox.current.querySelector('ul') as HTMLElement;
      const nowMoveSize = SlideWrap.offsetWidth;
      const CloneWrap = SlideWrap.cloneNode(true);
      const CloneFirst = CloneWrap.firstChild as ChildNode;
      const CloneLast = CloneWrap.lastChild as ChildNode;
      SlideWrap.append(CloneFirst);
      SlideWrap.prepend(CloneLast);

      setLeftValue(SlideBox.current.offsetWidth * -1);
      setMoveSize(nowMoveSize);

      window.addEventListener('resize', handleSliderResize);

      return () => {
        SlideWrap.removeChild(CloneFirst);
        SlideWrap.removeChild(CloneLast);
        window.removeEventListener('resize', handleSliderResize);
      };
    }
  }, []);

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
          {images.map((url: SlideImageClass | string, index: number) => {
            const urlCondition = typeof url === 'object' ? true : false;
            const {
              title,
              video,
              slide_img,
              slide_txt,
            } = url as SlideImageClass;
            const bayImage = url as string;

            return (
              <SlideListItem key={index}>
                {urlCondition ? (
                  <>
                    <TitleBox title={title}>
                      <DefaultImage
                        src={title ? title : slide_img}
                        alt='슬라이드 이미지'
                      />
                    </TitleBox>
                    {video ? (
                      <VideoLink video={video} />
                    ) : (
                      <DefaultImage src={slide_txt} alt='슬라이드 이미지' />
                    )}
                  </>
                ) : (
                  <DefaultImage src={bayImage} alt='슬라이드 이미지' />
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
`;

const SlideListItem = styled.li`
  min-width: 100%;
  ${VideoBox} {
    padding: 0 5%;
  }
`;

const TitleBox = styled.div<{ title: string }>`
  padding: ${props => (props.title ? '0 5% 8%' : '0')};
`;
