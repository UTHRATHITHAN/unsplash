"use client";
import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

import ModalImage from "./ModalImage";

function Photos() {
  const resImages = useSelector((state) => state.ImageReducer.images);

  console.log("From Images", resImages, typeof resImages);
  // console.log("From Images", results);

  return (
    <div className="flex justify-center">
      <div className="w-10/12 flex justify-center">
        <div className=" p-16 w-100 	flex justify-center 	">
          <div className="columns-3 rows-3    ">
            {/* <div className="grid grid-cols-3 "> */}

            {typeof resImages !== "string" ? (
              resImages.map((img, i) => (
                // <div  className=" h-18 grid-flow-col 	gap-2">
                <ModalImage key={img.id} img={img}>
                  <Image
                    className="w-[500px] h-[300px] pb-7 px-2	rounded-md object-cover"
                    src={img.urls.regular}
                    alt={img.description}
                    width="300"
                    height="500"
                  />
                </ModalImage>
                // </div>
              ))
            ) : (
              <span></span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Photos;
{
  /* {resImages.map((image, index) => {
        <Image
          src={image.urls.raw}
          alt={image.alt_description}
          width={50}
          height={50}
          key={image.id}
          className="rounded-md h-fit w-3/12"
        />;
      })} */
}
