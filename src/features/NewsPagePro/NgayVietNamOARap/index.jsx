import React from "react";
import Footer from "../../HomePage/Footer/Footer";
import { Link } from "react-router-dom";
import { slugify } from "../../../App";
import { useResize } from "../NgayVietNamOThuySi";

const NgayVietNamOARap = () => {
  const [size, ref] = useResize();
  const tintuc = [
    {
      title: "Đại sứ quán Việt Nam tại Saudi Arabia họp báo thông tin về đất nước và Ngày Việt Nam tại Riyadh",
      description:
        "Chương trình Ngày Việt Nam tại Saudi Arabia nhằm tăng cường giới thiệu, quảng bá về văn hóa, đất nước và con người đến đông đảo công chúng sở tại.",
      img: "a34cf651181ef140a80f.jpg.webp",
      link: "https://baomoi.com/dai-su-quan-viet-nam-tai-saudi-arabia-hop-bao-thong-tin-ve-dat-nuoc-va-ngay-viet-nam-tai-riyadh-c50976718.epi",
      create: "13 Tháng Mười Hai, 2024",
    },
    {
      title: 'Họp báo chính thức khởi động "Ngày Việt Nam tại Ả - rập Xê - út 2024"',
      description: `Ngày 11/12, tại thủ đô Riyadh, Đại sứ quán Việt Nam tại Ả - rập Xê - út đã phối hợp với Bộ Ngoại giao Việt Nam tổ chức họp báo giới thiệu chương trình \"Ngày Việt Nam tại Ả - rập Xê - út 2024\" với đại diện các cơ quan thông tấn báo chí địa phương và quốc tế.`,
      img: "banner_arap.png",
      create: "13 Tháng Mười Hai, 2024",
      hasLocalLink: true,
    },
    {
      title: "Nhiều trải nghiệm hấp dẫn trong “Ngày Việt Nam tại Ả-rập Xê-út 2024”!",
      description: `Tạm biệt Rio de Janiero của đất nước Bra-xin sôi động và sắc màu, “Ngày Việt Nam ở nước ngoài 2024” lần đầu tiên lan tỏa hương sắc tinh hoa Việt Nam tại Ả-rập Xê-út của Trung Đông huyền diệu. Chương trình là hoạt động trọng tâm kỷ niệm 25 năm quan hệ ngoại giao Việt Nam - Ả-rập Xê-út.`,
      img: "ngay-viet-nam-tai-a-rap-xe-ut5.jpg",
      create: "11 Tháng Mười Hai, 2024",
      hasLocalLink: true,
    },
    {
      title: "Hành trình quảng bá văn hóa Việt tại Trung Đông",
      description:
        "Riyadh - thủ đô Ả Rập Xê Út, sẽ trở thành điểm dừng chân tiếp theo của chương trình 'Ngày Việt Nam ở nước ngoài 2024', diễn ra từ 13 -15.12. Đây là cơ hội đặc biệt để văn hóa Việt Nam lan tỏa sâu rộng tại khu vực Trung Đông.",
      img: "img9737-17339125738701874513314.webp",
      link: "https://thanhnien.vn/hanh-trinh-quang-ba-van-hoa-viet-tai-trung-dong-185241211172942279.htm",
      create: "11 Tháng Mười Hai, 2024",
    },
    {
      title: "Mỹ Latin và Trung Đông sẽ là điểm đến của Ngày Việt Nam ở nước ngoài 2024",
      description: "Mỹ Latin và Trung Đông sẽ là điểm đến của Ngày Việt Nam ở nước ngoài 2024",
      img: "banner_arap.png",
    },
    {
      title: "Ngày Việt Nam ở nước ngoài 2024 - Hội tụ tinh hoa ngàn năm, vươn mình trong kỷ nguyên mới",
      description: "Ngày Việt Nam ở nước ngoài 2024 - Hội tụ tinh hoa ngàn năm, vươn mình trong kỷ nguyên mới ...",
      img: "banner_arap.png",
    },
  ];

  const renderCardNew = (item) => {
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
      <img className="mx-auto" src="/images/banner_arap.png" alt="" />
      <div className="container" ref={ref}>
        <p className="mt-20 font-bold text-5xl text-center mb-10" style={{ fontFamily: "Philosopher", color: "#151748" }}>
          Giới thiệu về chương trình
        </p>
        <p>
          Chương trình “Ngày Việt Nam ở nước ngoài 2024” với chủ đề “Hội tụ tinh hoa ngàn năm, vươn mình trong kỷ nguyên mới” sẽ được tổ chức tại thủ đô Riyadh
          của Ả-rập Xê-út nhân dịp kỷ niệm 25 năm quan hệ ngoại giao Việt Nam – Ả-rập Xê-út.Chương trình do Vụ Ngoại giao văn hoá và UNESCO - Bộ Ngoại giao chủ
          trì, phối hợp tổ chức với các đối tác liên quan. Đây là năm thứ 12 chương trình “Ngày Việt Nam ở nước ngoài” được tổ chức, với mục tiêu tăng cường
          quan hệ hữu nghị, đối tác giữa Việt Nam và địa bàn được lựa chọn, đồng thời quảng bá hình ảnh đất nước, con người và văn hoá Việt tới cộng đồng quốc
          tế.
        </p>
        <p className="mt-3">
          Năm nay chương trình “Ngày Việt Nam tại Ả-rập Xê-út” sẽ được tổ chức trong khoảng 13-15/12 tại thủ đô Riyadh. Chương trình tiếp tục giới thiệu Không
          gian văn hoá Việt Nam đậm đà bản sắc tới công chúng sở tại, với nhiều trải nghiệm độc đáo như nặn Tò He truyền thống, in tranh dân gian Đông Hồ và
          thực hiện các tác phẩm sơn mài tinh xảo. Các nghệ sĩ chơi nhạc cụ truyền thống còn nhập vai thành “tố nữ" để tái hiện bộ tranh Tứ Bình giữa đời thực,
          hứa hẹn là cách quảng bá văn hoá Việt vô cùng độc đáo, gây ấn tượng sâu đậm trong lòng khách tham dự.
        </p>
        <p className="mt-20 font-bold text-5xl text-center mb-10" style={{ fontFamily: "Philosopher", color: "#151748" }}>
          Video chương trình
        </p>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4 mt-10">
          <iframe
            style={{ height: size.width > 1024 ? (size.width * 9) / 18 / 2 : (size.width * 9) / 18 }}
            className="w-full lg:h-64 md:h-72"
            src="https://www.youtube.com/embed/SI_H3VT9mZ4?si=No2uw2d-WX_J13o8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            style={{ height: size.width > 1024 ? (size.width * 9) / 18 / 2 : (size.width * 9) / 18 }}
            className="w-full lg:h-64 md:h-72"
            src="https://www.youtube.com/embed/W5P9JG-Th5w?si=FRl5e63I86a8yIwB"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          {/* <iframe
              // style={{ height: (size.width * 9) / 16 }}
              className="w-full lg:h-52 md:h-64 h-72"
              src="https://www.youtube.com/embed/nTRVKpxqYJM?si=_K-eZ1CsUpua9YoZ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe> */}
        </div>
        <iframe
          className="w-full mt-3"
          style={{ height: (size.width * 8) / 16 }}
          src="https://www.youtube.com/embed/xyPdjCanDL0?si=PEb8x8a3w_x_GxCP"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
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
                    <i>
                      (Các nội dung: Triển lãm ảnh quan hệ hai nước, Triển lãm ảnh Việt Nam, 3 nghệ nhân Đông Hồ- Tò he-Sơn mài, Tranh tố nữ bản live/ Biểu diễn
                      nhạc cụ dân tộc).
                    </i>
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
          {tintuc.map((item) =>
            item.link ? (
              <Link to={item.link} target="_blank">
                {renderCardNew(item)}
              </Link>
            ) : item.hasLocalLink ? (
              <Link to={`/tin-tuc/${slugify(item.title)}`}>{renderCardNew(item)}</Link>
            ) : (
              <>{renderCardNew(item)}</>
            )
          )}
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
