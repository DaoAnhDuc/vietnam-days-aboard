import React from "react";
import { chunkArray } from "../NgayVietNamOAo";
import Footer from "../../HomePage/Footer/Footer";

const NgayVietNamOPhap = () => {
  return (
    <div className="">
      <img src="/images/banner_phap.jpg" className="mx-auto" alt="" />
      <div className="container">
        {/* <p className="mt-20 font-bold text-5xl text-center mb-10" style={{ fontFamily: "Philosopher", color: "#151748" }}>
          Giới thiệu về chương trình
        </p> */}
        {/* <p>
          Năm nay chương trình “Ngày Việt Nam tại Ả-rập Xê-út” sẽ được tổ chức trong khoảng 13-15/12 tại thủ đô Riyadh. Chương trình tiếp tục giới thiệu Không gian văn hoá Việt Nam đậm đà bản sắc tới công chúng sở tại, với nhiều trải nghiệm
          độc đáo như nặn Tò He truyền thống, in tranh dân gian Đông Hồ và thực hiện các tác phẩm sơn mài tinh xảo. Các nghệ sĩ chơi nhạc cụ truyền thống còn nhập vai thành “tố nữ" để tái hiện bộ tranh Tứ Bình giữa đời thực, hứa hẹn là cách
          quảng bá văn hoá Việt vô cùng độc đáo, gây ấn tượng sâu đậm trong lòng khách tham dự.
        </p>
        <p className="mt-3">
          Năm nay, “Ngày Việt Nam ở nước ngoài” được tổ chức tại thành phố Rio de Janeiro của Bra-xin trong các ngày 15-17/11, ngay trước thềm Hội nghị thượng đỉnh Nhóm các nền kinh tế phát triển và mới nổi hàng đầu thế giới (G20). Đây là
          thời điểm 20 nền kinh tế lớn nhất hành tinh và nhiều quốc gia thành viên cùng tụ họp, mang đến cả cơ hội lẫn thách thức cho việc tổ chức chương trình.{" "}
        </p> */}
        {/* <button className="bg-red-600 text-white font-bold text-sm px-6 p-2 rounded w-fit mt-6">Xem chi tiết</button> */}
        {/* <p className="mt-20 font-bold text-5xl text-center mb-4" style={{ fontFamily: "Philosopher", color: "#151748" }}>
          Nội dung chương trình
        </p> */}
        <div className="flex gap-6 justify-center">
          {/* <p className="text-center">Địa điểm: RIO</p>
          <p className="text-center">Thời gian: từ ngày 15-17/11/2024</p> */}
        </div>
        <div className="mt-10"></div>
        <p className="mt-20 font-bold text-5xl text-center mb-10" style={{ fontFamily: "Philosopher", color: "#151748" }}>
          Tin tức cập nhật
        </p>
        {/* <p className="text-center">Đang cập nhật</p> */}
        <div className="grid gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3 ">
          {[
            {
              title: "'Ngày Việt Nam tại Pháp 2023' - nhịp cầu văn hóa thắt chặt tình hữu nghị Việt-Pháp",
              description:
                "Chương trình “Ngày Việt Nam tại Pháp 2023” sẽ diễn ra vào ngày 8-9/11 tại Paris, thủ đô Cộng hòa Pháp nhân dịp kỷ niệm 50 năm hai nước thiết lập quan hệ ngoại giao (1973-2023) và 10 năm quan hệ đối tác chiến lược Việt Nam-Pháp (2013-2023).",
              img: "new_phap.jpg",
            },
          ].map((item) => (
            <div className="" style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1))" }}>
              <img className="w-full h-52 object-cover rounded-tl-xl rounded-tr-xl" src={`/images/${item.img}`} />
              <div className="p-5 h-48">
                <p className="line-clamp-3 text-black font-bold text-xl">{item.title}</p>
                <p className="line-clamp-3 text-sm mt-2">{item.description}</p>
              </div>
              <div className="text-center text-red-600 py-3 font-bold text-sm flex justify-center items-center gap-2" style={{ borderTop: "1px solid #eee" }}>
                Xem thêm <img className="h-3" src="/images/arrow-red.svg" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-20 font-bold text-5xl text-center mb-10" style={{ fontFamily: "Philosopher", color: "#151748" }}>
        Hình ảnh sự kiện
      </p>
      <div className="flex gap-4 flex-wrap px-4 mb-20">
        {chunkArray(["phap_1.jpg", "phap_2.jpg", "phap_3.jpg", "phap_4.jpg", "phap_5.jpg", "phap_6.jpg", "phap_7.jpg", "phap_8.jpg", "phap_9.jpg"], 3).map((arr) => (
          <div style={{ flex: 1, minWidth: 300 }} className="flex flex-col gap-4">
            {arr.map((i) => (
              <img className="w-full" src={`/images/${i}`} />
            ))}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default NgayVietNamOPhap;
