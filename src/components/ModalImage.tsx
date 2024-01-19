import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

import Image from "next/image";

function ModalImage({ children, img }: any) {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="w-10/12 h-5/6 max-h-fit 	  bg-black">
        <DialogHeader>
          {/* <DialogTitle>Are you absolutely sure?</DialogTitle> */}
          <DialogDescription>
            <div className="w-full flex space-x-5 ">
              <Image
                className=" rounded-lg object-cover "
                src={img.urls.regular}
                alt={img.description}
                width={2000}
                height={2000}
              />
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default ModalImage;
