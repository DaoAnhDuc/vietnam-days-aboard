import React, { useEffect, useState } from "react";
import Header from "../HomePage/Header/Header";
import { getNews, slugify } from "../../App";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function NewsPageDetail() {
  const { newsId } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    getData();
    return () => {};
  }, [newsId]);

  const getData = async () => {
    try {
      const data = await getNews();
      const newsData = data.find((i) => slugify(i.title) === newsId);
      const response = await axios.get(`/${newsData.template}`);
      setData({
        ...newsData,
        details: response.data,
      });
    } catch (error) {}
  };

  return (
    <div className="pb-40">
      <Header />
      <div className="container">
        {!data && <div className="text-xl font-bold mt-20 text-center text-red-600">Tin tức không tồn tại</div>}
        {data && (
          <>
            <div className="mt-8">
              <Link to={"/"}>Trang chủ</Link>
              <span className="mx-2">/</span>
              <Link to={"/tin-tuc"} className="text-red-600 font-bold">Tin tức</Link>
            </div>
            <div className="mt-4">
              <p className="text-3xl font-bold mb-2">{data.title}</p>
              <div className="flex items-center gap-2 mt-4">
                <img className="h-6" src="/images/clock.png" alt="" />
                <span style={{ fontFamily: "Roboto" }} className="text-sm mt-1">
                  {data.create} - <span className="font-bold text-red-600 text-lg">{data.createBy}</span>
                </span>
              </div>
              <div dangerouslySetInnerHTML={{ __html: data.details }} className="text-justify mt-6 text-black"></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default NewsPageDetail;
