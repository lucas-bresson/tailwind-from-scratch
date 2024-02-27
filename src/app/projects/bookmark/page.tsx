"use client";

import { rubik } from "@/app/ui/fonts";
import { useState } from "react";
import Image from "next/image";
import logo from "../../../../public/bookmark/logo-bookmark.svg";
import illustrationHero from "../../../../public/bookmark/illustration-hero.svg";
import imagePanel1 from "../../../../public/bookmark/illustration-features-tab-1.svg";
import imagePanel2 from "../../../../public/bookmark/illustration-features-tab-2.svg";
import imagePanel3 from "../../../../public/bookmark/illustration-features-tab-3.svg";
import logoChrome from "../../../../public/bookmark/logo-chrome.svg";
import logoFirefox from "../../../../public/bookmark/logo-firefox.svg";
import logoOpera from "../../../../public/bookmark/logo-opera.svg";
import logoBookmarkFooter from "../../../../public/bookmark/logo-bookmark-footer.svg";
import iconTwitter from "../../../../public/bookmark/icon-twitter.svg";
import iconFacebook from "../../../../public/bookmark/icon-facebook.svg";

export default function Page() {
  const [hamburger, setHamburger] = useState(false);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className={`${rubik.className} overflow-x-hidden`}>
      <nav className="container relative mx-auto p-6">
        {/* Flex Container for Nav Items */}
        <div className="flex items-center justify-between space-x-20 my-6">
          {/* Logo */}
          <div className="z-30">
            <Image id="logo" src={logo} alt="logo" />
          </div>
          {/* Menu Items */}
          <div className="hidden items-center space-x-10 uppercase text-grayishBlue md:flex">
            <a href="#features" className="tracking-widest hover:text-softRed">
              Features
            </a>
            <a href="#download" className="tracking-widest hover:text-softRed">
              Downloads
            </a>
            <a href="#faq" className="tracking-widest hover:text-softRed">
              FAQ
            </a>
            <a
              href="#"
              className="px-8 py-2 text-white bg-softRed border-2 border-softRed rounded-lg shadow-md hover:text-softRed hover:bg-white"
            >
              Login
            </a>
          </div>
          {/* Hamburger Button */}
          <button
            className={`z-30 block hamburger md:hidden focus:outline-none ${
              hamburger ? "open" : ""
            }`}
            onClick={() => setHamburger((x) => !x)}
          >
            <span
              className={`hamburger-top ${
                hamburger ? "bg-white" : "bg-veryDarkBlue"
              }`}
            ></span>
            <span
              className={`hamburger-middle ${
                hamburger ? "bg-white" : "bg-veryDarkBlue"
              }`}
            ></span>
            <span
              className={`hamburger-bottom ${
                hamburger ? "bg-white" : "bg-veryDarkBlue"
              }`}
            ></span>
          </button>
        </div>
        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-20 ${
            hamburger ? "flex" : "hidden"
          } flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-veryDarkBlue`}
        >
          <div className="w-full py-3 text-center">
            <a href="#features" className="block hover:text-softRed">
              Features
            </a>
          </div>
          <div className="w-full py-3 text-center">
            <a href="#download" className="block hover:text-softRed">
              Download
            </a>
          </div>
          <div className="w-full py-3 text-center">
            <a href="#faq" className="block hover:text-softRed">
              FAQ
            </a>
          </div>
          <div className="w-full py-3 text-center">
            <a href="#" className="block hover:text-softRed">
              Login
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero">
        {/* Container for Image & Content */}
        <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0">
          {/* Content */}
          <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
            <h1 className="text-3xl font-semibold text-center lg:text-6xl lg:text-left">
              A Simple Bookmark Manager
            </h1>
            <p className="max-x-md mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free
            </p>
            {/* Buttons Container */}
            <div className="flex items-center justify-center w-full space-x-4 lg:justify-start">
              <a
                href="#"
                className="p-4 text-sm font-semibold text-white bg-softBlue rounded shadow-md border-2 border-softBlue md:text-base hover:bg-white hover:text-softBlue"
              >
                Get it on Chrome
              </a>
              <a
                href="#"
                className="p-4 text-sm font-semibold text-black bg-gray-300 rounded shadow-md border-2 border-gray-300 md:text-base hover:bg-white hover:text-gray-600"
              >
                Get it on Firefox
              </a>
            </div>
          </div>
          {/* Image */}
          <div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
            <div className="hidden lg:block w-[2000px] h-[300px] left-[30%] absolute rounded-l-full top-52 bg-softBlue" />
            <Image
              className="relative z-10 lg:top-24 xl:top-0 overflow-x-visible"
              src={illustrationHero}
              alt=""
            />
          </div>
        </div>
      </section>

      {/* Features Heading */}
      <section id="features">
        <div className="container mx-auto mt-16 px-6">
          <h2 className="mb-6 text-4xl font-semibold text-center">Features</h2>
          <p className="max-w-md mx-auto text-center text-grayishBlue">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
      </section>

      {/* Features Tabs */}
      <section id="tabs">
        {/* Tabs/Panel Container */}
        <div className="container relative mx-auto my-6 mb-32 mt-12 px-6">
          <div className="hidden lg:block w-[1000px] h-[300px] absolute top-60 right-[60%] rounded-r-full bg-softBlue" />
          {/* Tabs Flex Container */}
          <div className="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row">
            {/* Tab 1 */}
            <div className="flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 hover:cursor-pointer">
              <div
                onClick={() => setActiveTabIndex(0)}
                className={`py-5 ${
                  activeTabIndex === 0 ? "border-b-4 border-softRed" : ""
                }`}
              >
                Simple Bookmarking
              </div>
            </div>
            {/* Tab 2 */}
            <div className="flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 hover:cursor-pointer">
              <div
                onClick={() => setActiveTabIndex(1)}
                className={`py-5 ${
                  activeTabIndex === 1 ? "border-b-4 border-softRed" : ""
                }`}
              >
                Speedy Searching
              </div>
            </div>
            {/* Tab 3 */}
            <div className="flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 hover:cursor-pointer">
              <div
                onClick={() => setActiveTabIndex(2)}
                className={`py-5  ${
                  activeTabIndex === 2 ? "border-b-4 border-softRed" : ""
                }`}
              >
                Easy sharing
              </div>
            </div>
          </div>
          {/* Tab Panels */}
          <div id="panels" className="container mx-auto">
            {/* Panel 1 */}
            <div
              className={`flex flex-col ${
                activeTabIndex !== 0 ? "hidden" : ""
              } py-5 md:flex-row md:space-x-7 panel panel-1`}
            >
              {/* Panel Image */}
              <div className="flex justify-center md:w-1/2">
                <Image className="relative z-10" src={imagePanel1} alt="" />
              </div>
              {/* Panel Content */}
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left">
                  Bookmark in one click
                </h3>
                <p className="text-center text-grayishBlue md:text-left">
                  Organize your bookmarks however you like. Our simple
                  drag-and-drop interface gives you complete control over how
                  you manage your favourite sites.
                </p>
                <div className="mx-auto md:mx-0">
                  <a
                    href="#"
                    className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2"
                  >
                    More Info
                  </a>
                </div>
              </div>
            </div>
            {/* Panel 2 */}
            <div
              className={`flex flex-col ${
                activeTabIndex !== 1 ? "hidden" : ""
              } py-5 md:flex-row md:space-x-7 panel panel-1`}
            >
              {/* Panel Image */}
              <div className="flex justify-center md:w-1/2">
                <Image className="relative z-10" src={imagePanel2} alt="" />
              </div>
              {/* Panel Content */}
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-14 text-3xl font-semibold text-center md:mt-0 md:text-left">
                  Intelligent search
                </h3>
                <p className="text-center text-grayishBlue md:text-left">
                  Our powerful search feature will help you find saved sites in
                  no time at all. No need to trawl through all of your
                  bookmarks.
                </p>
                <div className="mx-auto md:mx-0">
                  <a
                    href="#"
                    className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2"
                  >
                    More Info
                  </a>
                </div>
              </div>
            </div>
            {/* Panel 3 */}
            <div
              className={`flex flex-col ${
                activeTabIndex !== 2 ? "hidden" : ""
              } py-5 md:flex-row md:space-x-7 panel panel-1`}
            >
              {/* Panel Image */}
              <div className="flex justify-center md:w-1/2">
                <Image className="relative z-10" src={imagePanel3} alt="" />
              </div>
              {/* Panel Content */}
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left">
                  Share your bookmarks
                </h3>
                <p className="text-center text-grayishBlue md:text-left">
                  Easily share your bookmarks and collections with others.
                  Create a shareable a link that you can send at the click of a
                  button.
                </p>
                <div className="mx-auto md:mx-0">
                  <a
                    href="#"
                    className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2"
                  >
                    More Info
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Heading */}
      <section id="download">
        <div className="container mx-auto px-6">
          <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
            Download the extension
          </h2>
        </div>
      </section>

      {/* Download Boxes */}
      <section id="download-boxes" className="py-32">
        {/* Boxes Container */}
        <div className="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
          {/* Box 1 */}
          <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
            {/* Image */}
            <div className="flex justify-center">
              <Image src={logoChrome} alt="chrome" />
            </div>
            {/* Text */}
            <h5 className="pt-6 text-xl font-bold">Add to Chrome</h5>
            <p className="text-gray-400">Minimum Version 62</p>
            {/* Dots */}
            <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
              <a
                href="#"
                className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue"
              >
                Add & Install Extension
              </a>
            </div>
          </div>
          {/* Box 2 */}
          <div className="w-full md:w-1/3">
            <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:mt-8">
              {/* Image */}
              <div className="flex justify-center">
                <Image src={logoFirefox} alt="chrome" />
              </div>
              {/* Text */}
              <h5 className="pt-6 text-xl font-bold">Add to Firefox</h5>
              <p className="text-gray-400">Minimum Version 55</p>

              {/* Dots */}
              <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
                <a
                  href="#"
                  className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue"
                >
                  Add & Install Extension
                </a>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="w-full md:w-1/3">
            <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:mt-16">
              {/* Image */}
              <div className="flex justify-center">
                <Image src={logoOpera} alt="chrome" />
              </div>
              {/* Text */}
              <h5 className="pt-6 text-xl font-bold">Add to Opera</h5>
              <p className="text-gray-400">Minimum Version 46</p>

              {/* Dots */}
              <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
                <a
                  href="#"
                  className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue"
                >
                  Add & Install Extension
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Heading */}
      <section id="faq">
        <div className="container mx-auto">
          <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-lg px-6 mx-auto text-center text-graishBlue">
            Here are some of our FAQs. If you have any other questions
            you&apos;d like answered please feel free to email us.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq-accordion">
        {/* Main Container */}
        <div className="container mx-auto px-6 mb-32">
          {/* Accordion Container */}
          <div className="max-w-2xl m-8 mx-auto overflow-hidden">
            {/* Tab 1 */}
            <div className="py-1 border-b outline-none group" tabIndex={1}>
              {/* Tab Flex Container */}
              <div className="flex items-center justify-between py-3 text-gray-500 transition duratin-500 cursor-pointer group ease">
                {/* Tab Title */}
                <div className="transition duration-500 ease group-hover:text-red-500">
                  What is Bookmark?
                </div>
                {/* Arrow */}
                <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </div>
              {/* Tab Inner Content */}
              <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                <p className="py-2 text-justify text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat, repellat amet doloribus consequuntur eos similique
                  provident tempora voluptates iure quia fuga dicta voluptatibus
                  culpa mollitia recusandae delectus id suscipit labore?
                </p>
              </div>
            </div>

            {/* Tab 2 */}
            <div className="py-1 border-b outline-none group" tabIndex={2}>
              {/* Tab Flex Container */}
              <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
                {/* Tab Title */}
                <div className="transition duration-500 ease group-hover:text-red-500">
                  How can I request a new browser?
                </div>
                {/* Arrow */}
                <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </div>

              {/* Tab Inner Content */}
              <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                <p className="py-2 text-justify text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat, repellat amet doloribus consequuntur eos similique
                  provident tempora voluptates iure quia fuga dicta voluptatibus
                  culpa mollitia recusandae delectus id suscipit labore?
                </p>
              </div>
            </div>

            {/* Tab 3 */}
            <div className="py-1 border-b outline-none group" tabIndex={3}>
              {/* Tab Flex Container */}
              <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
                {/* Tab Title */}
                <div className="transition duration-500 ease group-hover:text-red-500">
                  Is there a mobile app?
                </div>
                {/* Arrow */}
                <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </div>

              {/* Tab Inner Content */}
              <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                <p className="py-2 text-justify text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat, repellat amet doloribus consequuntur eos similique
                  provident tempora voluptates iure quia fuga dicta voluptatibus
                  culpa mollitia recusandae delectus id suscipit labore?
                </p>
              </div>
            </div>

            {/* Tab 4 */}
            <div className="py-1 border-b outline-none group" tabIndex={4}>
              {/* Tab Flex Container */}
              <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
                {/* Tab Title */}
                <div className="transition duration-500 ease group-hover:text-red-500">
                  What about other Chromium browsers?
                </div>
                {/* Arrow */}
                <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </div>

              {/* Tab Inner Content */}
              <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                <p className="py-2 text-justify text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat, repellat amet doloribus consequuntur eos similique
                  provident tempora voluptates iure quia fuga dicta voluptatibus
                  culpa mollitia recusandae delectus id suscipit labore?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="bg-softBlue">
        {/* Main Container */}
        <div className="max-w-lg mx-auto py-24">
          <p className="mb-6 text-lg tracking-widest text-center text-white uppercase">
            35,000+ Already Joined
          </p>
          <h2 className="px-3 mb-6 text-3xl font-semibold text-center text-white md:text-4xl">
            Stay up-to-date with what we&apos;re doing
          </h2>

          {/* Form */}
          <form className="flex flex-col items-start justify-center max-w-2xl mx-auto space-y-6 text-base px-6 md:flex-row md:space-y-0 md:space-x-4 md:px-0">
            {/* Input & Button Container */}
            <div className="flex flex-col justify-between items-center mx-auto md:flex-row md:mx-0">
              <input
                type="text"
                className="flex-1 px-6 pt-3 pb-2 mb-4 rounded-lg border-1 border-white focus:outline-none md:mr-3 md:mb-0"
                placeholder="Enter your email address"
              />

              <input
                type="submit"
                className="inline-flex px-6 py-3 font-semibold text-center text-white duration-200 transform rounded-lg cursor-pointer focus:outline-none bg-softRed hover:opacity-90"
                value="Contact Us"
              />
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-veryDarkBlue">
        {/* Footer Flex Container */}
        <div className="container flex flex-col items-center justify-between mx-auto space-y-16 px-6 md:flex-row md:space-y-0">
          {/* Logo/Menu Container */}
          <div className="flex flex-col items-center justify-between space-y-8 text-lg font-light md:flex-row md:space-y-0 md:space-x-14 text-grayishBlue">
            <Image src={logoBookmarkFooter} alt="" className="mb-1" />

            <a href="#features" className="uppercase hover:text-softRed">
              Features
            </a>
            <a href="#download" className="uppercase hover:text-softRed">
              Download
            </a>
            <a href="#faq" className="uppercase hover:text-softRed">
              FAQ
            </a>
          </div>

          {/* Social Container */}
          <div className="flex space-x-10">
            <a href="#">
              <Image src={iconFacebook} alt="" className="h-6 ficon" />
            </a>
            <a href="#">
              <Image src={iconTwitter} alt="" className="h-6 ficon" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
