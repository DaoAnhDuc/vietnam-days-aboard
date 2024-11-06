
import { FaFacebook, FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <div className="mt-10 pb-16 pt-16 text-white" style={{ background: "#151748" }}>
      <div className="container">
        <div className="flex items-center flex-wrap gap-10 pb-10" style={{ borderBottom: "1px solid #454545" }}>
          <img className="h-24" src="/images/logo-bongoaigiao.png" />
          <div>
            <p className="mt-2">Vui lòng liên lạc để biết thêm thông tin: Vụ Ngoại giao Văn hóa và UNESCO - Bộ ngoại giao Việt Nam</p>
            <p className="mt-2">Phone: (024) 3799 5306</p>
            <p className="mt-2">Email: vietnamdaysabroad.mofa@gmail.com</p>
          </div>
        </div>
        <div className="mt-6 flex justify-between items-center">
          <div className="flex gap-2 text-2xl items-center">
            <a target="_blank" href="https://web.facebook.com/ngayvietnamonuocngoai">
              <FaFacebook />
            </a>
            <a className="text-3xl" target="_blank" href="https://www.youtube.com/channel/UCLvOy7LHvOi0SCcWbcNFAmg">
              <FaYoutube />
            </a>
          </div>
          <div>© 2021 - All rights reserved.</div>
        </div>
      </div>
    </div>
  );
}

export default Footer