import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  MainSection,
  ThumbGrid,
  ThumbProvider,
} from '~/components/Main/templates';
import { ContentTitle } from './atoms';
import { IntroImg, IntroVideo } from './modules';
import { SlideContainer } from './modules/SlideContainer';
import { ModalContainer } from './templates/ModalContainer';

export const Main = () => {
  interface IMainData {
    [key: string]: any;
  }
  const [mainData, setMainData] = useState<IMainData>({});

  useEffect(() => {
    fetch('data/MainData.json')
      .then(res => res.json())
      .then(res => setMainData(res));
  }, []);

  const sectionList: string[] = Object.keys(mainData);

  return (
    <MainContainer>
      {sectionList.length !== 0 &&
        sectionList.map((content, index) => {
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
    </MainContainer>
  );
};

const MainContainer = styled.main`
  position: relative;
  height: auto;
  background: #e9e9e9;
`;
