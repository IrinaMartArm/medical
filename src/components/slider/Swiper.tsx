import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import p1 from '../../images/pictures/pc1.jpg'
import p2 from '../../images/pictures/pc2.jpg'
import styled from "styled-components";
import styles from './Swiper.module.css'

export const SliderReact = () => {     //className={'swiper-container'}
	return (
		<SliderBox >
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
				spaceBetween={50}
				slidesPerView={1}
				navigation
				effect="fade"
				// pagination={{clickable: true}}
				autoplay={{ delay: 2500 }}
				className={styles.mySwiper}
			>
				<SwiperSlide>
					<SlideImg src={p1}/>
				</SwiperSlide>
				<SwiperSlide><SlideImg src={p2}/></SwiperSlide>
				{/*<div className={`${styles.custom_swipera}`}></div>*/}
				<div className={`swiper-button-prev ${styles.custom_swiper}`}></div>
				<div className={`swiper-button-next ${styles.custom_swiper}`}></div>
			</Swiper>
		</SliderBox>

	);
};

const SlideImg = styled.img`
  width: 350px;
  height: 500px;
`
const SliderBox = styled.div`
  max-width: 1000px;
  width: 100%;
  height: 550px;
  margin: 100px auto 0;
  //border: 1px solid red;
`