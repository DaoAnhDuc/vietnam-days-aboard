import React, { useEffect, useState } from "react";
import Header from "../HomePage/Header/Header";
import { Link, useNavigate } from "react-router-dom";
import { getNews, slugify } from "../../App";

function NewsPage() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const danhmuc = [
    {
      label: "Tin tức",
      total: 54,
    },
    {
      label: "Ngày Việt Nam ở Ấn độ",
      total: 6,
    },
    {
      label: "Ngày Việt Nam ở Áo",
      total: 6,
    },
    {
      label: "Ngày Việt Nam ở Hàn Quốc",
      total: 6,
    },
    {
      label: "Ngày Việt Nam ở Nam Phi",
      total: 5,
    },
  ];
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
    return () => { };
  }, []);

  const getData = async () => {
    try {
      const data = await getNews();
      document.title = "Tin tức";
      setData(data);
    } catch (error) { }
  };

  return (
    <div style={{ background: "#f5f5f5" }}>
      <Header />
      <img src="/images/tin-tuc.jpg" alt="" />
      <div className="mt-10 pb-10">
        <div className="container">
              <p className="font-bold text-5xl text-center mb-10" style={{ fontFamily: "Philosopher", color: "#151748" }}>
                Tin tức
              </p>
          {
            false && <>
              <div>
                <p className="font-bold text-xl" style={{ color: "#151748" }}>
                  Chuyên mục
                </p>
                <div className="flex gap-x-2 gap-y-1 text-nowrap flex-wrap mt-2 mb-4" style={{ fontFamily: "Roboto" }}>
                  {danhmuc.map((i, index) =>
                    active === index ? (
                      <div className="bg-red-600 text-white w-fit text-sm px-3 py-1 rounded-2xl">
                        {i.label} ({i.total})
                      </div>
                    ) : (
                      <div onClick={() => setActive(index)} className="w-fit text-sm px-3 py-1 rounded-2xl cursor-pointer" style={{ background: "#dedede" }}>
                        {i.label} ({i.total})
                      </div>
                    )
                  )}
                </div>
              </div>
              <p className="font-bold text-xl mt-10" style={{ color: "#151748" }}>
                Tin tức liên quan
              </p>
            </>
          }
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-2">
            {data.map((item) => (
              <div className="flex flex-col cursor-pointer" onClick={() => navigate(`/tin-tuc/${slugify(item.title)}`)} style={{ boxShadow: "0px 5px 20px 5px rgba(0, 0, 0, 0.1)", padding: "20px", paddingBottom: 10 }}>
                <div style={{ flex: 1 }}>
                  <Link to={`/tin-tuc/${slugify(item.title)}`}>
                    {/* <img className="w-full h-52 object-cover" src="/images/default.png" /> */}
                    <div className="flex items-center gap-2 mt-2">
                      <img className="h-6" src="/images/clock.png" alt="" />
                      <span style={{ fontFamily: "Roboto" }} className="text-sm mt-2">
                        {item.create}
                      </span>
                    </div>
                    <p className="font-bold text-xl mt-2">{item.title}</p>
                    <p className="mt-2">{item.description}</p>
                  </Link>
                </div>
                <Link to={`/tin-tuc/${slugify(item.title)}`}>
                  <div className=" text-red-600 py-3 font-bold text-sm flex items-center gap-2">
                    Xem thêm <img className="h-3" src="/images/arrow-red.svg" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
