import React from "react";
import { S } from "./HeaderMenuStyle";
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";

const items = [
  { id: '1', i18nKey: 'title1',  href: "/" },
  { id: '3', i18nKey: 'title3', href: "catalog" },
  { id: '2', i18nKey: 'title2', href: "about" },
  { id: '4', i18nKey: 'title4', href: "contact" },
];

type MenuType = {
  onBtnClick?: ()=> void
}

export const Menu = (props: MenuType) => {
  const { t } = useTranslation();
  return (
    <ul>
      {items.map((i, index) => {
        return (
          <S.MenuItem key={index}>
            <NavLink to={'/'}>
              A
            </NavLink>
            <S.NavLinks
                onClick={props.onBtnClick}
                to={i.href}
                smooth={true}
                activeClass="active"
                spy={true}
            >
              {t(i.i18nKey)}
            </S.NavLinks>

          </S.MenuItem>
        );
      })}
    </ul>
  );
};
