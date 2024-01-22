import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import p1 from '../../images/pictures/Screenshot 2024-01-18 at 15.42.19 copy.png'
import p2 from '../../images/pictures/Screenshot 2024-01-18 at 15.43.13 copy.png'
import p3 from '../../images/pictures/Screenshot 2024-01-18 at 15.44.32 copy.png'
import styled from "styled-components";
import styles from './Swiper.module.css'
import {Theme} from "../../style/Theme";

export const SliderReact = () => {     //className={'swiper-container'}
	return (
		<SliderBox >
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
				spaceBetween={50}
				slidesPerView={1}
				navigation={{clickable: true}}
				// pagination={{clickable: true}}
				autoplay={{ delay: 2500 }}
				className={styles.mySwiper}
			>
				<SwiperSlide>
					<SlideImg src={p1}/>
				</SwiperSlide>
				<SwiperSlide><SlideImg src={p2}/></SwiperSlide>
				<SwiperSlide>
					<SlideImg src={p3}/>
				</SwiperSlide>
				{/*<div className={`${styles.custom_swipera}`}></div>*/}
				<div className={`swiper-button-prev ${styles.custom_swiper}`}></div>
				<div className={`swiper-button-next ${styles.custom_swiper}`}></div>
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
  //height: 650px;
  margin: 30px auto 0;
  
  @media ${Theme.media.break} {
    margin: 10px auto 0;
  }
`