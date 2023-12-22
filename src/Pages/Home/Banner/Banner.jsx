import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";
import banner from "../../../assets/images/banner.png";
import { Link } from "react-router-dom";
import "./Banner.css";
const Banner = () => {
  // const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    // progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper  "
      >
        <SwiperSlide>
          <div className="relative ">
            <img className="w-full" src={banner} alt="" />

            <Link to={"/login"}>
              {" "}
              <button className="btn btn-active btn-primary absolute bottom-10 left-[580px] ">
                Lets Explore
              </button>
            </Link>
          </div>{" "}
        </SwiperSlide>



        <SwiperSlide>
          <div className="relative ">
            <img className="w-full" src={banner} alt="" />

            <Link to={"/login"}>
              {" "}
              <button className="btn btn-active btn-primary absolute bottom-10 left-[580px] ">
                Lets Explore
              </button>
            </Link>
          </div>{" "}
        </SwiperSlide>


        <div className="autoplay-progress" slot="container-end">
          {/* <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg> */}
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default Banner;
