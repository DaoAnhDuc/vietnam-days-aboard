import React from "react";
import { useResize } from ".";

const ImagesEvent = () => {
  const [size5, ref5] = useResize();
  return (
    <div ref={ref5} className="flex flex-col gap-1 md:gap-4">
      <img className="w-full" src="/images/DSC05011-scaled.jpg" alt="" />
      <div className="flex gap-1 md:gap-4">
        <div style={{ flex: 5 }}>
          <img className="w-full" style={{ height: (((size5.width * 5) / 7) * 9) / 16 }} src="/images/DSC03892-scaled.jpg" alt="" />
        </div>
        <div style={{ flex: 2 }} className="h-full object-cover">
          <img className="w-full object-cover" style={{ height: (((size5.width * 5) / 7) * 9) / 16 }} src="/images/DSC03730-scaled.jpg" alt="" />
        </div>
      </div>
      <div className="flex gap-1 md:gap-4">
        <div style={{ flex: 1 }}>
          <img className="w-full" src="/images/DSC04599-1-scaled.jpg" alt="" />
        </div>
        <div style={{ flex: 1 }} className="h-full object-cover">
          <img className="w-full" src="/images/DSC03782-scaled.jpg" alt="" />
        </div>
      </div>
      <div ref={ref5} className="flex gap-1 md:gap-4">
        <div style={{ flex: 2 }} className="h-full object-cover">
          <img className="w-full object-cover" style={{ height: (((size5.width * 5) / 7) * 9) / 16 }} src="/images/DSC04763-scaled.jpg" alt="" />
        </div>
        <div style={{ flex: 5 }}>
          <img className="w-full" style={{ height: (((size5.width * 5) / 7) * 9) / 16 }} src="/images/DSC04185-1-scaled.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ImagesEvent;
