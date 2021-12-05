import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';

import { FC, useRef } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import styles from './Carousel.module.scss';

export interface CarouselSlide {
  id: string;
  label: string;
}

interface CarouselProps {
  slides: CarouselSlide[];
  selectedId?: string;
  onClick: (args: any) => void;
}

export const Carousel: FC<CarouselProps> = props => {
  const { slides, selectedId, onClick } = props;

  const navigationPrev = useRef<HTMLDivElement>(null);
  const navigationNext = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.sliderWrapper}>
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: navigationPrev.current!,
          nextEl: navigationNext.current!,
        }}
        initialSlide={3}
        centeredSlides={true}
        spaceBetween={30}
        slidesPerView="auto"
        className={styles.slider}
      >
        {slides?.map((slide: CarouselSlide) => (
          <SwiperSlide key={slide.id} className={styles.slide}>
            <div
              className={
                selectedId === slide.id
                  ? styles.activeSlideItem
                  : styles.slideItem
              }
              onClick={() => onClick(slide)}
            >
              {slide.label}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div ref={navigationPrev} className={styles.navigationPrev}>
        <GrFormPrevious />
      </div>
      <div ref={navigationNext} className={styles.navigationNext}>
        <GrFormNext />
      </div>
    </div>
  );
};
