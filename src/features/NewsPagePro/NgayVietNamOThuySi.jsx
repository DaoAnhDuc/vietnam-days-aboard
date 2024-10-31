import { useEffect, useRef, useState } from "react";
import "lightgallery/css/lightgallery.css";
import lightGallery from "lightgallery";
import Footer from "../HomePage/Footer/Footer";
export const useResize = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const elementRef = useRef(null);

  useEffect(() => {
    const updateSize = () => {
      if (elementRef.current) {
        setSize({
          width: elementRef.current.offsetWidth,
          height: elementRef.current.offsetHeight,
        });
      }
    };

    const observer = new ResizeObserver(updateSize);
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return [size, elementRef];
};

function NgayVietNamOThuySi() {
  const [size, ref] = useResize();
  const [size2, ref2] = useResize();
  const [size3, ref3] = useResize();
  const [size4, ref4] = useResize();
  const [size5, ref5] = useResize();
  const [timeline, setTimeline] = useState([
    {
      title: "Xin chào Thụy Sỹ! Xin chào Châu Âu! ",
      img: "/images/xinchaothuysi.png",
      show: false,
    },
    {
      title: " Văn hóa cội nguồn ",
      img: "/images/vanhoacoinguon.png",
      show: false,
    },
    {
      title: "Việt Nam diệu kỳ",
      img: "/images/vietnamdieuky.png",
      show: false,
    },
    {
      title: "Các thế hệ tương lai  ",
      img: "/images/cacthehetuonglai.png",
      show: false,
    },
  ]);

  const news = [
    {
      title: "Vietnam Day in Switzerland 2021 to take place virtually for the first time",
      description: "Vietnam Day in Switzerland 2021 will take place virtually for the first time on October 9 to commemorate the 50th anniversary of Switzerland and Vietnam",
      img: "/images/BTATN17921tin28.-jpg-768x480.jpg",
    },
    {
      title: "Vietnam Days in Switzerland 2021",
      description: "The cultural exchange event would be a chance for Vietnam to promote its unmissable beautiful landscapes and cultural diversity to international friends. Vietnam Days in",
      img: "/images/Vietnam-4.jpeg",
    },
    {
      title: "Vietnam Day in Switzerland celebrates anniversary of diplomatic relations",
      description: "The Vietnam Day in Switzerland 2021 took place virtually on October 9 as part of activities to celebrate the 50th founding anniversary of diplomatic relations",
      img: "/images/4603_Cac_khach_mYi_tY_YYu_cYu_Bern-768x576.jpeg",
    },
    {
      title: "“Vietnam days in Switzerland 2021″ promote Vietnam’s identity to Switzerland and Europe",
      description: "Vietnam Days in Switzerland 2021 took place online to promote Vietnam as an authentic yet dynamic country to Swiss and European visitors. Guests joining the",
      img: "/images/0830_Michael_Gerber-768x512.jpeg",
    },
    {
      title: `“Vietnam Days In Switzerland 2021” Promote Vietnam’s Identity To Switzerland And Europe`,
      description: "Vietnam Days in Switzerland 2021 (hosted by the Department of Cultural Diplomacy and UNESCO, Ministry of Foreign Affairs) took place online and promoted Viet Nam",
      img: "/images/picture1.png",
    },
    {
      title: "2021 Vietnam Days in Switzerland to promote can’t-miss landscapes of Vietnam",
      description: "Vietnam’s resilience, friendliness along with beautiful landscapes and culture will be introduced at the 2021 Vietnam Days in Switzerland programme scheduled to begin on October",
      img: "/images/dulichhagiang6.jpeg",
    },
  ];

  const users = [
    {
      title: "Bà Lê Linh Lan",
      description: "Đại sứ Việt Nam tại Thuỵ Sỹ",
      img: "/images/linh-lan-01.jpg",
    },
    {
      title: "Ông Ivo Sieber",
      description: "Đại sứ Thuỵ Sỹ tại Việt Nam",
      img: "/images/Ivo.png",
    },
    {
      title: "Ông Đặng Hoàng Giang",
      description: "Thứ trưởng Bộ Ngoại Giao Việt Nam",
      img: "/images/Dặng-Hoàng-Giang.png",
    },
    {
      title: "Ông Nguyễn Trùng Khánh",
      description: "Tổng cục trưởng Tổng cục du lịch",
      img: "/images/Nguyen-Trung-Khanh.png",
    },
    {
      title: "Bà Lê Thị Tuyết Mai",
      description: "Đại sứ, Trưởng Phái đoàn thường trực Việt Nam",
      img: "/images/8.-Ms.-Lê-Thị-Tuyết-Mai-Dại-sứ-Trưởng-Phái-doàn-thường-trực-Việt-Nam-1024x705.jpeg",
    },
    {
      title: "Ông Philipp Rosler",
      description: "Lãnh sự danh dự Việt Nam tại Zug, Thuỵ Sỹ - Nguyên Phó Thủ tướng CHLB Đức - Nguyên Bộ trưởng Kinh tế và Công nghệ CHLB Đức",
      img: "/images/9.-Mr.-Philipp-Rosler--1024x1024.jpg",
    },
    {
      title: "Ông Lưu Vĩnh Toàn",
      description: "Chủ tịch Hội Chuyên gia tri thức Việt Nam tại Thuỵ Sỹ",
      img: "/images/luuvinhtoan_fofo-e1633579296703.jpeg",
    },
    {
      title: "Bà Anjuska Weil",
      description: "Chủ tịch Hội hữu nghị Thuỵ Sỹ - Việt Nam",
      img: "/images/1633_04_anjuska_weil_tk-e1632060482537.jpeg",
    },
  ];

  return (
    <>
      <img className="w-full" src="/images/banner_vi-scaled.jpg" alt="" />
      <div ref={ref} className="container pb-36" style={{ background: "#fdfdfd" }}>
        <p className="mt-20 font-bold text-5xl text-center mb-10" style={{ fontFamily: "Philosopher", color: "#151748" }}>
          Video chương trình
        </p>
        <iframe
          className="w-full"
          style={{ height: (size.width * 9) / 16 }}
          src="https://www.youtube.com/embed/na-G2pliEZQ?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fvietnamdaysabroad.mofa.gov.vn&widgetid=1"
          frameborder="0"
        ></iframe>
        <p className="mt-20 font-bold text-5xl text-center mb-10" style={{ fontFamily: "Philosopher", color: "#151748" }}>
          Về chương trình
        </p>
        <div className="flex gap-4 flex-col md:flex-row">
          <div className="flex flex-col gap-4" style={{ flex: 2 }}>
            <b>
              "Biến “thách thức” từ đại dịch Covid-19 thành “cơ hội”, chương trình Ngày Việt Nam tại Thụy Sỹ năm 2021 – một hoạt động quan trọng nhằm kỷ niệm 50 năm ngày thiết lập quan hệ ngoại giao Việt Nam - Thuỵ Sỹ (11/10/1971 -
              11/10/2021) - sẽ lần đầu tiên được tổ chức trực tuyến và phát sóng trên các nền tảng mạng xã hội từ 15h00 – 18h00 (giờ Việt Nam) ngày 9/10/2021.
            </b>
            <p>
              Ngày Việt Nam tại Thuỵ Sĩ năm 2021 là một hoạt động nằm trong khuôn khổ Chương trình Ngày Việt Nam ở nước ngoài - một chương trình quảng bá hình ảnh quốc gia thường niên, được Thủ tướng Chính phủ giao Bộ Ngoại giao thực hiện
              từ năm 2010. Chương trình thường diễn ra song song với các chuyến thăm thăm chính thức các nước của đoàn đại biểu cấp cao, nhận được sự hưởng ứng tích cực của các địa phương, doanh nghiệp quốc tế, cơ quan, tổ chức và người
              Việt Nam ở nước ngoài.
            </p>
            <button className="bg-red-600 text-white font-bold px-6 py-3 rounded w-fit"> Đọc thêm</button>
          </div>
          <div ref={ref2} style={{ flex: 3 }}>
            <iframe className="w-full min-w-80" style={{ height: (size2.width * 9) / 16 }} src="https://www.youtube.com/embed/UZA5i_kTZw0?rel=0" frameborder="0"></iframe>
          </div>
        </div>
        <p className="mt-20 font-bold text-5xl text-center mb-10" style={{ fontFamily: "Philosopher", color: "#151748" }}>
          Tin tức
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-2">
          {news.map((i) => (
            <div key={i.title} ref={ref3} className="rounded-xl" style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
              <img style={{ height: (size3.width * 10) / 16 }} className="w-full object-cover rounded-tl-xl rounded-tr-xl" src={i.img} alt="" />
              <div className="flex flex-col gap-3 p-5">
                <b className="text-lg" style={{ color: "#54595f" }}>
                  {i.title}
                </b>
                <p className="text-sm" style={{ color: "#777" }}>
                  {i.description}
                </p>
                <div className="text-green-500 text-xs font-bold">Đọc thêm »</div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-20 font-bold text-5xl text-center mb-10" style={{ fontFamily: "Philosopher", color: "#151748" }}>
          Khách mời
        </p>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-2">
          {users.map((i) => (
            <div key={i.title} ref={ref4} className="rounded-xl">
              <img style={{ height: size4.width }} className="w-full object-cover rounded-tl-xl rounded-tr-xl" src={i.img} alt="" />
              <div className="flex flex-col gap-3 p-4">
                <b className="text-lg" style={{ color: "#54595f" }}>
                  {i.title}
                </b>
                <p className="" style={{ color: "#777" }}>
                  {i.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-20 font-bold text-5xl text-center mb-2" style={{ fontFamily: "Philosopher", color: "#151748" }}>
          Nội dung chương trình
        </p>
        <p className="text-center font-bold text-xl mb-6">09/10/2021 - Từ 15:00 (GMT+7)</p>
        <div className="flex flex-col gap-5">
          {timeline.map((i) => (
            <div key={i.title} style={{ width: 836, margin: "auto" }}>
              <div
                onClick={() => {
                  if (i.show) {
                    setTimeline(timeline.map((item) => ({ ...item, show: false })));
                  } else {
                    setTimeline(timeline.map((item) => ({ ...item, show: i.title === item.title ? true : false })));
                  }
                }}
                className="text-white uppercase py-2 px-4 font-bold rounded-sm cursor-pointer"
                style={{ background: i.show ? "#D1010A" : "#151748" }}
              >
                {i.title}
              </div>
              {i.show && <img src={i.img} alt="" />}
            </div>
          ))}
        </div>
        <div className="mt-20 bg-white px-20 py-16" style={{ boxShadow: "0px 16px 32px rgba(0, 0, 0, 0.04)" }}>
          <div className="flex gap-5 items-center">
            <div style={{ flex: 1, borderBottom: "1px solid #dfdfdf" }}></div>
            <div>Đơn vị tổ chức</div>
            <div style={{ flex: 1, borderBottom: "1px solid #dfdfdf" }}></div>
          </div>
          <div className="flex gap-10 flex-wrap mt-6">
            <img className="h-24" src="/images/vtv4_2.png" alt="" />
            <img className="h-24" src="/images/bongoaigiao.png" alt="" />
            <img className="h-24" src="/images/le2.png" alt="" />
          </div>
        </div>
        <p className="mt-20 font-bold text-5xl text-center mb-12" style={{ fontFamily: "Philosopher", color: "#151748" }}>
          Hình ảnh sự kiện
        </p>
        <div className="flex flex-col gap-6">
          <img className="w-full" src="/images/DSC05011-scaled.jpg" alt="" />
          <div ref={ref5} className="flex gap-6">
            <div style={{ flex: 5 }}>
              <img className="w-full" src="/images/DSC03892-scaled.jpg" alt="" />
            </div>
            <div style={{ flex: 2 }} className="h-full object-cover">
              <img className="w-full object-cover" style={{ height: size5.height }} src="/images/DSC03730-scaled.jpg" alt="" />
            </div>
          </div>
          <div className="flex gap-6">
            <div style={{ flex: 1 }}>
              <img className="w-full" src="/images/DSC04599-1-scaled.jpg" alt="" />
            </div>
            <div style={{ flex: 1 }} className="h-full object-cover">
              <img className="w-full" src="/images/DSC03782-scaled.jpg" alt="" />
            </div>
          </div>
          <div ref={ref5} className="flex gap-6">
            <div style={{ flex: 2 }} className="h-full object-cover">
              <img className="w-full object-cover" style={{ height: size5.height }} src="/images/DSC04763-scaled.jpg" alt="" />
            </div>
            <div style={{ flex: 5 }}>
              <img className="w-full" src="/images/DSC04185-1-scaled.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NgayVietNamOThuySi;
