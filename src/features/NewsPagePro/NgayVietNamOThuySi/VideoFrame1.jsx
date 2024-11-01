import { useResize } from ".";

const VideoFrame1 = () => {
  const [size2, ref2] = useResize();
  return (
    <div ref={ref2} style={{ flex: 3 }}>
      <iframe className="w-full min-w-80" style={{ height: (size2.width * 9) / 16 }} src="https://www.youtube.com/embed/UZA5i_kTZw0?rel=0" frameborder="0"></iframe>
    </div>
  );
};

export default VideoFrame1;
