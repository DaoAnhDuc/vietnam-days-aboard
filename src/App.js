import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./features/HomePage/index";
import NewsPage from "./features/NewsPage/index";
import NewsPageDetail from "./features/NewsPageDetail";
import NewsPagePro from "./features/NewsPagePro";
import axios from "axios";
import "./App.css";
export function slugify(text) {
  return text
    .toLowerCase() // Chuyển sang chữ thường
    .normalize("NFD") // Chuẩn hóa ký tự tiếng Việt
    .replace(/[\u0300-\u036f]/g, "") // Loại bỏ dấu
    .replace(/[^a-z0-9\s-]/g, "") // Loại bỏ ký tự đặc biệt
    .trim() // Xóa khoảng trắng ở đầu và cuối
    .replace(/\s+/g, "-") // Thay khoảng trắng bằng dấu gạch ngang
    .replace(/-+/g, "-"); // Xóa bớt gạch ngang nếu có nhiều cái liền nhau
}

export const getNews = async () => {
  const response = await axios.get('/database/news.json')
  return response.data
} 
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tin-tuc" element={<NewsPage />} />
          <Route path="/tin-tuc/:newsId" element={<NewsPageDetail />} /> {/* Route động */}
          <Route path="*" element={<NewsPagePro />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
