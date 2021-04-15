import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  MainSection,
  ThumbGrid,
  ThumbProvider,
  PopUpWrap,
} from '~/components/Main/templates';
import { ContentTitle } from './atoms';
import { IntroImg, IntroVideo } from './modules';
import { PopUpBox } from './modules/PopUpBox';
import { SlideContainer } from './modules/SlideContainer';
import { ModalContainer } from './templates/ModalContainer';
import { withCookies, Cookies, ReactCookieProps } from 'react-cookie';
import PopUpDC from '~/components/common/PopUpDC';

interface IMainData {
  [key: string]: any;
}
interface MainProps extends ReactCookieProps {}

const Main = (props: MainProps) => {
  const [mainData, setMainData] = useState<IMainData>({});
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
      const expire: Date = new Date(Date.now() + 10000);
      cookies.set(PopUpDC.COOKIE_VALUE, true, { path: '/', expires: expire });
    }
    setPopActive(false);
  };

  const sectionList: string[] = Object.keys(mainData);
  return (
    <MainContainer>
      {sectionList?.map((content, index) => {
        const contentData = mainData[content];
        const {
          intro,
          video,
          title,
          background,
          thumb_list,
          slide_images,
        } = contentData;
        return (
          <MainSection key={index} layout={index} background={background}>
            {index === 0 ? (
              <>
                <IntroImg intro={intro} />
                <IntroVideo video={video} />
              </>
            ) : index <= 2 ? (
              <SlideContainer title={title} images={slide_images} />
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
