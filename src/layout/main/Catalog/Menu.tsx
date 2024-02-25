import React from "react";
import { St } from "./_CatalogStyles";
import {useTranslation} from "react-i18next";

export type StatusType = 'all' | 'Implants' | 'kit'

type MenuPropsType = {
  items: Array<{status: StatusType, title: string}>
  changeStatus: (value: StatusType) => void
  status: string
}

export const Menu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
    const {t} = useTranslation();
  return (
    <St.Menu>
      <St.List>
        {props.items.map((i, index) => {
          return (
            <St.ListItem key={index}>
              <St.Link active={props.status === i.status} onClick={()=>{props.changeStatus(i.status)}}>{t(i.title)}</St.Link>
            </St.ListItem>
          );
        })}
      </St.List>
    </St.Menu>
  );
};

