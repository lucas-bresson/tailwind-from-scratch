"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { josefinSans, alata } from "@/app/ui/fonts";
import logo from "../../../../public/loopstudios/logo.svg";
import interactiveDesktop from "../../../../public/loopstudios/desktop/image-interactive.jpg";
import imageDeepEarth from "../../../../public/loopstudios/desktop/image-deep-earth.jpg";
import imageNightArcade from "../../../../public/loopstudios/desktop/image-night-arcade.jpg";
import imageSoccerTeam from "../../../../public/loopstudios/desktop/image-soccer-team.jpg";
import imageGrid from "../../../../public/loopstudios/desktop/image-grid.jpg";
import imageFromAbove from "../../../../public/loopstudios/desktop/image-from-above.jpg";
import imagePocket from "../../../../public/loopstudios/desktop/image-pocket-borealis.jpg";
import imageCuriosity from "../../../../public/loopstudios/desktop/image-curiosity.jpg";
import imageFisheye from "../../../../public/loopstudios/desktop/image-fisheye.jpg";
import imageDeepEarthMobile from "../../../../public/loopstudios/mobile/image-deep-earth.jpg";
import imageNightArcadeMobile from "../../../../public/loopstudios/mobile/image-night-arcade.jpg";
import imageSoccerTeamMobile from "../../../../public/loopstudios/mobile/image-soccer-team.jpg";
import imageGridMobile from "../../../../public/loopstudios/mobile/image-grid.jpg";
import imageFromAboveMobile from "../../../../public/loopstudios/mobile/image-from-above.jpg";
import imagePocketMobile from "../../../../public/loopstudios/mobile/image-pocket-borealis.jpg";
import imageCuriosityMobile from "../../../../public/loopstudios/mobile/image-curiosity.jpg";
import imageFisheyeMobile from "../../../../public/loopstudios/mobile/image-fisheye.jpg";
import iconFacebook from "../../../../public/loopstudios/icon-facebook.svg";
import iconTwitter from "../../../../public/loopstudios/icon-twitter.svg";
import iconPinterest from "../../../../public/loopstudios/icon-pinterest.svg";
import iconInstagram from "../../../../public/loopstudios/icon-instagram.svg";

