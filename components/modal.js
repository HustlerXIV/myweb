import React from "react";
import { BlueButton, Desc, ResponsiveImage, Topic } from "./style";

export default function MyModal({ setOpenModal }) {
  return (
    <>
      <div className="fixed inset-0 z-10000 overflow-y-auto ">
        <div
          className="fixed inset-0 w-full h-full bg-mainColor bg-opacity-50"
          onClick={() => setOpenModal(false)}
        ></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg p-6 mx-auto bg-white rounded-md shadow-lg">
            <div className="flex flex-col	justify-center items-center text-center gap-2">
              <ResponsiveImage
                maxWidth="100px"
                MBmaxWidth="100px"
                MB1maxWidth="100px"
                src="/3-with-rocket.png"
              />
              <Topic>Already sent!</Topic>
              <Desc>
                Thank you for your email. <br /> Please expect a response from
                me as soon as possible.
              </Desc>
              <BlueButton
                style={{ width: "50%", marginTop: "30px" }}
                onClick={() => setOpenModal(false)}
              >
                OK
              </BlueButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
