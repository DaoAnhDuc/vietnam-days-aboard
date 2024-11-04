import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../HomePage/Header/Header";
import { Link } from "react-router-dom";
import NgayVietNamOThuySi from "./NgayVietNamOThuySi";
import NgayVietNamOAo from "./NgayVietNamOAo";
import NgayVietNamOAnDo from "./NgayVietNamOAnDo";
import NgayVietNamOHanQuoc from "./NgayVietNamOHanQuoc";
import NgayVietNamONamPhi from "./NgayVietNamONamPhi";
import NgayVietNamOBrazil from "./NgayVietNamOBrazil";
import NgayVietNamOARap from "./NgayVietNamOARap";

function NewPagePro() {
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
    return () => {};
  }, [news]);

  const getData = async () => {
    const response = await axios.get(`/database/vietnamdaysaboard.json`);
    let data = null;
    response.data.forEach((item) => {
      item.news.forEach((i) => {
        if (`/${i.slug}` === window.location.pathname) {
          data = i;
        }
      });
    });
    document.title = data?.title || "Vietnam days aboard";
    setNews(data);
    setLoading(false);
  };

  return (
    <div>
      <Header />
      {!news && !loading && (
        <div className="flex flex-col items-center justify-center bg-gradient-to-br from-red-500 to-red-800 text-white" style={{ height: "calc(100vh - 80px)" }}>
          <h1 className="text-9xl font-bold mb-4 animate-bounce">404</h1>
          <h2 className="text-3xl font-semibold mb-2">Oops! Trang không tìm thấy.</h2>
          <p className="text-lg mb-8 text-center max-w-md">Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển. Hãy quay lại trang chủ và thử lại.</p>
          <Link to="/" className="px-8 py-3 bg-white text-red-700 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
            Trở về trang chủ
          </Link>
        </div>
      )}
      {news && news.slug === "ngay-viet-nam-o-thuy-si" && <NgayVietNamOThuySi />}
      {news && news.slug === "ngay-viet-nam-o-ao" && <NgayVietNamOAo />}
      {news && news.slug === "ngay-viet-nam-o-an-do" && <NgayVietNamOAnDo />}
      {news && news.slug === "ngay-viet-nam-o-han-quoc" && <NgayVietNamOHanQuoc />}
      {news && news.slug === "ngay-viet-nam-o-nam-phi" && <NgayVietNamONamPhi />}
      {news && news.slug === "ngay-viet-nam-o-brasil" && <NgayVietNamOBrazil />}
      {news && news.slug === "ngay-viet-nam-o-a-rap" && <NgayVietNamOARap />}
    </div>
  );
}

export default NewPagePro;
