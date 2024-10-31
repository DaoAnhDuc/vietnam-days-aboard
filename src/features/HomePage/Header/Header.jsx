import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
function Header() {
  const location = useLocation()
  const [open, setOpen] = useState(false);
  const [dropdownMenu, setDropdownMenu] = useState([]);
  const [hover, setHover] = useState(false);
  useEffect(() => {
    getData();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    handleResize()
    return () => {};
  }, [location]);

  const handleResize = () => {
    setOpen(false);
    setHover(false);
  };

  const getData = async () => {
    const response = await axios.get(`/database/vietnamdaysaboard.json`);
    setDropdownMenu(response.data);
  };

  return (
    <div className="relative w-full h-20" style={{ borderBottom: "1px solid #ffffff6e" }}>
      <div className="container h-full flex justify-between items-center">
        <Link to={"/"}>
          <img className="h-16" src="/images/logo.png" />
        </Link>
        <div className="flex font-bold gap-4 items-center" style={{ fontSize: 15 }}>
          <div className="lg:flex hidden font-bold gap-6 items-center  ">
            <Link to={"/"} className="text-sm cursor-pointer hover:text-red-600" href="#">
              Trang chủ
            </Link>
            <div className="relative" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
              <div className="text-sm cursor-pointer hover:text-red-600">Ngày Việt Nam ở nước ngoài</div>

              <div className={`absolute top-full left-0 pt-8 flex gap-6 bg-white p-4  transition-opacity duration-500 ${hover ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                {dropdownMenu.map((i) => (
                  <div key={i.year} className="flex flex-col gap-3">
                    <div className="text-xs text-gray-600">{i.year}</div>
                    {i.news.map((news) => (
                      <Link to={"/" + news.slug} key={news.slug} className="w-24 text-xs font-normal text-red-600">
                        {news.title}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <Link to={"/tin-tuc"} className="text-sm  cursor-pointer hover:text-red-600">
              Tin tức
            </Link>
            <a className="text-sm cursor-pointer hover:text-red-600">Liên Hệ</a>
            <a className="text-sm cursor-pointer hover:text-red-600">
              Triển lãm trực tuyến <br></br> Tranh sơn mài Việt Nam
            </a>
          </div>
          <div className="flex gap-3">
            <img className="h-6" src="/images/vietnam.png" />
            <img className="h-6" src="/images/united-kingdom.png" />
          </div>
          <button className="lg:hidden flex " onClick={() => setOpen(!open)}>
            <img className="h-8 cursor-pointer" src="/images/bars-icon.png" />
          </button>
        </div>
      </div>

      <div
        className={`absolute right-0 top-full font-bold bg-white w-full lg:flex lg:items-center lg:space-x-6 lg:mt-0 transition-all duration-500 ease-in-out transform ${
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
        style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)", borderTop: "1px solid rgba(0,0,0,0.24)", maxHeight: "80vh", overflow: "auto" }}
      >
        <Link to={"/"} className="block lg:inline-block text-sm px-4 py-4 hover:bg-gray-300" href="#">
          Trang chủ
        </Link>
        <div className="block lg:inline-block text-sm px-4 py-4 hover:bg-gray-300" href="#" onClick={() => setHover(!hover)}>
          Ngày Việt Nam ở nước ngoài
        </div>
        {hover && (
          <div className={`flex flex-col gap-4 pl-10 bg-white p-4  transition-opacity duration-500`}>
            {dropdownMenu.map((i) => (
              <div key={i.year} className="flex gap-3">
                <div className="text-xs text-gray-600">{i.year}</div>
                <div style={{ flex: 1 }} className="flex gap-4 flex-wrap">
                  {i.news.map((news) => (
                    <Link to={"/" + news.slug} key={news.slug} className="w-24 text-xs font-normal text-red-600">
                      {news.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        <Link to={"/tin-tuc"} className="block lg:inline-block text-sm px-4 py-4 hover:bg-gray-300" href="#">
          Tin tức
        </Link>
        <a className="block lg:inline-block text-sm px-4 py-4 hover:bg-gray-300" href="#">
          Liên Hệ
        </a>
        <a className="block lg:inline-block text-sm px-4 py-4 hover:bg-gray-300" href="#">
          Triển lãm trực tuyến Tranh sơn mài Việt Nam
        </a>
      </div>
    </div>
  );
}

export default Header;
