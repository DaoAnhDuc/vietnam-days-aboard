import { configureStore } from '@reduxjs/toolkit';
import { newsSlice } from './newsSlice';

export const store = configureStore({
  reducer: {
    news: newsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Tắt kiểm tra tuần tự hóa (không khuyến khích)
    }),
});
