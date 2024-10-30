import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import "./style.css";
import { Link } from "react-router-dom";
import { slugify } from "../../../App";
import { useSelector } from "react-redux";
function SliderNews({ data }) {
  return (
    <div className="mt-10 select-none" id="slider-news">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10, slidesPerGroup: 1 }, // Mobile
          768: { slidesPerView: 2, spaceBetween: 20, slidesPerGroup: 2 }, // Tablet
          1280: { slidesPerView: 3, spaceBetween: 30, slidesPerGroup: 3 }, // Desktop
        }}
        style={{ paddingBottom: 50 }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Link to={`tin-tuc/${slugify(item.title)}`}>
              <div className="" style={{ boxShadow: "0px 5px 20px 5px rgba(0, 0, 0, 0.1)" }}>
                <img className="w-full h-52 object-cover" src={`/${item.banner ? item.banner : "images/default.png"}`} />
                <div className="p-5 h-48">
                  <p className="line-clamp-3 text-black font-bold text-xl">{item.title}</p>
                  <p className="line-clamp-3 text-sm mt-2">{item.description}</p>
                </div>
                <div className="text-center text-red-600 py-3 font-bold text-sm flex justify-center items-center gap-2" style={{ borderTop: "1px solid #E3E3E3" }}>
                  Xem thêm <img className="h-3" src="./images/arrow-red.svg" />
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderNews;
