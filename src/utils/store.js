import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import tabSlice from "./tabSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    tab: tabSlice,
    search: searchSlice,
    chat: chatSlice,
  },
});

export default store;
