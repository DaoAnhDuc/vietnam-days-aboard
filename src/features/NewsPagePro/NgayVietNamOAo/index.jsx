import React from "react";
import Footer from "../../HomePage/Footer/Footer";

export function chunkArray(array, chunkSize) {
  const result = [];

  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    result.push(chunk);
  }

  return result;
}

const NgayVietNamOAo = () => {
  const tintuc = [
    {
      title: "Việt Nam – Điểm đến hứa hẹn cho nhà đầu tư cộng hoà Áo",
      description: "Vừa qua, Bộ trưởng Ngoại giao Bùi Thanh Sơn đã tham dự và phát biểu tại “Diễn đàn doanh nghiệp Việt Nam – Áo”. Sự",
      img: "PRAo.3.jpg",
    },
    {
      title: "Không gian văn hoá Áo – 2022",
      description: "",
      img: "IMG_7486.jpg",
    },
    {
      title: "Chuẩn bị trước sự kiện ngày Việt Nam ở Áo – 2022",
      description: "",
      img: "IMG_7396-1.jpg",
    },
    {
      title: "Lễ kỉ niệm 50 năm thiết lập quan hệ ngoại giao Việt Nam – Áo 2022",
      description: "",
      img: "IMG_7829.jpg",
    },
    {
      title: "Việt Nam – Áo tổ chức lễ kỷ niệm 50 năm thiết lập quan hệ ngoại giao",
      description: "Ngày 28/9/2022, Vụ Ngoại giao Văn hoá và UNESCO, Bộ Ngoại giao phối hợp với Vụ châu u và Đại sứ quán Việt Nam tại",
      img: "IMG_7895-768x432.jpg",
    },
    {
      title: "Đặc sắc không gian văn hoá Việt Nam tại Áo",
      description: "Nằm trong chuỗi hoạt động nổi bật của sự kiện Ngày Việt Nam tại Áo năm 2022, “Không gian văn hóa Việt Nam” đã đem",
      img: "IMG_7468-resized-768x512.jpg",
    },
  ];

  const hinhanhsukien = ["IMG_7829.jpg", "1664366557834.jpg", "IMG_7341.jpg", "IMG_7896-1.jpg", "IMG_7440.jpg", "IMG_7424.jpg", "IMG_7462.jpg", "IMG_7453.jpg"];

  return (
    <div className="">
      <img src="/images/Vietnam-Day-2022-Austria.jpg" alt="" />
      <div className="container">
        <p className="mt-20 font-bold text-5xl text-center mb-10" style={{ fontFamily: "Philosopher", color: "#151748" }}>
          Giới thiệu về chương trình
        </p>
        <p>
          Ngày 28/9/2022, Vụ Ngoại giao Văn hoá và UNESCO, Bộ Ngoại giao phối hợp với Vụ châu u và Đại sứ quán Việt Nam tại Áo đã tổ chức Lễ kỷ niệm 50 năm thiết lập quan hệ ngoại giao Việt Nam – Áo tại phòng hòa nhạc Konzert House, thành
          phố Viên, Áo. Nằm trong khuôn khổ sự kiện “Ngày Việt Nam tại Áo 2022”, đây là hoạt động chính trị – văn hoá đáng nhớ và có ý nghĩa hết sức đặc biệt trong mối quan hệ của hai quốc gia.
        </p>
        <p className="mt-3">
          Năm 2022 là một năm đặc biệt và đáng nhớ vì đây chính là cột mốc đánh dấu một sự kiện trọng đại, một bước ngoặt mới trong quan hệ giữa hai quốc gia Việt – Áo: Kỷ niệm 50 năm thiết lập quan hệ ngoại giao (01/12/1972 – 1/12/2022).
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
          <table className="w-full" style={{ border: "1px solid #f1f1f1" }}>
            <thead>
              <tr className="bg-red-600 text-white">
                <th className="h-12 text-left pl-6">Thời gian</th>
                <th className="h-12 text-left">Địa điểm</th>
                <th className="h-12 text-left">Chương trình</th>
                <th className="h-12 text-left">Hoạt đông chính</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 pl-6">Đang cập nhật</td>
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
      <div className="flex gap-4 flex-wrap px-4">
        {chunkArray(hinhanhsukien, 3).map((arr) => (
          <div style={{ flex: 1, minWidth: 300 }} className="flex flex-col gap-4">
            {arr.map((i) => (
              <img className="w-full" src={`/images/${i}`} />
            ))}
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default NgayVietNamOAo;
