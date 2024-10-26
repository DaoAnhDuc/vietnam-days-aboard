import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import SliderNews from "./Slider/SliderNews";
import { getNews } from "../../App";

function HomePage() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getData();
    return () => {};
  }, []);

  const getData = async () => {
    const data = await getNews();
    setNews(data);
  };

  return (
    <div>
      <Header />
      <div>
        <img className="w-full" src="./images/banner.jpg"></img>
      </div>
      <div className=" mt-20 pb-16" style={{ borderBottom: "1px solid #dfdfdf" }}>
        <div className="container">
          <p className="font-bold text-5xl text-center" style={{ fontFamily: "Philosopher", color: "#151748" }}>
            Thông cáo báo chí
          </p>
          <p className="font-bold text-xl mt-8" style={{ color: "#1c1c24" }}>
            “Ngày Việt Nam tại Nhật Bản 2023” tôn vinh tình hữu nghị trải dài nửa thế kỷ
          </p>
          <p className="font-bold mt-5">
            Được tổ chức vào ngày 30/11 tại tỉnh Fukuoka, Chương trình “Ngày Việt Nam tại Nhật Bản 2023” mang đến nhiều nội dung đổi mới, sáng tạo, nhằm ca ngợi tình hữu nghị bền chặt giữa hai quốc gia, hai dân tộc.
          </p>
          <p className="mt-5">
            Chương trình “Ngày Việt Nam tại Nhật Bản 2023” sẽ diễn ra tại Đại học Y khoa Kyushu, tỉnh Fukuoka trong ngày 30/11. Đây là sự kiện được Bộ Ngoại giao Việt Nam tổ chức nhân dịp kỷ niệm 50 năm quan hệ ngoại giao Việt Nam - Nhật
            Bản (1973-2023).
          </p>
          <button className="bg-red-600 text-white px-4 py-2 text-sm font-bold rounded mt-5">Đọc thêm</button>
        </div>
      </div>
      <div className=" mt-20 pb-10">
        <div className="container">
          <p className="font-bold text-5xl text-center" style={{ fontFamily: "Philosopher", color: "#151748" }}>
            Tin tức
          </p>
          <SliderNews data={news.slice(0, 6)} />
        </div>
      </div>
      <div className="mt-20 pb-16">
        <div className="container">
          <p className="font-bold text-5xl text-center" style={{ fontFamily: "Philosopher", color: "#151748" }}>
            Đơn vị tổ chức
          </p>
          <div className="text-center mt-6">
            <img className="mx-auto" src="./images/logo-bongoaigiao.png" />
            <p className="uppercase mt-3">Bộ Ngoại Giao</p>
          </div>
          <div className="flex items-center gap-10 mt-6">
            <div style={{ flex: 1, borderBottom: "1px solid #dfdfdf" }}></div>
            <div className="text-black text-sm">Đơn vị phối hợp</div>
            <div style={{ flex: 1, borderBottom: "1px solid #dfdfdf" }}></div>
          </div>
          <div className="flex justify-center gap-x-10  flex-wrap">
            <img className="h-24" src="./images/logo-01.png" />
            <img className="h-24" src="./images/logo-02.png" />
            <img className="h-24" src="./images/logo-03.png" />
          </div>
        </div>
      </div>
      <div className="mt-10 pb-16 pt-16 text-white" style={{ background: "#151748" }}>
        <div className="container">
          <div className="flex items-center flex-wrap gap-10 pb-10" style={{ borderBottom: "1px solid #454545" }}>
            <img className="h-24" src="./images/logo.png" />
            <div>
              <p className="mt-2">Vui lòng liên lạc để biết thêm thông tin: Vụ Ngoại giao Văn hóa và UNESCO - Bộ ngoại giao Việt Nam</p>
              <p className="mt-2">Phone: (024) 3799 5306</p>
              <p className="mt-2">Email: vietnamdaysabroad.mofa@gmail.com</p>
            </div>
          </div>
          <div className="mt-6 text-right">
            <div>© 2021 - All rights reserved.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
