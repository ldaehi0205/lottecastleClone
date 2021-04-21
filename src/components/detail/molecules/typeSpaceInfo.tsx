import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  index: number;
}

const typeSpaceInfo: React.FC<Props> = () => {
  const [num, setnum] = useState(0);
  let btncolor = Array(10).fill(false);

  const handlebtnClr = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const newBtnClr: boolean[] = Array(10).fill(false);
    newBtnClr[e.currentTarget.value] = true;
    btncolor = newBtnClr;
    setnum(btncolor.indexOf(true));
  };

  return (
    <Space>
      <Ulstyle>
        {btnList.map((value: any, index: number): any => {
          return (
            <BtnList onClick={handlebtnClr} value={index} key={index} num={num}>
              {value.text}
            </BtnList>
          );
        })}
      </Ulstyle>
      <SpaceInfoImg>
        {num === 0 && (
          <img src='http://demer.lottecastle.co.kr/m/resources/img/sub/m_type_45a.jpg' />
        )}
        {num === 1 && (
          <img src='http://demer.lottecastle.co.kr/m/resources/img/sub/m_type_45b.jpg' />
        )}
        {num === 2 && (
          <img src='http://demer.lottecastle.co.kr/m/resources/img/sub/m_type_46a.jpg' />
        )}
        {num === 3 && (
          <img src='http://demer.lottecastle.co.kr/m/resources/img/sub/m_type_46b.jpg' />
        )}
        {num === 4 && (
          <img src='http://demer.lottecastle.co.kr/m/resources/img/sub/m_type_71a.jpg' />
        )}
        {num === 5 && (
          <img src='http://demer.lottecastle.co.kr/m/resources/img/sub/m_type_71b.jpg' />
        )}

        {num === 6 && (
          <img src='http://demer.lottecastle.co.kr/m/resources/img/sub/m_type_90a.jpg' />
        )}
        {num === 7 && (
          <img src='http://demer.lottecastle.co.kr/m/resources/img/sub/m_type_90a1.jpg' />
        )}
      </SpaceInfoImg>
      <TextBox>
        <p>
          ※ 상기 평면도는 소비자의 개략적인 이해를 돕기 위한 것으로 평면, 면적,
          마감재는 실제 공사 시 다소 변경될 수 있습니다.
        </p>
        <p>
          ※ 일부 객실은 대칭형으로도 시공되며, 호수별 조망과 일조 차이가
          상이하오니, 계약 시 호수를 필히 확인하시기 바랍니다.
        </p>
      </TextBox>
    </Space>
  );
};

export default typeSpaceInfo;

const Space = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const Ulstyle = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 0;
  margin-top: 50px;
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
const SpaceInfoImg = styled.div`
  width: 100%;
  margin-top: 20px;

  img {
    width: 100%;
  }
`;

const TextBox = styled.div`
  margin: 50px auto;

  p {
    font-size: 11px;
    text-indent: -12px;
  }
`;

const btnList = [
  { id: 0, text: '45A' },
  { id: 1, text: '45B' },
  { id: 2, text: '46A' },
  { id: 3, text: '46B / 46B-1' },
  { id: 4, text: '71A' },
  { id: 5, text: '71B' },
  { id: 6, text: '90A' },
  { id: 7, text: '90B' },
];
