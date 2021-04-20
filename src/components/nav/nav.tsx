import React, { useEffect, useState } from 'react';
import { MainProps } from '~/components/nav/NavInterface';
import { useHistory } from 'react-router-dom';
import { MenuClose } from './templates/MenuClose';
import { MenuOpen } from './templates/MenuOpen';

export const Nav: React.FC = () => {
  const [menuList, setMenuList] = useState<MainProps[]>([]);
  const [showVisible, setShowVisible] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const history = useHistory();
  useEffect(() => {
    fetch('data/MainList.json')
      .then(res => res.json())
      .then(res => setMenuList(res.results));
  }, []);

  const handleMenu = (showVisible: boolean) => {
    setShowVisible(!showVisible);
  };

  const handleSelect = (count: number | null) => {
    activeIndex === count ? setActiveIndex(null) : setActiveIndex(count);
  };

  const handleHome = () => {
    window.location.replace('/main');
  };

  const handlePage = (id: number) => {
    history.push(`/detailPage/${id}`);
  };

  return (
    <>
      <MenuClose
        handleMenu={() => handleMenu(showVisible)}
        handleHome={handleHome}
      />
      <MenuOpen
        handleMenu={() => handleMenu(showVisible)}
        handleHome={handleHome}
        handleSelect={handleSelect}
        menuList={menuList}
        showVisible={showVisible}
        activeIndex={activeIndex}
        handlePage={handlePage}
      />
    </>
  );
};

export default Nav;
