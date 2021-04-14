import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DefaultImage } from '~/components/common';

interface IIntro {
  intro: {
    image: string;
  };
}

export const IntroImg: React.FC<IIntro> = ({ intro: { image } }) => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const initialHidden: NodeJS.Timeout = setTimeout(() => {
      setHidden(true);
    }, 3000);
    return () => clearTimeout(initialHidden);
  }, []);

  return (
    <IntroImgBox hide={hidden}>
      <DefaultImage src={image} alt='배너 이미지' />
    </IntroImgBox>
  );
};

const IntroImgBox = styled.div<{ hide: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  visibility: ${props => (props.hide ? 'hidden' : 'visible')};
  opacity: ${props => (props.hide ? 0 : 1)};
  z-index: 2;
  transition: all 1s;
`;
