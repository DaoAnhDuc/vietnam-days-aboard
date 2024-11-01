import React from "react";
import Footer from "../../HomePage/Footer/Footer";
import { chunkArray } from "../NgayVietNamOAo";

const NgayVietNamOAnDo = () => {
  const tintuc = [
    {
      title: "Cơ hội vàng xúc tiến du lịch song phương Việt – Ấn",
      description: "Nhân dịp kỷ niệm 50 năm quan hệ ngoại giao Việt Nam – Ấn Độ, Diễn đàn du lịch Việt Nam tại Ấn Độ được",
      img: "PR-1.1.jpg",
    },
    {
      title: "Văn hoá là nền tảng vun đắp tình hữu nghị Việt – Ấn",
      description: "“Thông qua các hoạt động trải nghiệm văn hóa, chúng tôi mong muốn giới thiệu đến người dân Ấn Độ những nét đặc sắc của",
      img: "P-1.1.jpg",
    },
    {
      title: "“Đêm huyền diệu”: toả sáng những giá trị giao thoa văn hoá Việt – Ấn",
      description: "Nằm trong khuôn khổ chương trình Ngày Việt Nam tại Ấn Độ 2022, Chương trình Biểu diễn Nghệ thuật Magical Night (Đêm Huyền diệu) đã",
      img: "An-PR-1.bia_.jpg",
    },
    {
      title: "Khai mạc không gian văn hoá Ấn Độ – 2022",
      description: "",
      img: "PHOTO-2022-12-13-14-38-231.jpg",
    },
    {
      title: "Ngày Việt Nam tại Ấn độ 2022: nửa thế kỷ tình hữu nghị Việt Ấn",
      description: "Thủ đô New Delhi (Ấn Độ), ngày 12/12/2022 – Chương trình Ngày Việt Nam tại Ấn Độ 2022 diễn ra từ ngày 12-14/12/2022, nhân dịp",
      img: "PR1.3.jpg",
    },
    {
      title: "Chương trình sự kiện ngày Việt Nam ở Ấn độ – 2022",
      description: "",
      img: "Vietnam-Days-2022-Post-India-1494-01.jpg",
    },
  ];

  const hinhanhsukien = ["P-1.1.jpg", "PR1.3.jpg", "An-PR-1.2.jpg", "PR1.5.jpg", "An-PR-1.4.jpg", "An-PR-1.1.jpg", "PR1.4.jpg", "An-PR-1.3.jpg", "An-PR-1.bia_.jpg"];

  return (
    <div className="">
      <img src="/images/Vietnam-Days-2022-India.jpg" alt="" />
      <div className="container">
        <p className="mt-20 font-bold text-5xl text-center mb-10" style={{ fontFamily: "Philosopher", color: "#151748" }}>
          Giới thiệu về chương trình
        </p>
        <p>
          Thủ đô New Delhi (Ấn Độ), ngày 12/12/2022 – Chương trình Ngày Việt Nam tại Ấn Độ 2022 diễn ra từ ngày 12-14/12/2022, nhân dịp kỷ niệm 50 năm thiết lập quan hệ ngoại giao Việt Nam – Ấn Độ (7/1/1972 – 7/1/2022). Đây cũng là hoạt
          động cuối cùng trong chuỗi chương trình Ngày Việt Nam ở nước ngoài 2022 do Bộ Ngoại giao chủ trì tổ chức.
        </p>
        <p className="mt-3">
          Việt Nam và Ấn Độ đã ủng hộ lẫn nhau trong sự nghiệp đấu tranh giải phóng dân tộc ngay từ những năm đầu thế kỷ XX. Trải qua nửa thế kỷ phát triển quan hệ ngoại giao, Việt Nam và Ấn Độ đã trở thành Đối tác chiến lược toàn diện, hợp
          tác sâu rộng và hiệu quả trên nhiều lĩnh vực, đạt được nhiều thành tựu chung cũng như mang lại những lợi ích thiết thực cho nhân dân hai nước
        </p>
        <button className="bg-red-600 text-white font-bold text-sm px-6 py-2 rounded w-fit mt-6">Xem chi tiết</button>
        <p className="mt-20 font-bold text-5xl text-center mb-4" style={{ fontFamily: "Philosopher", color: "#151748" }}>
          Nội dung chương trình
        </p>
        <div className="flex gap-6 justify-center">
          <p className="text-center">Địa điểm: Dinh Palffy Palais, Áo</p>
          <p className="text-center">Thời gian: từ ngày 28/09/2022</p>
        </div>
        <div className="mt-10">
          <table className="w-full" border={1} style={{ borderColor: "#f1f1f1" }}>
            <thead>
              <tr className="bg-red-600 text-white">
                <th className="h-12 text-left pl-2">Thời gian</th>
                <th className="h-12 text-left">Địa điểm</th>
                <th className="h-12 text-left">Chương trình</th>
                <th className="h-12 text-left">Hoạt đông chính</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid #dfdfdf" }}>
                <td className="py-2">12/12/2022 18:30 - 20:20</td>
                <td className="py-2">Karmani Auditorium</td>
                <td className="py-2">Chương trình biểu diễn Nghệ thuật Magical Night (Đêm huyền diệu)</td>
                <td className="py-2">
                  <ul style={{ listStyleType: "initial", paddingLeft: 20 }}>
                    <li>Phát biểu chào mừng, khai mạc</li>
                    <li>Chương trình biểu diễn nghệ thuật của đoàn nghệ thuật Nhà hát Ca Múa nhạc dân gian Việt Bắc</li>
                  </ul>
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid #dfdfdf" }}>
                <td className="py-2">13/12/2022 11:30 - 18:00</td>
                <td className="py-2">Khuôn viên của Đại sứ quán Việt Nam tại Ấn Độ</td>
                <td className="py-2">Không gian văn hoá Việt Nam (Vietnamese Cultural Space)</td>
                <td className="py-2">
                  <ul style={{ listStyleType: "initial", paddingLeft: 20 }}>
                    <li>Triển lãm trưng bày sách, ảnh, đặc san về "Sức sống Việt nam" với nội dung chủ đạo về vẻ đẹp văn hoá, đất nước, con người Việt Nam, chủ tịch Hồ Chí Minh với Ấn độ</li>
                    <li>Giới thiệu tranh dân gian Đông Hồ Việt Nam</li>
                    <li>Giới thiệu về nghệ thuật dân gian nặn tò he</li>
                    <li>Biểu diễn tranh sơn mài</li>
                    <li>Trình chiêu video clip quảng bá văn hoá, nghệ thuật, ẩm thực Việt Nam</li>
                    <li>Triễn lãm số 3D về nghệ thuật sơn mài Việt Nam và trải nghiệm văn hoá Việt thông qua các trò chơi điện tử "Lạc Việt Phiêu lưu kí"</li>
                    <li>Biển diễn nhạc cụ dân tộc</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="py-2">14/12/2022 10:00 - 16:00</td>
                <td className="py-2">Hội trường Diên Hồng của Đại sứ quán Việt Nam tại Ấn Độ</td>
                <td className="py-2">Diễn đàn Du lịch Việt Nam tại Ấn Độ</td>
                <td className="py-2">
                  <ul style={{ listStyleType: "initial", paddingLeft: 20 }}>
                    <li>Diễn đàn xúc tiến du lịch của Việt Nam tại Ấn Độ (chương trình gồm 3 phiên: Phiên khai mạc, Phiên tổng quan, Phiên chuyên sâu)</li>
                    <li>Kết nối doanh nghiệp (Networking B2B)</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-20 font-bold text-5xl text-center mb-10" style={{ fontFamily: "Philosopher", color: "#151748" }}>
          Tin tức cập nhật
        </p>
        <div className="grid gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3 ">
          {tintuc.map((item) => (
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
        {chunkArray(hinhanhsukien, 3).map((arr) => (
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

export default NgayVietNamOAnDo;
