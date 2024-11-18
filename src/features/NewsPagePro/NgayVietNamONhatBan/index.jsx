import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../HomePage/Footer/Footer";
import { chunkArray } from "../NgayVietNamOAo";

const NgayVietNamONhatBan = () => {
  const renderItem = (item) => {
    return (
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
    );
  };
  return (
    <div className="">
      <img src="/images/banner_nhat.jpg" alt="" />
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
              title: "“Ngày Việt Nam tại Fukuoka 2023”",
              description: `Vào ngày 29 – 30/11/2023 tại Fukuoka, Nhật Bản chương trình “Ngày Việt Nam tại Nhật Bản 2023” do Vụ Văn hóa và UNESCO Bộ Ngoại giao Việt Nam phối hợp với Tổng Lãnh sự quán Việt Nam tại Fukuoka tổ chức, nhân dịp Kỷ niệm 50 năm thiết lập quan hệ ngoại giao Việt Nam – Nhật Bản.`,
              img: "new_nhat_4.jpg",
              link: "https://vnconsulate-fukuoka.org/vi/ngay-viet-nam-tai-fukuoka-2023/",
            },
            {
              title: `"Ngày Việt Nam tại Nhật Bản 2023" - Tôn vinh tình hữu nghị và văn hóa Việt Nam`,
              description: `ừa diễn ra sôi nổi và ấn tượng tại tỉnh Fukuoka (Nhật Bản) ngày 30/11, chương trình “Ngày Việt Nam tại Nhật Bản 2023” không chỉ quảng bá hình ảnh, đất nước và con người Việt Nam tươi đẹp mà còn góp phần thắt chặt tình hữu nghị bền chặt giữa hai quốc gia, hai dân tộc.`,
              img: "new_nhat_5.jpg",
              link: "https://nhandan.vn/ngay-viet-nam-tai-nhat-ban-2023-ton-vinh-tinh-huu-nghi-va-van-hoa-viet-nam-post785552.html?gidzl=-aPT6JA7IMtvKLmUCPX9QVDJMXqcd4izvLPPIYd873hW1bn8Vij9DBPLMqbwoKarv05R5pNx-2H4C8P9RG",
            },
            {
              title: "Ngày Việt Nam tại Nhật Bản 2023: Tôn vinh tình hữu nghị nửa thế kỷ",
              description: `Chương trình "Ngày Việt Nam tại Nhật Bản 2023" sẽ chính thức diễn ra vào ngày 30/11/2023 tại Đại học Y khoa Kyushu, tỉnh Fukuoka, Nhật Bản.`,
              img: "new_nhat.jpg",
            },
            {
              title: "Tái hiện ca cảnh ví, giặm về Phan Bội Châu trước khi Đông Du tại Nhật Bản",
              description: `Đêm biểu diễn nghệ thuật chủ đề "Hương sắc Việt Nam" là điểm nhấn đặc biệt của chương trình “Ngày Việt Nam tại Nhật Bản năm 2023” ...`,
              img: "new_nhat2.jpg",
            },
            {
              title: "Ngày Việt Nam tại Nhật Bản 2023 thu hút công chúng",
              description: "Không gian văn hóa đậm đà bản sắc và chương trình biểu diễn nghệ thuật độc đáo của “Ngày Việt Nam tại Nhật Bản 2023” để lại nhiều ấn tượng trong lòng công chúng.",
              img: "new_nhat_3.jpg",
            },
          ].map((item) =>
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
      <p className="mt-20 font-bold text-5xl text-center mb-10" style={{ fontFamily: "Philosopher", color: "#151748" }}>
        Hình ảnh sự kiện
      </p>
      <div className="flex gap-4 flex-wrap px-4 mb-20">
        {chunkArray(["nhat_2.jpg", "nhat_4.jpg", "nhat_3.jpg", "nhat_5.jpg", "nhat_6.jpg"], 2).map((arr) => (
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

export default NgayVietNamONhatBan;
