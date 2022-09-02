import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import styled from "styled-components";
import { BlueButton, LetsConnectButton, NavButton } from "./style";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const router = useRouter();

  const navigation = [
    { name: "HOMEPAGE", href: "/" },
    { name: "ABOUT ME", href: "/#about-me" },
    { name: "MY PROJECTS", href: "/#my-projects" },
  ];

  return (
    <Disclosure
      style={{ marginBottom: "30px" }}
      as="nav"
      className="bg-mainColor font-kRegular top-0 z-50"
    >
      {({ open }) => (
        <>
          <div
            data-aos="fade-down"
            className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 "
          >
            <div className="relative flex items-center justify-between h-20">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex text-white items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open Main Menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-end sm:items-stretch sm:justify-end">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4 items-center">
                    {navigation.map((item) => {
                      const isActive = router.asPath === item.href;
                      return (
                        <a key={item.name} href={item.href}>
                          <NavButton>{item.name}</NavButton>
                        </a>
                      );
                    })}
                    <LetsConnectButton>{`LET'S CONNECT`}</LetsConnectButton>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
            </div>
          </div>

          <Disclosure.Panel
            className="sm:hidden"
            style={{ position: "absolute", width: "100%", zIndex: 100 }}
          >
            <div
              data-aos="fade-down"
              className="px-2 pt-2 pb-3 space-y-1 text-white"
              style={{ position: "absolute", width: "100%", zIndex: 100 }}
            >
              {navigation.map((item) => {
                const isActive = router.asPath === item.href;
                return (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      isActive
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                );
              })}
            </div>
            <CoverBg />
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

const CoverBg = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #02457a;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;
