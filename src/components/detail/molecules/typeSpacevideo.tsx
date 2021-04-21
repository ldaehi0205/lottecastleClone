import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  index: number;
}

const typeSpacevideo: React.FC<Props> = () => {
  const [num, setnum] = useState(0);
  let btncolor = Array(10).fill(false);

  const handlebtnClr = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const newBtnClr: boolean[] = Array(10).fill(false);
    newBtnClr[e.currentTarget.value] = true;
    btncolor = newBtnClr;
    setnum(btncolor.indexOf(true));
  };

  return (
    <Box>
      <Ulstyle>
        {btnList.map((value: any, index: number): any => {
          return (
            <BtnList onClick={handlebtnClr} value={index} key={index} num={num}>
              {value.text}
            </BtnList>
          );
        })}
      </Ulstyle>
      <SpaceVideo>
        <iframe
          src={(function () {
            if (num === 0) {
              return 'https://www.youtube.com/embed/GDeqTPkIIS8';
            }
            if (num === 1) {
              return 'https://www.youtube.com/embed/wDfqXR_5yyQ';
            }
            if (num === 2) {
              return 'https://www.youtube.com/embed/9vBpPepVs-U';
            }
          })()}
        />
      </SpaceVideo>
    </Box>
  );
};

export default typeSpacevideo;

const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

const Ulstyle = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 380px;
  padding: 0;
  margin: 50px auto 20px;
  flex-wrap: wrap;
`;

const BtnList = styled.li<{ num: number }>`
  display: flex;
  justify-content: center;
  width: 116px;
  height: 32px;
  padding: 0.4rem 0;
  margin-bottom: 10px;
  border: 1px solid #8d6f4b;
  border-radius: 1.2rem;
  color: ${props => (props.value === props.num ? 'white' : '#8d6f4b')};
  background-color: ${props => props.value === props.num && '#8d6f4b'};
  font-size: 14px;
  cursor: pointer;
`;

const SpaceVideo = styled.div`
  margin: auto;

  iframe {
    width: 492px;
    height: 500px;
  }
`;

const btnList = [
  { id: 0, text: '45A' },
  { id: 1, text: '71B' },
  { id: 2, text: '90A' },
];
