import React from "react";
import { useResize } from ".";

const NewsItem = ({ i }) => {
  const [size3, ref3] = useResize();
  return (
    <div key={i.title} ref={ref3} className="rounded-xl" style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
      <img style={{ height: (size3.width * 10) / 16 }} className="w-full object-cover rounded-tl-xl rounded-tr-xl" src={i.img} alt="" />
      <div className="flex flex-col gap-3 p-5">
        <b className="text-lg" style={{ color: "#54595f" }}>
          {i.title}
        </b>
        <p className="text-sm" style={{ color: "#777" }}>
          {i.description}
        </p>
        <div className="text-green-500 text-xs font-bold">Đọc thêm »</div>
      </div>
    </div>
  );
};

export default NewsItem;
