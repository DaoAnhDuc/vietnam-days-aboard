import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import SliderNews from "./Slider/SliderNews";
import { getNews } from "../../App";
import Footer from "./Footer/Footer";
import { useResize } from "../NewsPagePro/NgayVietNamOThuySi";
import SliderVideos from "./Slider/SliderVideos";

function HomePage() {
  const [news, setNews] = useState([]);
  const [size, ref] = useResize();
  // const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    getData();
    return () => {};
  }, []);

  const getData = async () => {
    document.title = "Vietnam days abroad";
    const data = await getNews();
    setNews(data);
  };

  return (
    <div>
      <Header />
      <div>
        <img className="w-full" src={`/images/banner2024.jpg?=${window.VERSION}`}></img>
      </div>
      <div className=" mt-20 pb-16" style={{ borderBottom: "1px solid #dfdfdf" }}>
        <div className="container">
          {/* <p className="font-bold text-5xl text-center" style={{ fontFamily: "Philosopher", color: "#151748" }}>
            Thông cáo báo chí
          </p> */}
          <div className="flex flex-col gap-4">
            {/* <b className="text-2xl text-center">Họp báo công bố "Ngày Việt Nam ở nước ngoài 2024” </b> */}
            <p>
              “Tuần/Ngày Việt Nam ở nước ngoài” là chương trình quảng bá quốc gia thường niên - một trong những nhiệm vụ nằm trong Chiến lược Ngoại giao Văn hóa đến năm 2030 của Việt Nam. Chương trình được Thủ tướng Chính phủ giao Vụ Ngoại
              giao Văn hóa và UNESCO - Bộ Ngoại giao chủ trì tổ chức từ năm 2010 nhằm quảng bá hình ảnh đất nước, con người và văn hóa Việt Nam với bạn vè quốc tế, góp phần đưa quan hệ giữa Việt Nam với các nước đi vào chiều sâu, bền vững
              và tăng cường hữu nghị, sự hiểu biết, tin cậy lẫn nhau, giữa nhân dân các nước với Việt Nam.
            </p>
            <p>
              Sau 12 năm triển khai, thương hiệu sự kiện này đã đặt chân đến 20 QUỐC GIA, mang theo nhiều hoạt động giao lưu, kết nối ở cả ba lĩnh vực CHÍNH TRỊ, KINH TẾ và VĂN HÓA. Chương trình luôn nhận được sự đồng hành, hưởng ứng tích
              cực từ các cơ quan, địa phương, doanh nghiệp, cộng đồng người Việt Nam ở nước ngoài và đông đảo công chúng ở cả trong và ngoài nước.
            </p>
            <p>
              Năm 2024, “Ngày Việt Nam ở nước ngoài” được tổ chức sẽ được tổ chức tại hai quốc gia Bra-xin và Ả-rập Xê-út. Sự kiện đánh dấu mốc kỷ niệm 35 năm thiết lập quan hệ ngoại giao giữa Việt Nam với Bra-xin và 25 năm thiết lập quan
              hệ ngoại giao giữa Việt Nam với Ả-rập Xê-út. Buổi họp báo công bố "Ngày Việt Nam ở nước ngoài 2024" sẽ được tổ chức từ 9h ngày 06/11/2024 tại trụ sở Bộ Ngoại giao - Số 2 Lê Quang Đạo, Nam Từ Liêm, Hà Nội.
            </p>
          </div>
          {/* <p className="text-center">Đang cập nhật...</p> */}
          {/* <p className="font-bold text-xl mt-8" style={{ color: "#1c1c24" }}>
            “NGÀY VIỆT NAM Ở NƯỚC NGOÀI” LẦN ĐẦU ĐƯỢC TỔ CHỨC TẠI BRA-XIN VÀ Ả-RẬP XÊ-ÚT
          </p>
          <p className="font-bold mt-5">
            Hà Nội, ngày 6/11/2024 – Với hai sự kiện được tổ chức ở Bra-xin và Ả-rập Xê-út trong năm 2024, chương trình “Ngày Việt Nam ở nước ngoài” do Bộ Ngoại giao chủ trì tổ chức tiếp tục tăng cường sự hiện diện trên bản đồ thế giới.
          </p>
          <p>
            Chương trình “Ngày Việt Nam ở nước ngoài 2024” với chủ đề “Hội tụ tinh hoa ngàn năm, vươn mình trong kỷ nguyên mới” sẽ lần lượt được tổ chức tại thành phố Rio de Janeiro của Bra-xin và thủ đô Riyadh của Ả-rập Xê-út, nhân dịp kỷ
            niệm 35 năm quan hệ ngoại giao Việt Nam – Bra-xin, 25 năm quan hệ ngoại giao Việt Nam
          </p>
          {showMore && (
            <div className="flex flex-col gap-4 mt-5">
              <p>
                Ả-rập Xê-út. Chương trình do Vụ Ngoại giao văn hoá và UNESCO - Bộ Ngoại giao chủ trì, phối hợp tổ chức với các đối tác liên quan. Đây là năm thứ 12 chương trình “Ngày Việt Nam ở nước ngoài” được tổ chức, với mục tiêu tăng
                cường quan hệ hữu nghị, đối tác giữa Việt Nam và địa bàn được lựa chọn, đồng thời quảng bá hình ảnh đất nước, con người và văn hoá Việt tới cộng đồng quốc tế.{" "}
              </p>
              <p>
                Năm nay, “Ngày Việt Nam ở nước ngoài” được tổ chức tại thành phố Rio de Janeiro của Bra-xin trong các ngày 15-17/11, ngay trước thềm Hội nghị thượng đỉnh Nhóm các nền kinh tế phát triển và mới nổi hàng đầu thế giới (G20).
                Đây là thời điểm 20 nền kinh tế lớn nhất hành tinh và nhiều quốc gia thành viên cùng tụ họp, mang đến cả cơ hội lẫn thách thức cho việc tổ chức chương trình.
              </p>
              <p>
                Bà Lê Thị Hồng Vân, Vụ trưởng Vụ Ngoại giao văn hoá và UNESCO, Trưởng Ban tổ chức Chương trình, chia sẻ: “Do trùng thời điểm với Hội nghị thượng đỉnh G20, Ban tổ chức cần nỗ lực gấp đôi để triển khai các công tác tổ chức,
                hậu cần tại địa bàn Bra-xin. Tuy nhiên, đây cũng là cơ hội để chúng tôi tiếp cận được số lượng lớn đại biểu cấp cao tham dự Hội nghị, qua đó góp phần lan toả nội dung chương trình ‘Ngày Việt Nam ở nước ngoài' tới người dân
                Bra-xin và đông đảo bạn bè quốc tế”.
              </p>
              <p>
                “Ngày Việt Nam tại Bra-xin” dự kiến mang đến nhiều hoạt động biểu diễn đòi hỏi sự chuẩn bị công phu và chuyên nghiệp, lần đầu giới thiệu được những nét tinh hoa văn hoá đặc sắc nhất của Việt Nam như múa lân sư rồng hay biểu
                diễn rối nước. Ban tổ chức và các nghệ nhân đã cùng phát huy tính sáng tạo để thiết kế những đạo cụ biểu diễn nhỏ gọn, linh hoạt nhưng vẫn đảm bảo chất lượng biểu diễn, sử dụng.{" "}
              </p>
              <p>
                Tiếp đó, chương trình “Ngày Việt Nam tại Ả-rập Xê-út” sẽ được tổ chức trong khoảng 13-15/12 tại thủ đô Riyadh. Chương trình tiếp tục giới thiệu Không gian văn hoá Việt Nam đậm đà bản sắc tới công chúng sở tại, với nhiều trải
                nghiệm độc đáo như nặn Tò He truyền thống, in tranh dân gian Đông Hồ và thực hiện các tác phẩm sơn mài tinh xảo. Các nghệ sĩ chơi nhạc cụ truyền thống còn nhập vai thành “tố nữ" để tái hiện bộ tranh Tứ Bình giữa đời thực,
                hứa hẹn là cách quảng bá văn hoá Việt vô cùng độc đáo, gây ấn tượng sâu đậm trong lòng khách tham dự.
              </p>
              <p>
                Nội dung xoay quanh ẩm thực Việt Nam cũng được chú trọng, nhằm đáp ứng nhu cầu tìm hiểu và thưởng thức của đông đảo người dân sở tại. Bếp trưởng Nguyễn Thường Quân, Chủ tịch Hiệp hội Dạy nghề và Việc làm Đầu bếp (VICA), hân
                hạnh là “sứ giả ẩm thực" giới thiệu hàng chục món ăn thuần Việt thông qua nhiều hoạt động phong phú, đa dạng như Workshop dạy nấu ăn, tiệc chiêu đãi, các gian hàng trưng bày và biểu diễn nấu ăn.
              </p>
              <p>
                Trong chương trình Họp báo, các Đại sứ Đặc mệnh toàn quyền nước CHXHCN Việt Nam tại Bra-xin và Ả-rập Xê-út đã gửi thông điệp chào mừng sự kiện “Ngày Việt Nam ở nước ngoài 2024”. Các Đại sứ nhận định Bra-xin và Ả-rập Xê-út
                đều là những quốc gia còn nhiều tiềm năng phát triển hợp tác về mặt văn hoá, việc tổ chức chương trình quảng bá quốc gia ở hai địa bàn này là vô cùng cần thiết, góp phần thắt chặt mối quan hệ hữu nghị, hợp tác với Việt Nam;
                đồng thời tăng cường hình ảnh, sự hiện diện của Việt Nam trên bản đồ thế giới.
              </p>
              <p>
                “Ngày Việt Nam ở nước ngoài” là chương trình quảng bá quốc gia được Thủ tướng Chính phủ giao Vụ Ngoại giao văn hoá và UNESCO - Bộ Ngoại giao chủ trì tổ chức thường niên từ năm 2010. Chương trình thường diễn ra bên lề các
                hoạt động, chuyến thăm của lãnh đạo cấp cao hoặc vào dịp kỷ niệm quan hệ ngoại giao giữa Việt Nam với các nước. Qua nhiều năm tổ chức, chương trình đã xây dựng được thương hiệu riêng và nhận về sự tham gia, hưởng ứng tích
                cực của các doanh nghiệp, tổ chức, địa phương cũng như của bạn bè quốc tế và cộng đồng người Việt Nam ở nước ngoài.
              </p>
              <b>Vui lòng quét mã QR Code để xem Bộ thông tin Họp báo</b>
              <div>
                <img className="w-fit max-w-full" src="/images/qrcode_gt.jpg" alt="" />
              </div>
            </div>
          )} */}
          {/* <button onClick={() => setShowMore(!showMore)} className="bg-red-600 text-white px-4 py-2 text-sm font-bold rounded mt-5">
            {showMore ? "Ẩn bớt" : "Đọc thêm"}
          </button> */}
        </div>
      </div>
      <div className="mt-16 pb-10">
        <div className="container" ref={ref}>
          <video src="https://www.youtube.com/embed/W5P9JG-Th5w?si=FRl5e63I86a8yIwB" autoPlay></video>
          <p className="font-bold text-5xl text-center" style={{ fontFamily: "Philosopher", color: "#151748" }}>
            Video giới thiệu chương trình
          </p>
          <SliderVideos
            data={[
              "https://www.youtube.com/embed/iW3LVcpNiyM?si=GkESP6bz0UsZgDEY",
              "https://www.youtube.com/embed/FEoOru1dZgI?si=K8OinWybOe71wa_5",
              "https://www.youtube.com/embed/xyPdjCanDL0?si=PEb8x8a3w_x_GxCP",
              "https://www.youtube.com/embed/SI_H3VT9mZ4?si=No2uw2d-WX_J13o8",
              "https://www.youtube.com/embed/W5P9JG-Th5w?si=FRl5e63I86a8yIwB",
            ]}
          />

          {/* <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4 mt-10">
            <iframe
              style={{ height: size.width > 1024 ? (size.width * 9) / 18 / 2 : (size.width * 9) / 18 }}
              className="w-full lg:h-64 md:h-72"
              src="https://www.youtube.com/embed/iW3LVcpNiyM?si=GkESP6bz0UsZgDEY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              style={{ height: size.width > 1024 ? (size.width * 9) / 18 / 2 : (size.width * 9) / 18 }}
              className="w-full lg:h-64 md:h-72"
              src="https://www.youtube.com/embed/FEoOru1dZgI?si=K8OinWybOe71wa_5"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              style={{ height: size.width > 1024 ? (size.width * 9) / 18 / 2 : (size.width * 9) / 18 }}
              className="w-full lg:h-64 md:h-72"
              src="https://www.youtube.com/embed/xyPdjCanDL0?si=PEb8x8a3w_x_GxCP"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
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
          </div> */}
        </div>
      </div>
      <div className=" mt-20 pb-10">
        <div className="container">
          <p className="font-bold text-5xl text-center" style={{ fontFamily: "Philosopher", color: "#151748" }}>
            Tin tức
          </p>
          <SliderNews data={news.slice(0, 6)} />
        </div>
      </div>
      <div className="mt-20 pb-16">
        <div className="container">
          <p className="font-bold text-5xl text-center" style={{ fontFamily: "Philosopher", color: "#151748" }}>
            Đơn vị tổ chức
          </p>
          <div className="text-center mt-6">
            <img className="mx-auto" src={`/images/logo-bongoaigiao.png?=${window.VERSION}`} />
            <p className="uppercase mt-3">Bộ Ngoại Giao</p>
          </div>
          <div className="flex items-center gap-10 mt-6">
            <div style={{ flex: 1, borderBottom: "1px solid #dfdfdf" }}></div>
            <div className="text-black text-sm">Đơn vị phối hợp</div>
            <div style={{ flex: 1, borderBottom: "1px solid #dfdfdf" }}></div>
          </div>
          <div className="flex justify-center gap-x-10  flex-wrap">
            <img className="h-24" src="/images/trivietlogo.jpg" />
            <img className="h-24" src="/images/logo-02.png" />
            <img className="h-24" src="/images/logo-03.png" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
