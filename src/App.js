import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="w-full h-20" style={{ borderBottom: "1px solid #ffffff6e" }}>
        <div className="container h-full flex justify-between items-center">
          <img className="h-16" src="https://vietnamdaysabroad.mofa.gov.vn/wp-content/uploads/2023/01/vietnamday-abroad-logo.png" />
          <div className="flex font-bold gap-6 items-center" style={{ fontSize: 15 }}>
            <a className="text-sm" href="#">
              Trang chủ
            </a>
            <a className="text-sm">Ngày Việt Nam ở nước ngoài</a>
            <a className="text-sm">Tin tức</a>
            <a className="text-sm">Liên Hệ</a>
            <a className="text-sm">
              Triển lãm trực tuyến <br></br> Tranh sơn mài Việt Nam
            </a>
            <div className="flex gap-3">
              <img className="h-6" src="./images/vietnam.png" />
              <img className="h-6" src="./images/united-kingdom.png" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <img className="w-full" src="https://vietnamdaysabroad.mofa.gov.vn/wp-content/uploads/2023/09/cover-web-khong-logo.jpg"></img>
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
      <div className=" mt-20 pb-16">
        <div className="container">
          <p className="font-bold text-5xl text-center" style={{ fontFamily: "Philosopher", color: "#151748" }}>
            Tin tức
          </p>
          <div className="mt-10 flex gap-5">
            {[1, 2, 3].map((i) => (
              <div className="" style={{ boxShadow: "0px 4px 32px rgba(0, 0, 0, 0.08)" }}>
                <img
                  className="w-full h-52 object-cover"
                  src="https://image-en.nhandan.vn/500x282/Uploaded/2024/wpvslysmtys/2024_10_23/23-10-vna-potal-tong-bi-thu-to-lam-va-chu-tich-nuoc-luong-cuong-ban-giao-cong-tac-cua-chu-tich-nuoc-7663900-9897-8923.jpg"
                />
                <div className="p-5">
                  <p className="line-clamp-3 text-black font-bold text-xl">Foreign leaders extend congratulations to Vietnamese State President</p>
                  <p className="line-clamp-3 text-sm mt-2">Leaders of countries around the world have sent messages and letters of congratulations to Luong Cuong on his election as State President of Vietnam.</p>
                </div>
                <div className="text-center text-red-600 py-3 font-bold text-sm" style={{ borderTop: "1px solid #E3E3E3" }}>
                  Xem thêm
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-20 pb-16">
        <div className="container">
          <p className="font-bold text-5xl text-center" style={{ fontFamily: "Philosopher", color: "#151748" }}>
            Đơn vị tổ chức
          </p>
          <div className="text-center mt-6">
            <img className="mx-auto" src="https://vietnamdaysabroad.mofa.gov.vn/wp-content/uploads/2022/09/222px-Emblem_of_North_Vietnam.svg_-150x150.png" />
            <p className="uppercase mt-3">Bộ Ngoại Giao</p>
          </div>
          <div className="flex items-center gap-10 mt-6">
            <div style={{ flex: 1, borderBottom: "1px solid #dfdfdf" }}></div>
            <div className="text-black text-sm">Đơn vị phối hợp</div>
            <div style={{ flex: 1, borderBottom: "1px solid #dfdfdf" }}></div>
          </div>
          <div className="flex justify-center gap-10">
            <img className="h-24" src="https://vietnamdaysabroad.mofa.gov.vn/wp-content/uploads/2023/09/logo-01.png" />
            <img className="h-24" src="https://vietnamdaysabroad.mofa.gov.vn/wp-content/uploads/2023/09/logo-02.png" />
            <img className="h-24" src="https://vietnamdaysabroad.mofa.gov.vn/wp-content/uploads/2023/09/logo-03.png" />
          </div>
        </div>
      </div>
      <div className="mt-10 pb-16 pt-16 text-white" style={{ background: "#151748" }}>
        <div className="container">
          <div className="flex items-center  gap-10 pb-10" style={{ borderBottom: "1px solid #454545" }}>
            <img className="h-24" src="https://vietnamdaysabroad.mofa.gov.vn/wp-content/uploads/2023/01/vietnamday-abroad-logo.png" />
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

export default App;
