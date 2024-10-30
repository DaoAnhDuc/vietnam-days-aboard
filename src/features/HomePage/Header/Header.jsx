import React, { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative w-full h-20" style={{ borderBottom: "1px solid #ffffff6e" }}>
      <div className="container h-full flex justify-between items-center">
        <Link to={"/"}>
          <img className="h-16" src="/images/logo.png" />
        </Link>
        <div className="flex font-bold gap-4 items-center" style={{ fontSize: 15 }}>
          <div className="lg:flex hidden font-bold gap-6 items-center  ">
            <Link to={"/"} className="text-sm" href="#">
              Trang chủ
            </Link>
            <a className="text-sm">Ngày Việt Nam ở nước ngoài</a>
            <Link to={"/tin-tuc"} className="text-sm">
              Tin tức
            </Link>
            <a className="text-sm">Liên Hệ</a>
            <a className="text-sm">
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
        style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)", borderTop: "1px solid rgba(0,0,0,0.24)" }}
      >
        <Link to={"/"} className="block lg:inline-block text-sm px-4 py-4 hover:bg-gray-300" href="#">
          Trang chủ
        </Link>
        <a className="block lg:inline-block text-sm px-4 py-4 hover:bg-gray-300" href="#">
          Ngày Việt Nam ở nước ngoài
        </a>
        <Link to={'/tin-tuc'} className="block lg:inline-block text-sm px-4 py-4 hover:bg-gray-300" href="#">
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
