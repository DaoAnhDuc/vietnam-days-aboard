import React, { useState } from "react";
import Header from "../HomePage/Header/Header";
import { Link, useNavigate } from "react-router-dom";
import { slugify } from "../../App";

function NewsPage() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const danhmuc = [
    {
      label: "Tin tức",
      total: 54,
    },
    {
      label: "Ngày Việt Nam ở Ấn độ",
      total: 6,
    },
    {
      label: "Ngày Việt Nam ở Áo",
      total: 6,
    },
    {
      label: "Ngày Việt Nam ở Hàn Quốc",
      total: 6,
    },
    {
      label: "Ngày Việt Nam ở Nam Phi",
      total: 5,
    },
  ];
  const data = [
    {
      title: `Trải nghiệm Tết Việt tại “Ngày tìm hiểu Việt Nam 2024”`,
      description: `Sáng ngày 3/2, Chương trình “Ngày tìm hiểu Việt Nam” được tổ chức tại đường...`,
    },
    {
      title: `“Vietnam Days Abroad 2023” promotes country to international friends`,
      description: `“Vietnam Days Abroad 2023” successfully promoted Vietnam’s image, people, and country to international friends, fostering friendship...`,
    },
    {
      title: `“NGÀY VIỆT NAM Ở NƯỚC NGOÀI 2023”: LAN TỎA VĂN HÓA VIỆT TRÊN QUY MÔ TOÀN CẦU`,
      description: `Năm 2023, chuỗi sự kiện “Ngày Việt Nam ở nước ngoài” đã diễn ra thành...`,
    },
    {
      title: `Thăng hoa chương trình nghệ thuật kỷ niệm 50 năm thiết lập quan hệ ngoại giao Việt Nam – Nhật Bản`,
      description: `Vào tối 30/11, trong khuôn khổ Chương trình “Ngày Việt Nam tại Nhật Bản 2023”,...`,
    },
    {
      title: `Người dân Nhật ấn tượng với “Ngày Việt Nam tại Nhật Bản 2023”`,
      description: `Không gian văn hóa đậm đà bản sắc và chương trình biểu diễn nghệ thuật...`,
    },
    {
      title: `Ngày Việt Nam tại Nhật Bản 2023: Tôn vinh tình hữu nghị và văn hóa Việt`,
      description: `Tổ chức vào ngày 30/11 tại tỉnh Fukuoka, chương trình “Ngày Việt Nam tại Nhật...`,
    },
  ];

  return (
    <div style={{ background: "#f5f5f5" }}>
      <Header />
      <img src="https://ngocdiep.vn/wp-content/uploads/2021/08/tin-tuc.jpg" alt="" />
      <div className="mt-10 pb-10">
        <div className="container">
          <p className="font-bold text-5xl text-center mb-10" style={{ fontFamily: "Philosopher", color: "#151748" }}>
            Tin tức
          </p>
          <div>
            <p className="font-bold text-xl" style={{ color: "#151748" }}>
              Chuyên mục
            </p>
            <div className="flex gap-x-2 gap-y-1 text-nowrap flex-wrap mt-2 mb-4" style={{ fontFamily: "Roboto" }}>
              {danhmuc.map((i, index) =>
                active === index ? (
                  <div className="bg-red-600 text-white w-fit text-sm px-3 py-1 rounded-2xl">
                    {i.label} ({i.total})
                  </div>
                ) : (
                  <div onClick={() => setActive(index)} className="w-fit text-sm px-3 py-1 rounded-2xl cursor-pointer" style={{ background: "#dedede" }}>
                    {i.label} ({i.total})
                  </div>
                )
              )}
            </div>
          </div>
          <p className="font-bold text-xl mt-10" style={{ color: "#151748" }}>
            Tin tức liên quan
          </p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-2">
            {data.map((item) => (
              <div className="flex flex-col cursor-pointer" onClick={() => navigate(`/tin-tuc/${slugify(item.title)}`)} style={{ boxShadow: "0px 5px 20px 5px rgba(0, 0, 0, 0.1)", padding: "20px", paddingBottom: 10 }}>
                <div style={{ flex: 1 }}>
                  <Link to={`/tin-tuc/${slugify(item.title)}`}>
                    <img
                      className="w-full h-52 object-cover"
                      src="https://image-en.nhandan.vn/500x282/Uploaded/2024/wpvslysmtys/2024_10_23/23-10-vna-potal-tong-bi-thu-to-lam-va-chu-tich-nuoc-luong-cuong-ban-giao-cong-tac-cua-chu-tich-nuoc-7663900-9897-8923.jpg"
                    />
                    <div className="flex items-center gap-2 mt-2">
                      <img className="h-6" src="./images/clock.png" alt="" />
                      <span style={{ fontFamily: "Roboto" }} className="text-sm mt-2">
                        5 Tháng Hai, 2024
                      </span>
                    </div>
                    <p className="font-bold text-xl mt-2">{item.title}</p>
                    <p className="mt-2">{item.description}</p>
                  </Link>
                </div>
                <Link to={`/tin-tuc/${slugify(item.title)}`}>
                  <div className=" text-red-600 py-3 font-bold text-sm flex items-center gap-2">
                    Xem thêm <img className="h-3" src="./images/arrow-red.svg" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
