import React from "react";
import { useResize } from ".";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
const Focal = () => {
  const [size, ref] = useResize();
  const data = [
    {
      title: "Xin chào Thụy Sỹ! Xin chào Châu Âu!",
      description:
        "Chương trình góp phần thúc đẩy mối quan hệ hữu nghị giữa Việt Nam và Thụy Sĩ cũng như khắc hoạ hình ảnh Việt Nam như một đất nước kiên cường, tươi trẻ với những con người thân thiện, cảnh quan ngoạn mục và văn hóa hấp dẫn.",
      img: "Rectangle-1185.png",
    },
    {
      title: "Văn hóa cội nguồn",
      description:
        "Một miền đất đậm đà bản sắc nhưng vẫn hài hòa những yếu tố đương đại sẽ được tái hiện qua từng câu chuyện kể của các khách mời đặc biệt cũng như những tiết mục công phu. Muôn sắc màu văn hóa thú vị đang chờ đợi khán giả khám phá.",
      img: "authentic_culture.jpg",
    },
    {
      title: "Việt Nam diệu kỳ",
      description:
        "Thông qua những thước phim sinh động và câu chuyện của khách mời, thiên nhiên tươi đẹp của Việt Nam sẽ được tái hiện ngay trước mắt khán giả, từ núi non hùng vĩ, đồng bằng phù sa màu mỡ tới những bãi biển tuyệt đẹp hay các đô thị vừa cổ kính, vừa hiện đại.",
      img: "amazing_country.jpg",
    },
    {
      title: "Các thế hệ tương lai",
      description: "Chương trình là cơ hội để lắng nghe hành trình của những người đã và đang đồng hành cùng sự phát triển của đất nước. Họ là đại diện cho người Việt thế hệ mới: năng động, tài giỏi, sẵn sàng hội nhập cùng thế giới.",
      img: "future_generation_final.jpg",
    },
  ];
  return (
    <div ref={ref} className="w-full mb-48 relative">
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        onSwiper={(swiper) => {
          // Đảm bảo cập nhật khi Swiper sẵn sàng
          setTimeout(() => {
            swiper.navigation.update();
          });
        }}
        loop
      >
        {data.map((i, index) => (
          <SwiperSlide key={index}>
            <div className="w-full ">
              <img src={`/images/${i.img}`} style={{ height: (size.width * 3) / 4 / 1.875 }} className="w-full xl:w-3/4" alt="" />
              <div
                className=" w-full xl:w-1/2 p-8 xl:absolute xl:right-5 xl:z-10 xl:top-1/2 bg-white round-xl rounded-xl overflow-hidden text-ellipsis"
                style={{ boxShadow: "0px 4px 32px rgba(0, 0, 0, 0.08)", height: size.width >= 1120 ? (((size.width * 3) / 4 / 1.875) * 2) / 3 : "auto" }}
              >
                <p className="font-bold text-2xl">{i.title}</p>
                <p className="mt-4">{i.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex xl:absolute xl:bottom-0 z-20 gap-5 mt-8 justify-center" style={{ right: "44%" }}>
        <button className="custom-prev">
          <FaArrowLeft className="text-gray-600" />
        </button>
        <button className="custom-next">
          <FaArrowRight className="text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default Focal;
