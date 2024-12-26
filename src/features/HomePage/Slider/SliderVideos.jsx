import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { useResize } from "../../NewsPagePro/NgayVietNamOThuySi";
import "./style.css";
function SliderVideos({ data }) {
  const [size, ref] = useResize();

  return (
    <div className="mt-10 select-none" id="slider-news" ref={ref}>
      <Swiper
        pagination={{ clickable: true }}
        navigation={{ clickable: true }}
        modules={[Pagination, Navigation]}
        // breakpoints={{
        //   320: { slidesPerView: 1, spaceBetween: 10, slidesPerGroup: 1 }, // Mobile
        //   768: { slidesPerView: 2, spaceBetween: 20, slidesPerGroup: 2 }, // Tablet
        //   1280: { slidesPerView: 3, spaceBetween: 30, slidesPerGroup: 3 }, // Desktop
        // }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="" style={{ boxShadow: "0px 5px 20px 5px rgba(0, 0, 0, 0.1)", background: "#fff" }}>
              <iframe
                style={{ height: (size.width * 9) / 16 }}
                className="w-full"
                src={item}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderVideos;