export default function Page() {
  const [hamburger, setHamburger] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <section
        id="hero"
        className="bg-[url('/../../../../loopstudios/mobile/image-hero.jpg')] md:bg-[url('/../../../../loopstudios/desktop/image-hero.jpg')] bg-no-repeat bg-cover"
      >
        {/* Hero Container */}
        <div className="container max-w-6xl mx-auto px-6 py-12">
          {/* Menu/Logo Container */}
          <nav className="flex items-center justify-between font-bold text-white">
            {/* Logo */}
            <Image src={logo} alt="logo" />
            {/* Menu */}
            <div
              className={`hidden h-10 ${alata.className} md:flex md:space-x-8`}
            >
              <div className="group">
                <a href="#">About</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
              </div>
              <div className="group">
                <a href="#">Careers</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
              </div>
              <div className="group">
                <a href="#">Events</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
              </div>
              <div className="group">
                <a href="#">Products</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
              </div>
              <div className="group">
                <a href="#">Support</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
              </div>
            </div>
            {/* Hamburger Button */}
            <div className={`md:hidden ${hamburger ? "open" : ""} z-40`}>
              <button
                id="menu-btn"
                type="button"
                className="block hamburger md:hidden focus:outline-none"
                onClick={() => setHamburger((x) => !x)}
              >
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </button>
            </div>
          </nav>
          {/* Mobile Menu */}
          <div
            id="menu"
            className={`absolute top-0 bottom-0 left-0 ${
              hamburger ? "flex" : "hidden"
            }  flex-col self-end w-full h-2/3 py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black`}
          >
            <a href="#" className="hover:text-pink-500">
              About
            </a>
            <a href="#" className="hover:text-pink-500">
              Careers
            </a>
            <a href="#" className="hover:text-pink-500">
              Events
            </a>
            <a href="#" className="hover:text-pink-500">
              Products
            </a>
            <a href="#" className="hover:text-pink-500">
              Support
            </a>
          </div>
          <div
            className={`max-w-lg mt-32 mb-32 p-4 ${josefinSans.className} text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl`}
          >
            Impressive experiences that deliver
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section id="feature">
        {/* Feature Container */}
        <div
          className={`relative container flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0`}
        >
          {/* Image */}
          <Image src={interactiveDesktop} alt="" />
          {/* Text Container */}
          <div className="flex flex-col items-center top-48 pr-0 bg-white md:items-start md:absolute md:right-0 md:py-20 md:pl-20">
            <h2
              className={`${josefinSans.className} max-w-lg mt-10 mb-6 text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left`}
            >
              The leader in interactive VR
            </h2>
            <p
              className={`${josefinSans.className} max-w-md text-center md:text-left`}
            >
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </section>

      {/* Creations Section */}
      <section id="creations">
        {/* Creations Container */}
        <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900">
          {/* Creations Header */}
          <div className="flex justify-center mb-20 md:justify-between">
            <h2
              className={`${josefinSans.className} text-4xl text-center uppercase md:text-left md:text-5xl`}
            >
              Our creations
            </h2>
            <button
              className={`${alata.className} hidden loopstudios-button md:block`}
            >
              See all
            </button>
          </div>

          {/* Items Container */}
          <div className="loopstudios-items-container">
            {/* Item 1 */}
            <div className="group loopstudios-item">
              {/* Desktop Image */}
              <Image
                src={imageDeepEarth}
                className="hidden w-full duration-200 md:block group-hover:scale-110"
                alt=""
              />
              {/* Mobile Image */}
              <Image
                src={imageDeepEarthMobile}
                className="w-full md:hidden"
                alt=""
              />
              {/* Item Gradient */}
              <div className="loopstudios-item-gradient" />
              {/* Item Text */}
              <h5 className="loopstudios-h5">Deep Earth</h5>
            </div>
            {/* Item 2 */}
            <div className="group loopstudios-item">
              <Image
                src={imageNightArcade}
                className="hidden w-full duration-200 md:block group-hover:scale-110"
                alt=""
              />
              <Image
                src={imageNightArcadeMobile}
                className="w-full md:hidden"
                alt=""
              />
              <div className="loopstudios-item-gradient" />
              <h5 className="loopstudios-h5">Night Arcade</h5>
            </div>
            {/* Item 3 */}
            <div className="group loopstudios-item">
              <Image
                src={imageSoccerTeam}
                className="hidden w-full duration-200 md:block group-hover:scale-110"
                alt=""
              />
              <Image
                src={imageSoccerTeamMobile}
                className="w-full md:hidden"
                alt=""
              />
              <div className="loopstudios-item-gradient" />
              <h5 className="loopstudios-h5">Soccer Team VR</h5>
            </div>
            {/* Item 4 */}
            <div className="group loopstudios-item">
              {/* Desktop Image */}
              <Image
                src={imageGrid}
                className="hidden w-full duration-200 md:block group-hover:scale-110"
                alt=""
              />
              {/* Mobile Image */}
              <Image
                src={imageGridMobile}
                className="w-full md:hidden"
                alt=""
              />
              {/* Item Gradient */}
              <div className="loopstudios-item-gradient" />
              {/* Item Text */}
              <h5 className="loopstudios-h5">The Grid</h5>
            </div>
          </div>

          {/* Items Container 2 */}
          <div className="loopstudios-items-container mt-10">
            {/* Item 1 */}
            <div className="group loopstudios-item">
              <Image
                src={imageFromAbove}
                className="hidden w-full duration-200 md:block group-hover:scale-110"
                alt=""
              />
              <Image
                src={imageFromAboveMobile}
                className="w-full md:hidden"
                alt=""
              />
              <div className="loopstudios-item-gradient" />
              <h5 className="loopstudios-h5">From up above VR</h5>
            </div>
            {/* Item 2 */}
            <div className="group loopstudios-item">
              <Image
                src={imagePocket}
                className="hidden w-full duration-200 md:block group-hover:scale-110"
                alt=""
              />
              <Image
                src={imagePocketMobile}
                className="w-full md:hidden"
                alt=""
              />
              <div className="loopstudios-item-gradient" />
              <h5 className="loopstudios-h5">Pocket Borealis</h5>
            </div>
            {/* Item 3 */}
            <div className="group loopstudios-item">
              <Image
                src={imageCuriosity}
                className="hidden w-full duration-200 md:block group-hover:scale-110"
                alt=""
              />
              <Image
                src={imageCuriosityMobile}
                className="w-full md:hidden"
                alt=""
              />
              <div className="loopstudios-item-gradient" />
              <h5 className="loopstudios-h5">The Curiosity</h5>
            </div>
            {/* Item 4 */}
            <div className="group loopstudios-item">
              <Image
                src={imageFisheye}
                className="hidden w-full duration-200 md:block group-hover:scale-110"
                alt=""
              />
              <Image
                src={imageFisheyeMobile}
                className="w-full md:hidden"
                alt=""
              />
              <div className="loopstudios-item-gradient" />
              <h5 className="loopstudios-h5">Make It Fisheye</h5>
            </div>
          </div>
          {/* Bottom Button Container */}
          <div className="flex justify-center mt-10 md:hidden">
            <button
              className={`${alata.className} loopstudios-button w-full md:hidden`}
            >
              See all
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-black">
        {/* Container */}
        <div className="container max-w-6xl py-10 mx-auto">
          {/* Footer Flex Container */}
          <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
            {/* Menu & Logo Container */}
            <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
              {/* Logo */}
              <div className="h-8">
                <Image src={logo} className="w-44 md:ml-3" alt="logo" />
              </div>
              {/* Menu */}
              <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
                <div className="h-10 group">
                  <a href="#">About</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
                </div>
                <div className="h-10 group">
                  <a href="#">Careers</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
                </div>
                <div className="h-10 group">
                  <a href="#">Events</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
                </div>
                <div className="h-10 group">
                  <a href="#">Products</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
                </div>
                <div className="h-10 group">
                  <a href="#">Support</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
                </div>
              </div>
            </div>
            {/* Social & Copy Container */}
            <div className="flex flex-col items-start justify-between space-y-4 text-gray-500 md:mr-3">
              {/* Icons */}
              <div className="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
                <div className="h-8 group">
                  <a href="#">
                    <Image className="h-6" src={iconFacebook} alt="" />
                  </a>
                </div>
                <div className="h-8 group">
                  <a href="#">
                    <Image className="h-6" src={iconTwitter} alt="" />
                  </a>
                </div>
                <div className="h-8 group">
                  <a href="#">
                    <Image className="h-6" src={iconPinterest} alt="" />
                  </a>
                </div>
                <div className="h-8 group">
                  <a href="#">
                    <Image className="h-6" src={iconInstagram} alt="" />
                  </a>
                </div>
              </div>
              {/* Copy */}
              <div className="font-bold">
                &copy; 2024 Loopstudios. All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
