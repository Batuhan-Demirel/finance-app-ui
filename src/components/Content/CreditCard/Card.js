import React from "react";

import SwiperCore, { Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

import CardPage from "./CardPage";

SwiperCore.use([ Pagination]);

const Credit = () => {
  return (
    <Swiper
    spaceBetween={0}
    slidesPerView={1}
    pagination={{ clickable: true }}
  >
      <SwiperSlide>
        <CardPage />
      </SwiperSlide>
      <SwiperSlide>
        <CardPage />
      </SwiperSlide>
  
    </Swiper>
  );
};

export default Credit;
