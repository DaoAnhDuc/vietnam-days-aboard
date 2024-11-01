import React from "react";
import { useResize } from ".";

const UserItem = ({ i }) => {
  const [size4, ref4] = useResize();
  return (
    <div key={i.title} ref={ref4} className="rounded-xl">
      <img style={{ height: size4.width }} className="w-full object-cover rounded-tl-xl rounded-tr-xl" src={i.img} alt="" />
      <div className="flex flex-col gap-3 p-4">
        <b className="text-lg" style={{ color: "#54595f" }}>
          {i.title}
        </b>
        <p className="" style={{ color: "#777" }}>
          {i.description}
        </p>
      </div>
    </div>
  );
};

export default UserItem;
