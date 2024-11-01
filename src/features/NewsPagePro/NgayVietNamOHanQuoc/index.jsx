import React from "react";
import Footer from "../../HomePage/Footer/Footer";
import { chunkArray } from "../NgayVietNamOAo";

const NgayVietNamOHanQuoc = () => {
  const tintuc = [
    {
      title: "Không gian văn hoá Hàn Quốc – 2022",
      description: "",
      img: "317595228_1173810533535500_1699665193184817806_n.jpg",
    },
    {
      title: "Tranh dân gian, tranh sơn mài khắc và trà Việt thu hút du khách ở Gwang Ju, Hàn Quốc",
      description: "Những hoạt động tìm hiểu văn hóa, nghệ thuật Việt của Không gian Văn hóa Việt Nam tại Gwangju đã thu hút du khách Hàn",
      img: "2-1671865431.jpg",
    },
    {
      title: "Thông tin đồ hoạ ngày Việt Nam ở Hàn Quốc – 2022",
      description: "",
      img: "Inforgraphic.jpg",
    },
    {
      title: "Chương trình sự kiện ngày Việt Nam ở Hàn Quốc – 2022",
      description: "",
      img: "VietNamdays_Agenda_Korea-01.jpg",
    },
    {
      title: "Nhiều loại hình nghệ thuật đặc sắc của Việt Nam được giới thiệu tới công chúng Hàn Quốc",
      description: "Trước khi kết thúc chuyến thăm cấp Nhà nước tới Hàn Quốc, chủ tịch nước Nguyễn Xuân Phúc đã đến tham dự Chương trình biểu",
      img: "q-1.jpg",
    },
    {
      title: "Quảng bá hình ảnh đất nước con người Việt tới công chúng Hàn Quốc",
      description: "Là hoạt động mở đầu cho “Ngày Việt Nam tại Hàn Quốc 2022”, chương trình Giao lưu điện ảnh Việt Nam – Hàn Quốc đã",
      img: "2 (1).png",
    },
  ];

  const hinhanhsukien = [
    "IMG_7398.jpg",
    "318080249_1228678621021548_6066054102108903193_n.jpg",
    "IMG_7402.jpg",
    "PR2.2.jpg",
    "318101585_2284579095054973_895423346437967592_n.jpg",
    "317901462_2337783933065416_4997944330359740372_n.jpg",
    "IMG_7418.jpg",
    "PR2.3.jpg",
    "317714833_823490855593193_6122163854127552885_n.jpg",
    "317911847_552254369670257_4626344996618705983_n.jpg",
    "PR1.1.png",
    "PR2.4.jpg",
    "318469750_456549729778100_1185209966691396970_n.jpg",
    "318590577_1121827738699652_8390908283389055876_n.jpg",
    "PR2.1.jpg",
  ];

  return (
    <div className="">
      <img src="/images/Vietnam-Day-2022-Korea.jpg" alt="" />
      <div className="container">
        <p className="mt-20 font-bold text-5xl text-center mb-10" style={{ fontFamily: "Philosopher", color: "#151748" }}>
          Giới thiệu về chương trình
        </p>
        <p>
          Là hoạt động mở đầu cho “Ngày Việt Nam tại Hàn Quốc 2022”, chương trình Giao lưu điện ảnh Việt Nam – Hàn Quốc đã khai mạc vào tối 2/12/2022 tại CGV Myeongdong Station Cinelibrary (Seoul). Để quảng bá hình ảnh đất nước và con người
          Việt Nam, Cục Điện ảnh đã lựa chọn những tác phẩm nổi bật của điện ảnh Việt để công chiếu trong hai ngày 3 – 4/12.
        </p>
        <p className="mt-3">
          Trong buổi khai mạc, chương trình đã vinh dự đón tiếp các vị đại biểu, khách quý: Đại sứ đặc mệnh toàn quyền Việt Nam tại Hàn Quốc Nguyễn Vũ Tùng, Chủ tịch Hội đồng điện ảnh Hàn Quốc (KOFIC) Park Ki Yong, Phó Chủ tịch Tập đoàn CJ
          Hee Kyung Jo Min, Tổng Giám đốc CGV Việt Nam Ko Jea Soo, Phó Cục trưởng Cục Điện ảnh (Bộ Văn hóa, Thể thao và Du lịch) Nguyễn Thị Thu Hà, đại diện Bộ Ngoại giao cùng nhiều khách mời khác.
        </p>
        <button className="bg-red-600 text-white font-bold text-sm px-6 p-2 rounded w-fit mt-6">Xem chi tiết</button>
        <p className="mt-20 font-bold text-5xl text-center mb-4" style={{ fontFamily: "Philosopher", color: "#151748" }}>
          Nội dung chương trình
        </p>
        <div className="flex gap-6 justify-center">
          <p className="text-center">Địa điểm: Hàn Quốc</p>
          <p className="text-center">Thời gian: từ ngày 02-06/12/2022</p>
        </div>
        <div className="mt-10">
          <table className="w-full" border={1} style={{ borderColor: "#f1f1f1" }}>
            <thead>
              <tr className="bg-red-600 text-white">
                <th className="h-12 text-left pl-2" colSpan={2}>
                  Thời gian
                </th>
                <th className="h-12 text-left">Địa điểm</th>
                <th className="h-12 text-left">Chương trình</th>
                <th className="h-12 text-left" colSpan={2}>
                  Hoạt đông chính
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid #dfdfdf" }}>
                <td className="p-2" colSpan={2}>
                  02/12/2022 <br /> 18:00 - 20:45
                </td>
                <td className="p-2">CGV Myeongdong Station Cinelibrary</td>
                <td className="p-2">Khai mạc chương trình, giao lưu điện ảnh Việt Nam - Hàn Quốc</td>
                <td colSpan={2} className="p-2">
                  <ul style={{ listStyleType: "initial", paddingLeft: 20 }}>
                    <li>Giới thiệu Đại biểu</li>
                    <li>Đại sứ Nguyễn Vũ Tùng phát biểu khai mạc</li>
                    <li>Đại diện Hội đồng điện ảnh Hàn Quốc(KOFIC) phát biểu</li>
                    <li>Đại sứ Nguyễn Vũ Tùng tặng quà cho đại diện phía Hàn Quốc và chụp ảnh lưu niệm</li>
                    <li>
                      Chiếu phim: <br />- Giấc mơ gỏi cuốn <br />- Anh thầy ngôi sao
                    </li>
                  </ul>
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid #dfdfdf" }}>
                <td className="p-2" colSpan={2}>
                  03/12/2022 <br /> 18:30 - 22:35
                </td>
                <td className="p-2" rowSpan={2}>
                  Phòng chiếu số 1 CGV Myeongdong Station Cinelibrary
                </td>
                <td className="p-2" rowSpan={2}>
                  Chiếu phim trong chương trình Giao lưu điện ảnh Việt Nam - Hàn Quốc
                </td>
                <td className="p-2">
                  Chiếu phim <br /> - Giấy mơ gói cuốn <br />- Cô gái đến từ ngày hôm qua
                </td>
                <td className="p-2" rowSpan={2}>
                  6 phim ngắn cả CJ: <br /> - Hãy tinht thức và sẵn sàng
                  <br /> - Một khu đất tốt
                  <br /> - Bình
                  <br /> - Mây nhưng không mưa
                  <br /> - Đên tối
                  <br /> - Diễu binh danh dự
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid #dfdfdf" }}>
                <td className="p-2" colSpan={2}>
                  04/12/2022 <br /> 18:30 - 22:10
                </td>
                <td className="p-2">
                  Chiếu phim <br /> - Giấy mơ gỏi cuốn <br /> - Em chưa 18
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid #dfdfdf" }}>
                <td className="p-2" colSpan={2}>
                  05/12/2022 <br /> 10:00 - 18:00
                </td>
                <td className="p-2">Trung tâm Văn hoá và Nghệ thuật Gwangju</td>
                <td className="p-2">Khai trương Không gian Văn hoá Việt Nam</td>
                <td className="p-2" colSpan={2}>
                  <ul style={{ listStyleType: "initial", paddingLeft: 20 }}>
                    <li>Triển lãm ảnh quan hệ ngoại giao Việt Nam - Hàn Quốc</li>
                    <li>Triển lãm ảnh "Sức sống Việt Nam"</li>
                    <li>Triển lãm và trình diễn nghệ thuật làm tranh dân gian Đông Hồ</li>
                    <li>Giới thiệu và hướng dẫn vẽ tranh sơn mài</li>
                    <li>Giới thiệu tinh hoa trà Việt</li>
                    <li>
                      Không gian tương tác trên môi trường số <br /> - Tương tác 3D thực tế ảo "Việt Nam tươi đẹp" <br />- Triển lãm online "Tranh sơn mài Việt Nam" <br />- Game online các trò chơi dân gian Việt Nam "Lạc Việt phiêu lưu ký"
                    </li>
                  </ul>
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid #dfdfdf" }}>
                <td className="p-2" rowSpan={2}>
                  06/12/2022
                </td>
                <td className="p-2">10:00 - 15:00</td>
                <td className="p-2">16:00 - 19:30</td>
                <td className="p-2" rowSpan={2}>
                  Trung tâm văn hoá và Nghệ thuật Gwangju
                </td>
                <td className="p-2" rowSpan={2}>
                  Không gian văn hoá Việt Nam
                </td>
                <td className="p-2">Các trương trình triển lãm, tương tác tại không gian Văn hoá Việt Nam tiếp tục đón khách</td>
              </tr>
              <tr>
                <td className="p-2">16:00 - 19:30</td>
                <td className="p-2">Chương trình biểu diễn nghệ thuật Việt - Hàn chào mừng kỉ niệm 30 năm thiết lập QHNG Việt Nam - Hàn Quốc</td>
                <td className="p-2">
                  <ul style={{ listStyleType: "initial", paddingLeft: 20 }}>
                    <li>Chủ tịch nước và phu nhân cùng đoàn đại biểu cấp cao Việt Nam tới thăm không gian Văn hoá Việt Nam</li>
                    <li>Chương trình biểu diễn nghệ thuật Việt - Hàn chào mừng kỉ niệm 30 năm thiếu lập QHNG Việt Nam - Hàn Quốc</li>
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
        {chunkArray(hinhanhsukien, 4).map((arr) => (
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

export default NgayVietNamOHanQuoc;
