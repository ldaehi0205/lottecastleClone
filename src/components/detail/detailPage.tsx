import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import zigbangFooter from './zigbangFooter.png';

const detailPage = () => {
  const [state, setstate] = useState([]);

  useEffect(() => {
    fetch('data/detaildata.json')
      .then(res => res.json())
      .then(res => setstate(res));
  }, []);

  return (
    <>
      {state.map(
        (value: any, index: number) =>
          index === 3 && (
            <PageCenter key={index}>
              <DetailWide>
                <DetailTitle>
                  <div className='titlebox'></div>
                  <div className='titletext'>
                    <p className='titletexttop'>{value.titletop}</p>
                    <p className='titletextbottom'>{value.titlebottom}</p>
                  </div>
                </DetailTitle>
                <DetailArticle>
                  <DetailHeader index={index}>{value.header}</DetailHeader>
                  <DetailSubHeader>
                    <div className='subHeaderOne'>{value.subHeaderOne}</div>
                    <div className='subHeaderTwo'>{value.subHeaderTwo}</div>
                  </DetailSubHeader>
                  <DetailSection index={index}>
                    {index < 2 || index > 3 ? (
                      <img src={value.img} />
                    ) : (
                      <iframe
                        width='100%'
                        height='300px'
                        src={value.video}
                        title='YouTube video player'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      ></iframe>
                    )}
                    <DetailSectionInfo>
                      <p className='sectionInfoTitle'>{value.contenttitle}</p>
                      <p className='sectionInfoContent'>{value.contentsub}</p>
                      <p className='sectionInfoTitle'>{value.contenttitle2}</p>
                      <p className='sectionInfoContent'>{value.contentsub2}</p>
                      <p className='sectionInfoTitle'>{value.contenttitle3}</p>
                      <p className='sectionInfoContent'>{value.contentsub3}</p>
                      <p className='sectionInfoTitle'>{value.contenttitle4}</p>
                      <p className='sectionInfoContent'>{value.contentsub4}</p>
                      <p className='sectionInfoTitle'>{value.contenttitle5}</p>
                      <p className='sectionInfoContent'>{value.contentsub5}</p>
                      <p className='sectionInfoTitle'>{value.contenttitle6}</p>
                      <p className='sectionInfoContent'>{value.contentsub6}</p>
                      <p className='sectionInfoTitle'>{value.contenttitle7}</p>
                      <p className='sectionInfoContent'>{value.contentsub7}</p>
                    </DetailSectionInfo>
                  </DetailSection>
                </DetailArticle>
                <Commonfooter>
                  <img src={zigbangFooter} />
                </Commonfooter>
              </DetailWide>
            </PageCenter>
          ),
      )}
    </>
  );
};

export default detailPage;

const PageCenter = styled.div`
  display: flex;
  justify-content: center;
`;

const DetailTitle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 74px;

  .titlebox {
    width: 490px;
    height: 74px;
    border: 1px solid rgb(200, 200, 200);
  }

  .titletext {
    position: absolute;
    top: 25px;
    left: 74px;
    padding-right: 20px;
    background-color: rgb(233, 233, 233);

    .titletexttop {
      color: #957a5b;
      font-weight: 300;
      margin: 10px 0 0 0;
    }

    .titletextbottom {
      font-weight: 700;
      font-size: 30px;
      margin: 10px 0 0 0;
    }
  }
`;

const DetailWide = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 640px;
  height: auto;
  padding-top: 130px;
  background-color: rgb(233, 233, 233);
`;

const DetailArticle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  width: 100%;
  align-items: center;
`;

const DetailHeader = styled.div<{ index: number }>`
  /* width: ${props => (props.index === 0 ? '180px' : '350px')}; */

  width: ${props =>
    (props.index === 0 && '180px') ||
    (props.index === 1 && '350px') ||
    (props.index === 2 && '350px')};
  font-size: 28px;
  font-weight: 300;
  margin-bottom: 50px;
  p {
    margin: 0;
  }
`;

const DetailSection = styled.div<{ index: number }>`
  width: 492px;

  img {
    width: 100%;
    height: ${props => (props.index === 4 ? '420px' : '277px')};
  }

  video {
    width: 100%;
    height: 300px;
  }
`;

const DetailSubHeader = styled.div`
  position: relative;
  bottom: 80px;
  left: -220px;

  .subHeaderOne {
    position: relative;
    top: 10px;
    left: 40px;
    padding: 5px;
    background-color: rgb(233, 233, 233);
    font-size: 20px;
    z-index: 5;
  }

  .subHeaderTwo {
    position: relative;
    left: -10px;
    width: 140px;
    padding: 10px 20px;
    border-top: 1px solid rgb(213, 213, 213);
    font-size: 24px;
    font-weight: 600;
  }
`;

const DetailSectionInfo = styled.div`
  border-left: 1px solid rgb(200, 200, 200);
  padding-left: 20px;
  margin-top: 80px;

  .sectionInfoTitle {
    margin-bottom: 3px;
    color: rgb(157, 132, 103);
    font-size: 22px;
  }

  .sectionInfoContent {
    margin-top: 3px;
    color: rgb(57, 57, 57);
    font-size: 22px;
  }
`;

const Commonfooter = styled.div`
  width: 100%;

  img {
    width: 100%;
  }
`;
