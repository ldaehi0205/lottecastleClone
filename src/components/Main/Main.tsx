import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { withCookies, Cookies, ReactCookieProps } from 'react-cookie';
import {
  MainSection,
  ThumbGrid,
  ThumbProvider,
  PopUpWrap,
  ContentTitle,
  PopUpBox,
  SlideContainer,
  ModalContainer,
  IVideo,
  IThumb,
  FadeInOutBox,
} from '~/components';
import PopUpDC from '~/components/common/PopUpDC';

interface IMain extends IThumb {
  intro: string;
  background: string;
  slide_images: Array<SlideImageClass | string>;
  thumb_list: string[];
}

export interface SlideImageClass extends IVideo {
  slide_img: string;
  slide_txt: string;
}

const Main = (props: ReactCookieProps) => {
  const [mainData, setMainData] = useState<IMain[]>();
  const [popActive, setPopActive] = useState<boolean>(false);
  const [hasCookies, setHasCookies] = useState<boolean>(false);
  const cookies: Cookies | undefined = props.cookies;

  useEffect(() => {
    if (cookies) {
      const currentCookie: boolean | undefined = cookies.get(
        PopUpDC.COOKIE_VALUE,
      );
      if (!currentCookie) {
        setPopActive(!currentCookie);
        setHasCookies(!!currentCookie);
      } else {
        setPopActive;
      }
    }
  }, []);

  useEffect(() => {
    fetch('data/MainData.json')
      .then(res => res.json())
      .then(res => setMainData(res));
  }, []);

  const handlePop = (check: boolean | undefined): void => {
    if (cookies && check) {
      const expire: Date = new Date(Date.now() + 1000000);
      cookies.set(PopUpDC.COOKIE_VALUE, true, { path: '/', expires: expire });
    }
    setPopActive(false);
  };

  return (
    <MainContainer>
      {mainData?.map((data, index) => {
        const {
          intro,
          video,
          title,
          background,
          thumb_list,
          slide_images,
        } = data;
        return (
          <MainSection key={index} layout={index} background={background}>
            {index === 0 ? (
              <FadeInOutBox intro={intro} video={video} />
            ) : index <= 2 ? (
              <SlideContainer
                title={title}
                images={slide_images}
                auto={index === 1 ? true : false}
              />
            ) : (
              <ThumbProvider>
                <ContentTitle title={title} />
                <ThumbGrid thumb_list={thumb_list} />
                <ModalContainer images={slide_images} />
              </ThumbProvider>
            )}
          </MainSection>
        );
      })}
      {popActive && !hasCookies && (
        <PopUpWrap>
          <PopUpBox eventFunc={handlePop} />
        </PopUpWrap>
      )}
    </MainContainer>
  );
};

export default withCookies(Main);

const MainContainer = styled.main`
  position: relative;
  height: auto;
  background: #e9e9e9;
`;
