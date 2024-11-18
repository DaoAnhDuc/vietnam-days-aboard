import React from "react";
import Footer from "../../HomePage/Footer/Footer";

const NgayVietNamOARap = () => {
  const tintuc = [
    {
      title: "Mỹ Latin và Trung Đông sẽ là điểm đến của Ngày Việt Nam ở nước ngoài 2024",
      description: "Mỹ Latin và Trung Đông sẽ là điểm đến của Ngày Việt Nam ở nước ngoài 2024",
      img: "banner_arap.png",
    },
    {
      title: "Ngày Việt Nam ở nước ngoài 2024 - Hội tụ tinh hoa ngàn năm, vươn mình trong kỷ nguyên mới",
      description: "Ngày Việt Nam ở nước ngoài 2024 - Hội tụ tinh hoa ngàn năm, vươn mình trong kỷ nguyên mới ...",
      img: "key visual vn br.jpg",
    },
  ];
  return (
    <div className="">
      <img className="mx-auto" src="/images/banner_arap.png" alt="" />
      <div className="container">
        <p className="mt-20 font-bold text-5xl text-center mb-10" style={{ fontFamily: "Philosopher", color: "#151748" }}>
          Giới thiệu về chương trình
        </p>
        <p>
          Chương trình “Ngày Việt Nam ở nước ngoài 2024” với chủ đề “Hội tụ tinh hoa ngàn năm, vươn mình trong kỷ nguyên mới” sẽ được tổ chức tại thủ đô Riyadh của Ả-rập Xê-út nhân dịp kỷ niệm 25 năm quan hệ ngoại giao Việt Nam – Ả-rập
          Xê-út.Chương trình do Vụ Ngoại giao văn hoá và UNESCO - Bộ Ngoại giao chủ trì, phối hợp tổ chức với các đối tác liên quan. Đây là năm thứ 12 chương trình “Ngày Việt Nam ở nước ngoài” được tổ chức, với mục tiêu tăng cường quan hệ
          hữu nghị, đối tác giữa Việt Nam và địa bàn được lựa chọn, đồng thời quảng bá hình ảnh đất nước, con người và văn hoá Việt tới cộng đồng quốc tế.
        </p>
        <p className="mt-3">
          Năm nay chương trình “Ngày Việt Nam tại Ả-rập Xê-út” sẽ được tổ chức trong khoảng 13-15/12 tại thủ đô Riyadh. Chương trình tiếp tục giới thiệu Không gian văn hoá Việt Nam đậm đà bản sắc tới công chúng sở tại, với nhiều trải nghiệm
          độc đáo như nặn Tò He truyền thống, in tranh dân gian Đông Hồ và thực hiện các tác phẩm sơn mài tinh xảo. Các nghệ sĩ chơi nhạc cụ truyền thống còn nhập vai thành “tố nữ" để tái hiện bộ tranh Tứ Bình giữa đời thực, hứa hẹn là cách
          quảng bá văn hoá Việt vô cùng độc đáo, gây ấn tượng sâu đậm trong lòng khách tham dự.
        </p>
        {/* <button className="bg-red-600 text-white font-bold text-sm px-6 p-2 rounded w-fit mt-6">Xem chi tiết</button> */}
        <p className="mt-20 font-bold text-5xl text-center mb-4" style={{ fontFamily: "Philosopher", color: "#151748" }}>
          Nội dung chương trình
        </p>
        <div className="flex gap-6 justify-center">
          <p className="text-center">Địa điểm: Riyadh</p>
          <p className="text-center">Thời gian: từ ngày 13-15/12/2024</p>
        </div>
        <div className="mt-10">
          <table className="w-full" border={1} style={{ borderColor: "#f1f1f1" }}>
            <tbody>
              <tr style={{ borderBottom: "1px solid #dfdfdf" }}>
                <td colSpan={2} className="p-2 bg-red-600 text-white font-bold text-center">
                  Thứ Sáu, 13/12/2024
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid #dfdfdf" }}>
                <td className="p-2 whitespace-nowrap">Cả ngày</td>
                <td className="p-2">
                  <p>Không gian văn hóa Việt Nam tại Ả-rập Xê-út </p>
                  <p>
                    <i>(Các nội dung: Triển lãm ảnh quan hệ hai nước, Triển lãm ảnh Việt Nam, 3 nghệ nhân Đông Hồ- Tò he-Sơn mài, Tranh tố nữ bản live/ Biểu diễn nhạc cụ dân tộc).</i>
                  </p>
                  <p>- Tầng 1, Cultural Palace</p>
                  <p>- Mở cửa tự do</p>
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid #dfdfdf" }}>
                <td colSpan={2} className="p-2 bg-red-600 text-white font-bold text-center">
                  Thứ Bảy, 14/12/2024
                </td>
              </tr>
              <tr>
                <td className="p-2">Cả ngày</td>
                <td className="p-2">
                  <p>Không gian văn hóa Việt Nam tại Ả-rập Xê-út</p>
                  <p>- Tầng 1, Cultural Palace</p>
                  <p>- Mở cửa tự do</p>
                </td>
              </tr>
              {/* <tr style={{ borderBottom: "1px solid #dfdfdf" }}>
                <td className="p-2">
                  <b>11:30-13:30</b>
                </td>
                <td className="p-2">
                  <b>Chương trình giới thiệu ẩm thực Việt Nam</b>
                  <p>- Địa điểm: Học viện quản lý du lịch và khách sạn</p>
                  <p>- Thành phần: Bếp trưởng Nguyễn Thường Quân (VICA), các học viên của học viện</p>
                </td>
              </tr> */}
              <tr style={{ borderBottom: "1px solid #dfdfdf" }}>
                <td colSpan={2} className="p-2 bg-red-600 text-white font-bold text-center">
                  Chủ nhật, 15/12/2024
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid #dfdfdf" }}>
                <td className="p-2">Cả ngày</td>
                <td className="p-2">
                  <p>Không gian văn hóa Việt Nam tại Ả-rập Xê-út</p>
                  <p>- Tầng 1, Cultural Palace</p>
                  <p>- Mở cửa tự do</p>
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid #dfdfdf" }}>
                <td className="p-2">
                  <b>Tối</b>
                </td>
                <td className="p-2">
                  <b>Đêm ẩm thực Việt Nam</b>
                  <p>- Khách sạn Double Tree</p>
                  <p>- Thành phần: Bếp trưởng Nguyễn Thường Quân (VICA), các đầu bếp Việt Nam</p>
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid #dfdfdf" }}>
                <td className="p-2"></td>
                <td className="p-2">Kết thúc chương trình.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-20 font-bold text-5xl text-center mb-10" style={{ fontFamily: "Philosopher", color: "#151748" }}>
          Tin tức cập nhật
        </p>
        {/* <p className="text-center">Đang cập nhật</p> */}
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
      <p className="text-center">Đang cập nhật</p>
      <div className="flex gap-4 flex-wrap px-4 mb-20">
        {[].map((arr) => (
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

export default NgayVietNamOARap;
