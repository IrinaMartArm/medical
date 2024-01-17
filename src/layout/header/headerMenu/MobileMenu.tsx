import React, { useState } from "react";
import { Menu } from "./Menu";
import { S } from "./HeaderMenuStyle";

export const MobileMenu: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const onBtnClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <S.MobileMenu>
      <S.Button isOpen={menuIsOpen} onClick={onBtnClick} aria-label="button">
        <span></span>
      </S.Button>
      <S.MenuWrapper isOpen={menuIsOpen}>
        <Menu onBtnClick={onBtnClick}/>
      </S.MenuWrapper>
    </S.MobileMenu>
  );
};
