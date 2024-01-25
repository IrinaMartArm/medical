import React, { useState } from "react";
import { S } from "./_CatalogStyles";
import { Title } from "../../../components/Title";
import { Wrapper } from "../../../components/Wrapper";
import { Item } from "./Item";
import { Container } from "../../../components/Container";
// import { StatusType } from "./Menu";
import { AnimatePresence, motion } from "framer-motion"
import {v1} from "uuid";
import idcam from '../../../images/pictures/IDCST-Prsentation.webp'
import id3 from '../../../images/pictures/id3.webp'
import turboBox from '../../../images/pictures/TURBOdrill-Dense-.webp'
import kits from '../../../images/pictures/IDSPASSOR.webp'
import D from '../../../images/pictures/D.jpg'
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

// const worksItems: Array<{status: StatusType, title: string}> = [
//   {
//     title: 'All',
//     status: 'all'
//   },
//   {
//     title: 'Item',
//     status: 'landing page'
//   },
//   {
//     title: 'Item',
//     status: 'react'
//   },
//   {
//     title: 'Item',
//     status: 'spa'
//   },
// ];

const Items = [
  {
    id: v1(),
    title: "ID CAM",
    type: "spa",
    path: "/ID_CAM",
    img: idcam
  },
  {
    id: v1(),
    title: "ID 3",
    type: "react",
    path: "/ID3",
    img: id3
  },
  // {
  //   id: v1(),
  //   title: "Surgical set",
  //   type: "react",
  //   path: "/id3",
  //   img: turboBox
  // },
  {
    id: v1(),
    title: "Surgical kits",
    type: "react",
    path: "/SurgicalKits",
    img: kits
  },
  {
    id: v1(),
    title: "Prosthetic elements",
    type: "react",
    path: "/ProstheticElements",
    img: D
  },
];

export const Catalog: React.FC = () => {
  const {t} = useTranslation();
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

  // function changeStatus(value: StatusType) {
  //   setStatus(value)
  // }
  
  return (
    <S.Items id="catalog">
      <Container>
        <Title>{t('productTitle')}</Title>
        {/*<Menu items={worksItems}*/}
        {/*      changeStatus={changeStatus}*/}
        {/*      status={status} */}
        {/*/>*/}
        <Wrapper justify="space-around" wrap="wrap" gap="20px">
          <AnimatePresence>
            {filteredItems.map((el) => {
              return (
                <motion.div style={{maxWidth: "250px", width: "280px", flexGrow: 1}}
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
            <motion.div style={{maxWidth: "350px", width: "100%", flexGrow: 1}}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        layout>
              <NavLink to={"/SurgicalSet"}>
                <Item title={"Surgical set"} text={''} image={turboBox} />
              </NavLink>
            </motion.div>
          </AnimatePresence>
        </Wrapper>
      </Container>
    </S.Items>
  );
};
// id: v1(),
//     title: "Surgical set",
//     type: "react",
//     path: "/id3",
//     img: turboBox
// },