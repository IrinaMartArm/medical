import React, { useState } from "react";
import { St } from "./_CatalogStyles";
import { Title } from "../../../components/Title";
import { Wrapper } from "../../../components/Wrapper";
import { Item } from "./Item";
import { Container } from "../../../components/Container";
import {Menu, StatusType} from "./Menu";
import { AnimatePresence, motion } from "framer-motion"
import {v1} from "uuid";
import idcam from '../../../images/pictures/mo.png'
import id3 from '../../../images/pictures/Component 3.png'
import turboBox from '../../../images/pictures/box.png'
import kits from '../../../images/pictures/box2.png'
import D from '../../../images/pictures/D.png'
import Drill from '../../../images/pictures/Drill.jpg'
import osteo from '../../../images/pictures/osteosinus-kit.png'
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

const catigories: Array<{status: StatusType, title: string}> = [
  {
    title: 'All',
    status: 'all'
  },
  {
    title: 'Implants',
    status: 'Implants'
  },
  {
    title: 'Kits',
    status: 'kit'
  },

];

const Items = [
  {
    id: v1(),
    title: "ID CAM",
    type: 'Implants',
    path: "/ID_CAM",
    img: idcam,
    alt: 'SARMED ID CAM'
  },
  {
    id: v1(),
    title: "ID 3",
    type: 'Implants',
    path: "/ID3",
    img: id3,
    alt: 'SARMED ID3'
  },
  {
    id: v1(),
    title: "Surgical set",
    type: 'kit',
    path: "SurgicalSet",
    img: turboBox,
    alt: 'SARMED Surgical set'
  },
  {
    id: v1(),
    title: "Prosthetic elements",
    type: 'Implants',
    path: "/ProstheticElements",
    img: D,
    alt: 'SARMED Prosthetic elements'
  },
  {
    id: v1(),
    title: "Surgical kits",
    type: 'kit',
    path: "/SurgicalKits",
    img: kits,
    alt: 'SARMED Surgical kits'
  },
  {
    id: v1(),
    title: "TURBODrill",
    type: 'Implants',
    path: "/TurboDrill",
    img: Drill,
    alt: 'SARMED TURBODrill'
  },
  {
    id: v1(),
    title: "Osteosinus kit",
    type: 'kit',
    path: "/OsteoSinus",
    img: osteo,
    alt: 'SARMED Osteosinus kit'
  },
];

export const Catalog: React.FC = () => {
  const {t} = useTranslation();
  const [status, setStatus] = useState('all')
  let filteredItems = Items
  if(status === 'Implants') {
    filteredItems = Items.filter(work => work.type === 'Implants')
  }
  if(status === 'kit') {
    filteredItems = Items.filter(work => work.type === 'kit')
  }


  function changeStatus(value: StatusType) {
    setStatus(value)
  }
  
  return (
    <St.Items id="catalog">
      <Container>
        <Title>{t('productTitle')}</Title>
        <Menu items={catigories}
              changeStatus={changeStatus}
              status={status}
        />
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
                    <Item key={el.id} title={el.title} text={''} image={el.img} alt={el.alt}/>
                  </NavLink>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </Wrapper>
      </Container>
    </St.Items>
  );
};
