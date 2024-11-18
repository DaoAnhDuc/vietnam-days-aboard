import React from "react";
import Footer from "../../HomePage/Footer/Footer";
import { Link } from "react-router-dom";

const NgayVietNamONamPhi = () => {
  const data = [
    {
      title: "Ngày Việt Nam ở Nam Phi ấn tượng với chuỗi hoạt động quảng bá ý nghĩa",
      description:
        "Ngày 14-15/9 tại thủ đô Pretoria, Nam Phi, chương trình Ngày Việt Nam tại Nam Phi 2023 – một trong những hoạt động quan trọng do Bộ Ngoại giao chủ trì tổ chức, đã chính thức khai mạc nhằm hướng tới kỷ niệm 30 năm thiết lập quan hệ ngoại giao Việt Nam-Nam Phi",
      create: "16 Tháng Chín, 2023",
      img: "new_namphi_1.jpg",
      link: "https://ttdn.vn/co-quan-dai-dien-va-kieu-bao/co-quan-dai-dien/ngay-viet-nam-o-nam-phi-an-tuong-voi-chuoi-hoat-dong-quang-ba-y-nghia-86631",
    },
    {
      title: "Không gian văn hóa Việt Nam chào đón công chúng Nam Phi",
      description:
        'Trong hai ngày 14 và 15/9, sự kiện "Ngày Việt Nam tại Nam Phi 2023" đã diễn ra tại thành phố Pretoria, thủ đô hành chính của nước Cộng hòa Nam Phi. Hình ảnh Việt Nam giàu bản sắc và đầy sức sống đã được khắc họa trong Không gian văn hóa Việt Nam tại đây, thu hút đông đảo người dân Nam Phi tham quan và trải nghiệm.',
      create: "16 Tháng Chín, 2023",
      img: "new_namphi_2.jpg",
      link: "https://nhandan.vn/khong-gian-van-hoa-viet-nam-chao-don-cong-chung-nam-phi-post772797.html",
    },
    {
      title: "“Ngày Việt Nam tại Nam Phi 2023”: Những cảm xúc đọng lại!",
      description: "Những hình ảnh, câu chuyện về đất nước, con người Việt Nam tươi đẹp, hiện đại, giàu bản sắc và thân thiện đã được thể hiện thành công trong chuỗi sự kiện “Ngày Việt Nam tại Nam Phi 2023”, ghi…",
      img: "new_namphi_3.webp",
      create: "8 Tháng Mười, 2023",
    },
    {
      title: "Lễ kỷ niệm 30 năm thiết lập quan hệ ngoại giao Việt Nam – Nam Phi được tổ chức thành công tại Pretoria",
      description: "Tối 15/9 theo giờ địa phương, Lễ Kỷ niệm 78 năm Quốc khánh nước CHXHCN Việt Nam và Kỷ niệm 30 năm thiết lập quan hệ ngoại giao Việt Nam – Nam Phi đã được tổ chức long trọng tại…",
      img: "new_namphi_4.webp",
      create: "19 Tháng Chín, 2023",
    },
    {
      title: "Không gian văn hóa đậm đà bản sắc dân tộc trong “Ngày Việt Nam tại Nam Phi 2023”",
      description: "Không gian văn hóa mang thông điệp“Cội nguồn, Sức sống và Sự tiếp nối” trong sự kiện “Ngày Việt Nam tại Nam Phi 2023” đang thu hút sự tham gia của đông đảo công chúng Nam Phi.    “Ngày Việt…",
      img: "new_namphi_5.webp",
      create: "19 Tháng Chín, 2023",
    },
    {
      title: "Chính thức khai trương Không gian văn hóa Việt Nam tại Nam Phi",
      description: "Trong khuôn khổ chuyến thăm chính thức Cộng hòa Nam Phi từ ngày 14-17/9, Phó Chủ tịch nước CHXHCN Việt Nam Võ Thị Ánh Xuân cùng Bộ trưởng Bộ Doanh nghiệp công Nam Phi và Đại sứ Việt Nam tại…",
      img: "new_namphi_6.webp",
      create: " 19 Tháng Chín, 2023",
    },
    {
      title: "NGÀY VIỆT NAM Ở NƯỚC NGOÀI LẦN ĐẦU TIÊN ĐƯỢC TỔ CHỨC TẠI NAM PHI VỚI CHUỖI HOẠT ĐỘNG QUẢNG BÁ Ý NGHĨA",
      description: "Ngày 14-15/09/2023 tại Thủ đô Pretoria, Nam Phi, Chương trình Ngày Việt Nam tại Nam Phi 2023 – một trong những hoạt động quan trọng do Bộ Ngoại giao chủ trì tổ chức – đã chính thức khai mạc nhằm…",
      img: "new_namphi_7.jpg",
      create: "15 Tháng Chín, 2023",
    },
  ];

  const renderItem = (item) => {
    return (
      <div className="flex flex-col cursor-pointer h-full" style={{ boxShadow: "0px 5px 20px 5px rgba(0, 0, 0, 0.1)", padding: "20px", paddingBottom: 10 }}>
        <div style={{ flex: 1 }}>
          <img className="w-full h-52 object-cover" src={`/images/${item.img}`} />
          <div className="flex items-center gap-2 mt-2">
            <img className="h-6" src="/images/clock.png" alt="" />
            <span style={{ fontFamily: "Roboto" }} className="text-sm mt-2">
              {item.create}
            </span>
          </div>
          <p className="font-bold text-xl mt-2">{item.title}</p>
          <p className="mt-2 line-clamp-3">{item.description}</p>
        </div>
        <div className=" text-red-600 py-3 font-bold text-sm flex items-center gap-2">
          Xem thêm <img className="h-3" src="/images/arrow-red.svg" />
        </div>
      </div>
    );
  };

  return (
    <div>
      <img src="/images/banner.jpg" alt="" />
      <div className="container mb-20">
        <p className="font-bold text-5xl text-center mb-10 mt-20" style={{ fontFamily: "Philosopher", color: "#151748" }}>
          Tin tức
        </p>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-2">
          {data.map((item) =>
            item.link ? (
              <Link to={item.link} target="_blank">
                {renderItem(item)}
              </Link>
            ) : (
              <>{renderItem(item)}</>
            )
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NgayVietNamONamPhi;
