import React, { useState } from "react";
import { S } from "./WorksStyles";
import { Title } from "../../../components/Title";
import { Wrapper } from "../../../components/Wrapper";
import { Menu } from "./Menu";
import { Item } from "./Item";
import { Container } from "../../../components/Container";
import { StatusType } from "./Menu";
import { AnimatePresence, motion } from "framer-motion"
import {v1} from "uuid";
import i1 from '../../../images/pictures/IDCST-Prsentation.webp'
import id3 from '../../../images/pictures/id3.jpg'
import i3 from '../../../images/pictures/pc1.jpg'
import i4 from '../../../images/pictures/all-implants-062016-20.webp'
import i5 from '../../../images/pictures/pink.webp'
import {NavLink, Route, Routes} from "react-router-dom";

const worksItems: Array<{status: StatusType, title: string}> = [
  {
    title: 'All',
    status: 'all'
  },
  {
    title: 'Item',
    status: 'landing page'
  },
  {
    title: 'Item',
    status: 'react'
  },
  {
    title: 'Item',
    status: 'spa'
  },
];

const Items = [
  {
    id: v1(),
    title: "ID CAM",
    type: "spa",
    path: "/ID_CAM",
    img: i1
  },
  {
    id: v1(),
    title: "ID 3",
    type: "react",
    path: "/ID3",
    img: id3
  },
  {
    id: v1(),
    title: "Implant",
    type: "react",
    path: "/id3",
    img: i3
  },
  {
    id: v1(),
    title: "Implant",
    type: "react",
    path: "/id3",
    img: i4
  },
  {
    id: v1(),
    title: "Implant",
    type: "react",
    path: "/id3",
    img: i5
  },
];

export const Catalog: React.FC = () => {
  const [status, setStatus] = useState('all')
  let filteredItems = Items
  if(status === 'landing page') {
    filteredItems = Items.filter(work => work.type === 'landing page')
  }
  if(status === 'react') {
    filteredItems = Items.filter(work => work.type === 'react')
  }
  if(status === 'spa') {
    filteredItems = Items.filter(work => work.type === 'spa')
  }

  function changeStatus(value: StatusType) {
    setStatus(value)
  }
  
  return (
    <S.Works id="catalog">
      <Container>
        <Title>Products</Title>
        {/*<Menu items={worksItems}*/}
        {/*      changeStatus={changeStatus}*/}
        {/*      status={status} */}
        {/*/>*/}
        <Wrapper justify="space-around" wrap="wrap" gap="30px">
          <AnimatePresence>
            {filteredItems.map((el) => {
              return (
                <motion.div style={{maxWidth: "250px", width: "200px", flexGrow: 1}}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            key={el.id}
                            layout>
                  <NavLink to={el.path}>
                    <Item key={el.id} title={el.title} text={''} image={el.img} />
                  </NavLink>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </Wrapper>
      </Container>
    </S.Works>
  );
};
