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
          <p className="text-lg text-white">4 BEDROOMS TERRACE DUPLEX</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-carousel">
          <img src={Slider2} alt="homeslide" className="w-full h-full" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-carousel">
          <img src={Slider3} alt="homeslide" className="w-full h-full" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeHero;
