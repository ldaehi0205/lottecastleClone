import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import zigbangFooter from './zigbangFooter.png';
import TypeImgCarousel from './molecules/typeImgCarousel';
import TypeVideoSlick from './molecules/typeVideoSlick';
import TypeImgSummary from './molecules/typeImgSummary';
import TypeVideo from './molecules/typeVideo';
import TypeImg from './molecules/typeImg';
import TypeSpaceInfo from './molecules/typeSpaceInfo';
import TypeSpacevideo from './molecules/typeSpacevideo';
import TypeVr from './molecules/typeVr';

const detailPage = (props: any) => {
  const [detailData, setdetailData] = useState([]);
  const [checkType, setcheckType] = useState('');
  const [idIndex, setidIndex] = useState(0);

  const controlIndex = props.match.params.id;
  let indexNum: string;
  let typeProve: any;
  useEffect(() => {
    fetch('http://localhost:3000/data/detaildata.json')
      .then(res => res.json())
      .then(res => setdetailData(res));
  }, [idIndex]);

  useEffect(() => {
    indexNum = detailData[controlIndex];
    typeProve = indexNum !== undefined && Object.values(indexNum)[1];
    setcheckType(typeProve);
  }, [detailData]);

  useEffect(() => {
    setidIndex(props.match.params.id);
  });

  return (
    <>
      {detailData.map(
        (value: any, index: number) =>
          index === parseInt(controlIndex) && (
            <DetailWide key={index}>
              <DetailTitle>
                <div className='titlebox'></div>
                <div className='titletext'>
                  <span className='titletexttop'>{value.titletop}</span>
                  <p>
                    <span className='titletextbottom'>{value.titlebottom}</span>
                  </p>
                </div>
              </DetailTitle>
              {checkType === 'imgcarousel' && (
                <TypeImgCarousel
                  index={index}
                  header={value.header}
                  contenttitle={value.contenttitle}
                  contentsub={value.contentsub}
                  contenttitle2={value.contenttitle2}
                  contentsub2={value.contentsub2}
                  contenttitle3={value.contenttitle3}
                  contentsub3={value.contentsub3}
                  contenttitle4={value.contenttitle4}
                  contentsub4={value.contentsub4}
                  contenttitle5={value.contenttitle5}
                  contentsub5={value.contentsub5}
                />
              )}

              {checkType === 'videoslick' && (
                <TypeVideoSlick
                  index={index}
                  header={value.header}
                  subHeaderOne={value.subHeaderOne}
                  subHeaderTwo={value.subHeaderTwo}
                  video={value.video}
                />
              )}

              {checkType === 'imgsummary' && (
                <TypeImgSummary
                  index={index}
                  header={value.header}
                  img={value.img}
                  contenttitle={value.contenttitle}
                  contentsub={value.contentsub}
                  contenttitle2={value.contenttitle2}
                  contentsub2={value.contentsub2}
                  contenttitle3={value.contenttitle3}
                  contentsub3={value.contentsub3}
                  contenttitle4={value.contenttitle4}
                  contentsub4={value.contentsub4}
                  contenttitle5={value.contenttitle5}
                  contentsub5={value.contentsub5}
                  contenttitle6={value.contenttitle6}
                  contentsub6={value.contentsub6}
                  contenttitle7={value.contenttitle7}
                  contentsub7={value.contentsub7}
                  text={value.text}
                  text1={value.text1}
                  text2={value.text2}
                />
              )}
              {checkType === 'video' && (
                <TypeVideo index={index} video={value.video} />
              )}

              {checkType === 'img' && (
                <TypeImg
                  index={index}
                  img={value.img}
                  hieght={value.hieght}
                  text={value.text}
                />
              )}
              {checkType === 'selector' && <TypeSpaceInfo index={index} />}
              {checkType === 'selectorvideo' && (
                <TypeSpacevideo index={index} />
              )}
              {checkType === 'Vr' && (
                <TypeVr index={index} img={value.img} hieght={value.hieght} />
              )}
              <Commonfooter>
                <img src={zigbangFooter} />
              </Commonfooter>
            </DetailWide>
          ),
      )}
    </>
  );
};

export default detailPage;

const DetailTitle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 94px;
  overflow: hidden;

  .titlebox {
    position: absolute;
    width: 100%;
    height: 74px;
    border: 1px solid rgb(200, 200, 200);
  }
  .titletext {
    position: relative;
    width: 100%;
    top: 30px;
    padding-right: 20px;

    .titletexttop {
      margin-top: 10px;
      padding-top: 10px;
      color: #957a5b;
      background: #e9e9e9;
      font-weight: 300;
    }

    p {
      position: relative;
      top: -3px;
      color: #2d2d2d;
      font-size: 26px;
      font-weight: 700;

      .titletextbottom {
        display: inline-block;
        position: relative;
        padding-right: 20px;
        background: #e9e9e9;
      }
    }
  }
`;

const DetailWide = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: auto;
  padding: 0 7vw;
  padding-top: 130px;
  background-color: rgb(233, 233, 233);
`;

const Commonfooter = styled.div`
  width: 100%;

  img {
    width: 100%;
  }
`;
