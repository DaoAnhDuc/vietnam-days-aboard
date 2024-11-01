import React, { useEffect, useState } from "react";
import Header from "../HomePage/Header/Header";
import { getNews, slugify } from "../../App";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../HomePage/Footer/Footer";

function NewsPageDetail() {
  const { newsId } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getData();
    return () => {};
  }, [newsId]);

  const getData = async () => {
    try {
      const data = await getNews();
      const newsData = data.find((i) => slugify(i.title) === newsId);
      const response = await axios.get(`/${newsData.template}`);
      document.title = newsData?.title || "Vietnam days aboard";
      setLoading(false);
      setData({
        ...newsData,
        details: response.data,
      });
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      {!data && !loading && (
        <div className="flex flex-col items-center justify-center bg-gradient-to-br from-red-500 to-red-800 text-white" style={{ height: "calc(100vh - 80px)" }}>
          <h1 className="text-9xl font-bold mb-4 animate-bounce">404</h1>
          <h2 className="text-3xl font-semibold mb-2">Oops! Trang không tìm thấy.</h2>
          <p className="text-lg mb-8 text-center max-w-md">Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển. Hãy quay lại trang chủ và thử lại.</p>
          <Link to="/" className="px-8 py-3 bg-white text-red-700 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
            Trở về trang chủ
          </Link>
        </div>
      )}
      <div className="min-h-screen" style={{ maxWidth: 680, margin: "0 auto" }}>
        {data && (
          <>
            <div className="mt-8">
              <Link to={"/"}>Trang chủ</Link>
              <span className="mx-2">/</span>
              <Link to={"/tin-tuc"} className="text-red-600 font-bold">
                Tin tức
              </Link>
            </div>
            <div className="mt-4">
              <p className="text-3xl font-bold mb-2">{data?.title}</p>
              <div className="flex items-center gap-2 mt-4">
                <img className="h-6" src="/images/clock.png" alt="" />
                <span style={{ fontFamily: "Roboto" }} className="text-sm mt-1">
                  {data.create} - <span className="font-bold text-red-600 text-lg">{data.createBy}</span>
                </span>
              </div>
              <div id="wrapper-news-template" dangerouslySetInnerHTML={{ __html: data.details }} className="text-justify mt-6 text-black pb-20"></div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default NewsPageDetail;
