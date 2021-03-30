import React, { useState, useEffect } from 'react';
import { getUser, IUserInfo } from '~/api';
import { Example } from '~/pages';

export const ExampleContainer = () => {
  const [userDataList, setUserDataList] = useState<IUserInfo[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const newUserDataList = await getUser();
        setUserDataList(newUserDataList);
      } catch (err) {
        alert('데이터를 받아오는데 실패했습니다.');
      }
    })();
  }, []);

  return <Example userDataList={userDataList} />;
};
