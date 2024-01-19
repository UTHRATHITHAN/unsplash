"use client";
import React from "react";

import { Provider } from "react-redux";
import { store } from "@/redux/store/store";
import Search from "@/components/Search";
import Photos from "@/components/Photos";

function page() {
  return (
    <>
      <Provider store={store}>
        <Search />
        <Photos />
      </Provider>
      {/* <div className="bg-emerald-400 h-20 w-20"> hi </div> */}
    </>
  );
}

export default page;
