"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { add } from "@/redux/features/ImageSearch/imageSlice";

export default function Home() {
  const [search, setSearch] = useState("flowers");

  const dispatch = useDispatch();

  async function getImage() {
    const res = await axios.get(
      `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_API_KEY}&query=${search}&per_page=12`
    );

    if (res?.data.results) {
      dispatch(add(res.data.results));
      console.log("From search", res.data.results);
    }
  }

  return (
    <div className=" space-x-20 pt-32 pb-28 w-full flex justify-center">
      {/* <p className="text-8xl z-[-1] absolute inset-y-1/2	font-sora bg-cover bg-no-repeat	bg-center		 ">
        Not Unsplash
      </p> */}

      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search an Image"
        className="p-3 md:w-3/12 rounded-md text-black outline-none"
      />
      <button onClick={getImage} className="border p-2 rounded-md px-2 w-28">
        Search
      </button>
    </div>
  );
}
