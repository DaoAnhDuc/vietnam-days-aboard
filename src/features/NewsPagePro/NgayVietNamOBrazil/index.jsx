import React from "react";
import Footer from "../../HomePage/Footer/Footer";
import { useResize } from "../NgayVietNamOThuySi";
import { Link } from "react-router-dom";

const NgayVietNamOBrazil = () => {
  const tintuc = [
    {
      title: "Người dân Brazil nặn tò he hình quả bóng, say sưa xem võ cổ truyền Việt",
      description: "Những câu chuyện dân gian, màn trình diễn nghệ thuật truyền thống, không gian phố cổ dẫn dắt công chúng Brazil vào hành trình khám phá văn hóa Việt đầy cuốn hút.",
      img: "bai-pr-1-ngay-viet-nam-tai-braxin-ver2docx-1731906534090.webp",
      link: "https://dantri.com.vn/giai-tri/nguoi-dan-brazil-nan-to-he-hinh-qua-bong-say-sua-xem-vo-co-truyen-viet-20241118121820342.htm",
    },
    {
      title: "“Ngày Việt Nam tại Brazil” lần đầu mang Không gian văn hóa Việt tới khu vực Mỹ Latinh",
      description:
        'Chiều ngày 17/11 (theo giờ địa phương), tại Rio-de-Janeiro, Brazil, Thủ tướng Phạm Minh Chính đã dự chương trình "Ngày Việt Nam tại Brazil" với chủ đề "Hội tụ tinh hoa ngàn năm văn hoá - Vươn mình trong kỷ nguyên giàu mạnh, thịnh vượng"',
      img: "6de98ef1-f641-4c22-a07f-dc92c0a7e624.jfif",
      link: "https://videophapluat.baophapluat.vn/viet-nam-ky-nguyen-moi/ngay-viet-nam-tai-brazil-lan-dau-mang-khong-gian-van-hoa-viet-toi-khu-vuc-my-latinh-183039.html",
    },
    {
      title: "Thủ tướng Phạm Minh Chính dự Chương trình “Ngày Việt Nam tại Brazil”",
      description: "Dự Ngày Việt Nam tại Brazil, Thủ tướng Phạm Minh Chính kỳ vọng đây là khởi đầu cho giai đoạn hợp tác văn hóa nhiều hơn, mạnh mẽ hơn, sâu rộng hơn giữa hai nước",
      img: "18112024_1.jpg",
      link: "https://doanhnghiepvn.vn/made-in-vietnam/san-pham/thu-tuong-chinh-phu-hoa-minh-vao-cac-hoat-dong-trong-ngay-viet-nam-tai-bra-xin-2024/20241120024736271",
    },
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
      <img src="/images/key visual vn br.jpg" alt="" />
      <div className="container">
        <p className="mt-20 font-bold text-5xl text-center mb-10" style={{ fontFamily: "Philosopher", color: "#151748" }}>
          Giới thiệu về chương trình
        </p>
        <p>
          Năm nay chương trình “Ngày Việt Nam tại Ả-rập Xê-út” sẽ được tổ chức trong khoảng 13-15/12 tại thủ đô Riyadh. Chương trình tiếp tục giới thiệu Không gian văn hoá Việt Nam đậm đà bản sắc tới công chúng sở tại, với nhiều trải nghiệm
          độc đáo như nặn Tò He truyền thống, in tranh dân gian Đông Hồ và thực hiện các tác phẩm sơn mài tinh xảo. Các nghệ sĩ chơi nhạc cụ truyền thống còn nhập vai thành “tố nữ" để tái hiện bộ tranh Tứ Bình giữa đời thực, hứa hẹn là cách
          quảng bá văn hoá Việt vô cùng độc đáo, gây ấn tượng sâu đậm trong lòng khách tham dự.
        </p>
        <p className="mt-3">
          Năm nay, “Ngày Việt Nam ở nước ngoài” được tổ chức tại thành phố Rio de Janeiro của Bra-xin trong các ngày 15-17/11, ngay trước thềm Hội nghị thượng đỉnh Nhóm các nền kinh tế phát triển và mới nổi hàng đầu thế giới (G20). Đây là
          thời điểm 20 nền kinh tế lớn nhất hành tinh và nhiều quốc gia thành viên cùng tụ họp, mang đến cả cơ hội lẫn thách thức cho việc tổ chức chương trình.{" "}
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-6">
          <iframe
            // style={{ height: (size.width * 9) / 16 }}
            className="w-full lg:h-52 md:h-64 h-72"
            src="https://www.youtube.com/embed/t0HwjG0PdJY?si=Bq5V-kLl7ORqwN1o"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            // style={{ height: (size.width * 9) / 16 }}
            className="w-full lg:h-52 md:h-64 h-72"
            src="https://www.youtube.com/embed/u6KhytxVIzQ?si=J-82aMRk7XU2QFwc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            // style={{ height: (size.width * 9) / 16 }}
            className="w-full lg:h-52 md:h-64 h-72"
            src="https://www.youtube.com/embed/nTRVKpxqYJM?si=_K-eZ1CsUpua9YoZ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        {/* <button className="bg-red-600 text-white font-bold text-sm px-6 p-2 rounded w-fit mt-6">Xem chi tiết</button> */}
        <p className="mt-20 font-bold text-5xl text-center mb-4" style={{ fontFamily: "Philosopher", color: "#151748" }}>
          Nội dung chương trình
        </p>
        <div className="flex gap-6 justify-center">
          <p className="text-center">Địa điểm: RIO</p>
          <p className="text-center">Thời gian: từ ngày 15-17/11/2024</p>
        </div>
        <div className="mt-10">
          <table className="w-full" border={1} style={{ borderColor: "#f1f1f1" }}>
            <thead>
              <tr className="bg-red-600 text-white">
                <th className="h-12 text-left px-2">Thời gian dự kiến</th>
                <th className="h-12 text-left px-2">Nội dung</th>
                <th className="h-12 text-left px-2">Kịch bản chi tiết</th>
                <th className="h-12 text-left px-2">Đơn vị thực hiện</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr style={{ borderBottom: "1px solid #dfdfdf" }}>
                <td className="p-2">
                  06/11 <br /> (hoặc có thể thay đổi theo lịch đoàn tiền trạm VPCP)
                </td>
                <td className="p-2">Đoàn BNG 1 rời HN</td>
                <td className="p-2">Sân bay Nội Bài</td>
                <td className="p-2">02 BNG</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #dfdfdf" }}>
                <td className="p-2">07-10/11</td>
                <td className="p-2">Làm việc với địa điểm, công ty thuê trang thiết bị, xe vận chuyển... Giải quyết các vấn đề phát sinh</td>
                <td className="p-2"></td>
                <td className="p-2">02 BNG</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #dfdfdf" }}>
                <td className="p-2">11/11</td>
                <td className="p-2">Làm thủ tục và Nhận hàng cargo</td>
                <td className="p-2"></td>
                <td className="p-2">02 BNG</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #dfdfdf" }}>
                <td className="p-2">12-13/11</td>
                <td className="p-2">Rà soát lắp đặt tại Quỹ Thiên văn học</td>
                <td className="p-2"></td>
                <td className="p-2">02 BNG</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #dfdfdf" }}>
                <td className="p-2">13/11</td>
                <td className="p-2">Sân bay Nội Bài</td>
                <td className="p-2">Bay Hà Nội - Rio</td>
                <td className="p-2">02 BNG, KGVH, Nghệ thuật, LSR</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #dfdfdf" }}>
                <td className="p-2">14/11</td>
                <td className="p-2">Dựng KGVH (cả ngày)</td>
                <td className="p-2">
                  <ul style={{ listStyleType: "initial", paddingLeft: 20 }}>
                    <li> - Setup KGVH, Khu vực ẩm thực và Sân khấu</li>
                    <li> - Chuẩn bị thực phẩm cho ẩm thực</li>
                    <li> - Tập luyện cho Chương trình NT</li>
                  </ul>
                </td>
                <td className="p-2">BNG, KGVH</td>
              </tr> */}
              <tr style={{ borderBottom: "1px solid #dfdfdf" }}>
                <td className="p-2">15/11</td>
                <td className="p-2">Mở cửa rộng rãi đón khách 1 phần Không Gian Văn hóa (09:00 - 16:00)</td>
                <td className="p-2">
                  <p>1. Không gian Văn hóa: </p>
                  <ul style={{ listStyleType: "inherit", paddingLeft: 20, marginLeft: 10 }}>
                    <li> Triển lãm ảnh “Sắc màu văn hóa Việt Nam” và các Di sản tại Việt Nam được UNESCO công nhận;</li>
                    <li> Trưng bày bộ tranh 54 dân tộc Việt Nam; </li>
                    <li> Triển lãm tranh sơn mài “Lan tỏa sắc màu truyền thống” và tương tác với nghệ nhân.</li>
                    <li> Giới thiệu và tương tác tranh Đông Hồ; </li>
                    <li> Tương tác làm TÒ HE - Trò chơi dân gian Việt Nam;</li>
                    <li> Biểu diễn Múa rối nước;</li>
                  </ul>
                  <p>2. Trải nghiệm mặc trang phục Việt và chụp ảnh lưu niệm tại góc văn hóa làng quê Việt Nam</p>
                  <p>3. Biểu diễn và giới thiệu nhạc cụ dân tộc </p>
                  <p>4. Biểu diễn múa rồng và võ thuật.</p>
                </td>
                <td className="p-2">BNG, KGVH, Nghệ thuật, LSR</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #dfdfdf" }}>
                <td className="p-2" rowSpan={2}>
                  16/11
                </td>
                <td className="p-2">Mở cửa rộng rãi đón khách 1 phần Không Gian Văn hóa (09:00 - 16:00)</td>
                <td className="p-2">
                  <p>1. Không gian Văn hóa:</p>
                  <ul style={{ listStyleType: "inherit", paddingLeft: 20, marginLeft: 10 }}>
                    <li>Triển lãm ảnh “Sắc màu văn hóa Việt Nam” và các Di sản tại Việt Nam được UNESCO công nhận;</li>
                    <li>Trưng bày bộ tranh 54 dân tộc Việt Nam; </li>
                    <li>Triển lãm tranh sơn mài “Lan tỏa sắc màu truyền thống” và tương tác với nghệ nhân.</li>
                    <li>Giới thiệu và tương tác tranh Đông Hồ; </li>
                    <li>Tương tác làm TÒ HE - Trò chơi dân gian Việt Nam;</li>
                    <li>Biểu diễn Múa rối nước;</li>
                  </ul>
                  <p>2. Trải nghiệm mặc trang phục Việt và chụp ảnh lưu niệm tại góc văn hóa làng quê Việt Nam</p>
                  <p>3. Biểu diễn và giới thiệu nhạc cụ dân tộc.</p>
                  <p>4. Biểu diễn múa rồng và võ thuật.</p>
                </td>
                <td className="p-2">BNG, KGVH, Nghệ thuật, LSR</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #dfdfdf" }}>
                <td className="p-2">Tổng duyệt Chương trình Biểu diễn nghệ thuật</td>
                <td className="p-2"></td>
                <td className="p-2">BNG, Nghệ Thuật, LSR</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #dfdfdf" }}>
                <td className="p-2">17/11</td>
                <td className="p-2">Khai trương triển lãm tranh 35 năm Quan hệ Việt Nam - Bra-xin</td>
                <td className="p-2">
                  <p>Dự kiến theo lịch trình của LĐCC</p>
                  <ul style={{ listStyleType: "none", paddingLeft: 20 }}>
                    <li>- Múa rồng/ lân sư chào đón đoàn LĐCC tại đường vào.</li>
                    <li>- Lễ Cắt băng khai trương Triển lãm ảnh 35 năm thiết lập quan hệ Ngoại giao Việt Nam – Bra-xin; </li>
                    <li>- LĐCC thăm khu vực Không gian Văn hóa Việt Nam.</li>
                    <li>- LĐCC tham dự Chương trình Biểu diễn Nghệ thuật Kỷ niệm 35 năm quan hệ Việt Nam - Bra-xin.</li>
                  </ul>
                  <i>(Lịch trình cụ thể sẽ update khi có thông tin chính thức)</i>
                </td>
                <td>BNG, KGVH, Nghệ thuật, LSR</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #dfdfdf" }}>
                <td className="p-2">18/11</td>
                <td className="p-2">Dọn dẹp đóng gói đồ đạc tại Quỹ thiên văn</td>
                <td className="p-2">Dọn dẹp 1 phần KGVH/ khu vực biểu diễn nghệ thuật, đóng gói các vật dụng mang về VN</td>
                <td className="p-2">BNG, KGVH, Nghệ thuật, LSR</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #dfdfdf" }}>
                <td className="p-2">19/11</td>
                <td className="p-2">Đoàn rời Rio</td>
                <td className="p-2">Có mặt tại sân bay Rio về Hà Nội</td>
                <td className="p-2">BNG, KGVH, Nghệ thuật, LSR</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #dfdfdf" }}>
                <td className="p-2">20/11</td>
                <td className="p-2">Đoàn có mặt tại Hà Nội</td>
                <td className="p-2"></td>
                <td className="p-2"></td>
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

export default NgayVietNamOBrazil;
