import React from "react";

export default function Footer() {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div className="container  mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <span className="flex justify-center text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022
          <a
            href="https://www.linkedin.com/in/napat-theeranitichai-538249195/"
            className="hover:underline"
            style={{ margin: "0px 10px" }}
          >
            Napat Theeranitichai
          </a>
          All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
