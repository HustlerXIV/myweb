import React from "react";

export default function Footer() {
  return (
    <footer
      className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900"
      style={{ marginTop: "40px" }}
    >
      <div className="container  mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              NAPAT JAIYIM
            </span>
          </a>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="flex justify-center text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Napat Jaiyim
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
