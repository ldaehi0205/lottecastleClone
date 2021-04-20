import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import zigbangFooter from './zigbangFooter.png';
import TypeImgCarousel from './typeImgCarousel';
import TypeVideoSlick from './typeVideoSlick';
import TypeImgSummary from './typeImgSummary';
import TypeVideo from './typeVideo';
import TypeImg from './typeImg';
import TypeSpaceInfo from './typeSpaceInfo';
import TypeSpacevideo from './typeSpacevideo';
import TypeVr from './typeVr';

const detailPage = (props: any) => {
  const [state, setstate] = useState([]);
  const [checkType, setcheckType] = useState('');
  const [a, aset] = useState(0);

  const controlIndex = props.match.params.id;
  let indexNum: string;
  let typeProve: any;
  useEffect(() => {
    fetch('http://localhost:3000/data/detaildata.json')
      .then(res => res.json())
      .then(res => setstate(res));
  }, [a]);

  useEffect(() => {
    indexNum = state[controlIndex];
    typeProve = indexNum !== undefined && Object.values(indexNum)[1];
    setcheckType(typeProve);
  }, [state]);

  useEffect(() => {
    aset(props.match.params.id);
  });

  return (
    <>
      {state.map(
        (value: any, index: number) =>
          index === parseInt(controlIndex) && (
            <PageCenter key={index}>
              <DetailWide>
                <DetailTitle>
                  <div className='titlebox'></div>
                  <div className='titletext'>
                    <span className='titletexttop'>{value.titletop}</span>
                    <p>
                      <span className='titletextbottom'>
                        {value.titlebottom}
                      </span>
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
  height: 94px;
  overflow: hidden;

  .titlebox {
    position: absolute;
    width: 490px;
    height: 74px;
    border: 1px solid rgb(200, 200, 200);
  }
  .titletext {
    position: relative;
    width: 100%;
    padding: 0 75px;
    top: 30px;
    padding-right: 20px;

    .titletexttop {
      color: #957a5b;
      font-weight: 300;
      margin-top: 10px;
      background: #e9e9e9;
      padding-top: 10px;
    }

    p {
      font-size: 26px;
      font-weight: 700;
      color: #2d2d2d;
      position: relative;
      top: -3px;

      .titletextbottom {
        display: inline-block;
        background: #e9e9e9;
        position: relative;
        padding-right: 20px;
      }
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
  min-width: 640px;
`;

const Commonfooter = styled.div`
  width: 100%;

  img {
    width: 100%;
  }
`;
