import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import sthumb from "public/images/testimonial/s-thumb.png";
import sthumbtwo from "public/images/testimonial/s-thumb-two.png";
import sthumbthree from "public/images/testimonial/s-thumb-three.png";

const HomeTestimonial = () => {
  const [nextSlideIndex, setNextSlideIndex] = useState<number>(1);

  const handleSlideChange = (swiper: any) => {
    const nextIndex = (swiper.realIndex + 1) % swiper.slides.length;
    setNextSlideIndex(nextIndex);
  };
  return (
    <section className="section testimonial pt-0 position-relative">
      <div className="testimonial__text-slider-w">
        <Swiper
          slidesPerView="auto"
          spaceBetween={40}
          speed={5000}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: false,
          }}
          className="testimonial__text-slider"
        >
          <SwiperSlide>
            <div className="testimonial__text-slider-single">
              <h2 className="h1">
                <Link href="client-feedback">
                  UI/UX&apos; Designer
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial__text-slider-single">
              <h2 className="h1">
                <Link href="client-feedback">
                  Web&apos; Developer
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial__text-slider-single">
              <h2 className="h1">
                <Link href="client-feedback">
                  Digital&apos; Marketer
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
           <SwiperSlide>
            <div className="testimonial__text-slider-single">
              <h2 className="h1">
                <Link href="client-feedback">
                  UI/UX&apos; Designer
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial__text-slider-single">
              <h2 className="h1">
                <Link href="client-feedback">
                  Web&apos; Developer
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial__text-slider-single">
              <h2 className="h1">
                <Link href="client-feedback">
                  Digital&apos; Marketer
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
       
        </Swiper>
      </div>
       
    </section>
  );
};

export default HomeTestimonial;
