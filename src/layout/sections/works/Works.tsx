import React, { useState } from "react";
import { S } from "./WorksStyles";
import { Title } from "../../../components/Title";
import { Wrapper } from "../../../components/Wrapper";
import { Menu } from "./Menu";
import { Work } from "./Work";
import { Container } from "../../../components/Container";
import { StatusType } from "./Menu";
import { AnimatePresence, motion } from "framer-motion"
import {v1} from "uuid";

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

const worksData = [
  {
    id: v1(),
    title: "Item",
    type: "spa",
  },
  {
    id: v1(),
    title: "Item",
    type: "react",
  },
  {
    id: v1(),
    title: "Item",
    type: "react",
  },
  {
    id: v1(),
    title: "Item",
    type: "react",
  },
  {
    id: v1(),
    title: "Item",
    type: "react",
  },
];

export const Works: React.FC = () => {
  const [status, setStatus] = useState('all')
  let filteredWorks = worksData
  if(status === 'landing page') {
    filteredWorks = worksData.filter(work => work.type === 'landing page')
  }
  if(status === 'react') {
    filteredWorks = worksData.filter(work => work.type === 'react')
  }
  if(status === 'spa') {
    filteredWorks = worksData.filter(work => work.type === 'spa')
  }

  function changeStatus(value: StatusType) {
    setStatus(value)
  }
  
  return (
    <S.Works id="works">
      <Container>
        <Title>Products by category</Title>
        <Menu items={worksItems}
              changeStatus={changeStatus}
              status={status} />
        <Wrapper justify="space-around" wrap="wrap" gap="30px">
          <AnimatePresence>
            {filteredWorks.map((w) => {
              return (
                <motion.div style={{maxWidth: "300px", width: "200px", flexGrow: 1}}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            key={w.id}
                            layout>
                  <Work key={w.id} title={w.title} text={''} image={''} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </Wrapper>
      </Container>
    </S.Works>
  );
};
