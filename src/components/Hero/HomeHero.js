import React from "react";
import ReactPlayer from "react-player";
import heroVideo from "../../images/hero.mov";
import { makeStyles } from "@material-ui/core/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, A11y, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import Slider1 from "../../images/slider1.jpg";
import Slider2 from "../../images/slider2.jpg";
import Slider3 from "../../images/slider3.jpg"

SwiperCore.use([Pagination, A11y, Autoplay]);

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "85vh",
    "& video": {
      objectFit: "cover",
    },
  },
}));

const HomeHero = () => {
  const classes = useStyles();
  return (
    <div>
      <div className="hidden lg:block">
        <div className={classes.root}>
          <ReactPlayer
            url={heroVideo}
            playing
            loop
            muted
            width="100%"
            height="100%"
          />
        </div>
      </div>

      <div className="lg:hidden">
        <MobileCarousel />
      </div>
    </div>
  );
};

const MobileCarousel = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      autoplay
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className="h-carousel">
          <img src={Slider1} alt="homeslide" className="w-full h-full" />
          <div className="absolute text-white top-60 left-5 sm:left-11 w-8/12 sm:w-4/12 bg-secondary p-8 rounded-lg">
            <p className="text-lg sm:text-xl pb-3 font-bold">4 BEDROOMS TERRACE DUPLEX</p>
            <p className="text-sm opacity-60 pb-3">APPLEWOOD ESTATE 3, BETWEEN HEYDEN AND NORTHWEST FILLING STATION, VGC, LEKKI, LAGOS</p>
            <ul className="flex text-sm font-bold pb-3">
              <li className="pr-4">BEDROOM 4</li>
              <li>BATHROOM 4</li>
            </ul>
            <hr />
            <p className="text-2xl font-bold pt-3">#55,000,000</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-carousel">
          <img src={Slider2} alt="homeslide" className="w-full h-full" />
          <div className="absolute text-white top-60 left-5 sm:left-11 w-8/12 sm:w-4/12 bg-secondary p-8 rounded-lg">
            <p className="text-lg sm:text-xl pb-3 font-bold">4 BEDROOMS TERRACE DUPLEX</p>
            <p className="text-sm opacity-60 pb-3">4 BEDROOM APARTMENT, LEKKI PHASE 1, LAGOS </p>
            <ul className="flex text-sm font-bold pb-3">
              <li className="pr-4">BEDROOM 4</li>
              <li>BATHROOM 4</li>
            </ul>
            <hr />
            <p className="text-2xl font-bold pt-3">#55,000,000</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-carousel">
          <img src={Slider3} alt="homeslide" className="w-full h-full" />
          <div className="absolute text-white top-60 left-5 sm:left-11 w-8/12 sm:w-4/12 bg-secondary p-8 rounded-lg">
            <p className="text-lg sm:text-xl pb-3 font-bold">4 BEDROOMS TERRACE DUPLEX</p>
            <p className="text-sm opacity-60 pb-3">APPLEWOOD ESTATE 2, ALONG ORCHID ROAD, CHEVRON TOLLGATE LEKKI, LAGOS</p>
            <ul className="flex text-sm font-bold pb-3">
              <li className="pr-4">BEDROOM 4</li>
              <li>BATHROOM 4</li>
            </ul>
            <hr />
            <p className="text-2xl font-bold pt-3">#55,000,000</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeHero;
