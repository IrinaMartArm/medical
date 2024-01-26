import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import p1 from '../../images/pictures/ID_CAM-Big.webp'
import p2 from '../../images/pictures/id-sistem-Big.png'
import p3 from '../../images/pictures/1.webp'

import styled from "styled-components";
import styles from './Swiper.module.css'
import {Theme} from "../../style/Theme";

const imgs = [
	{path: p1}, {path: p2}, {path: p3},
]

export const SliderReact = () => {     //className={'swiper-container'}
	return (
		<SliderBox>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
				spaceBetween={50}
				slidesPerView={1}
				scrollbar={{ draggable: true }}
				//navigation
				//pagination={{clickable: true}}
				autoplay={{ delay: 2500 }}
				className={styles.mySwiper}
			>
				{imgs.map((el, index) => {
					return (
						<SwiperSlide key={index}>
							<SlideImg src={el.path}/>
						</SwiperSlide>
					)
				})}
				{/*<div className={`swiper-scrollbar swiper-scrollbar-horizontal ${styles.custom_swiper}`}></div>*/}
				{/*<div className={`swiper-button-prev ${styles.custom_swiper}`}></div>*/}
				{/*<div className={`swiper-button-next ${styles.custom_swiper}`}></div>*/}
			</Swiper>
		</SliderBox>
	);
};

const SlideImg = styled.img`
  width: 100%;
`
const SliderBox = styled.div`
  max-width: 1900px;
  width: 100%;
  margin: 30px auto 0;
  
  @media ${Theme.media.break} {
    margin: 10px auto 0;
  }
`