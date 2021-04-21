import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IntroImg, VideoLink } from '~/components';
import { IntroImgBox } from '../atoms/IntroImg';
import { VideoBox } from '../atoms/VideoLink';

interface IFade {
  intro: string;
  video: string[];
}

export const FadeInOutBox: React.FC<IFade> = ({ intro, video }) => {
  const [showIdx, setShowIdx] = useState<number>(0);

  useEffect(() => {
    const initialHidden: NodeJS.Timeout = setTimeout(() => {
      setShowIdx(showIdx === 0 ? 1 : 0);
    }, 10000);
    return () => clearTimeout(initialHidden);
  }, [showIdx]);

  return (
    <FadeContainer show={showIdx}>
      <IntroImg intro={intro} />
      <VideoLink video={video} />
    </FadeContainer>
  );
};

const FadeContainer = styled.div<{ show: number }>`
  ${IntroImgBox} {
    opacity: ${props => (props.show === 0 ? 1 : 0)};
    visibility: ${props => (props.show === 0 ? 'visible' : 'hidden')};
    transition: all 1s;
  }
  ${VideoBox} {
    opacity: ${props => (props.show === 1 ? 1 : 0)};
    visibility: ${props => (props.show === 0 ? 'hidden' : 'visible')};
    transition: all 1s;
  }
`;
