import Image from "next/image";
import logo from "../../../../public/clipboard/logo.svg";
import imageComputer from "../../../../public/clipboard/image-computer.png";
import imageDevices from "../../../../public/clipboard/image-devices.png";
import iconBlacklist from "../../../../public/clipboard/icon-blacklist.svg";
import iconText from "../../../../public/clipboard/icon-text.svg";
import iconPreview from "../../../../public/clipboard/icon-preview.svg";
import logoGoogle from "../../../../public/clipboard/logo-google.png";
import logoIBM from "../../../../public/clipboard/logo-ibm.png";
import logoMicrosoft from "../../../../public/clipboard/logo-microsoft.png";
import logoHP from "../../../../public/clipboard/logo-hp.png";
import logoVectorGraphics from "../../../../public/clipboard/logo-vector-graphics.png";
import iconTwitter from "../../../../public/clipboard/icon-facebook.svg";
import iconFacebook from "../../../../public/clipboard/icon-twitter.svg";
import iconInstagram from "../../../../public/clipboard/icon-instagram.svg";

export default function Page() {
  return (
    <div>
      {/* Hero Section */}
      <section
        id="hero"
        className="bg-[url('/../../../../clipboard/bg-header-mobile.png')] sm:bg-[url('/../../../../clipboard/bg-header-desktop.png')] bg-no-repeat bg-contain"
      >
        <div className="clipboard-section mb-40 pt-16">
          <Image src={logo} className="mx-auto my-16" alt="logo" />
          <h3 className="clipboard-h3">A history of everything you copy</h3>
          <p className="clipboard-section-content mb-10 text-2xl">
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>

          {/* Button Container */}
          <div className="clipboard-button-container">
            <a
              href="#"
              className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80 hover:-translate-y-0.5"
            >
              Download for iOS
            </a>
            <a
              href="#"
              className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80 hover:-translate-y-0.5"
            >
              Download for Mac
            </a>
          </div>
        </div>
      </section>

      {/* Snippets Section */}
      <section id="snippets">
        <div className="clipboard-section my-20">
          <h3 className="clipboard-h3">Keep track of your snippets</h3>
          <p className="clipboard-section-content mb-24 ">
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features">
        <div className="clipboard-section my-20">
          <div className="relative flex flex-col md:flex-row md:space-x-32">
            <div className="md:w-1/2">
              <Image
                className="md:absolute top-0 right-[50%]"
                src={imageComputer}
                alt="computer"
              />
            </div>
            {/* Items Container */}
            <div className="flex flex-col items-center mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16">
              <div>
                <h5 className="clipboard-h5">Quick Search</h5>
                <p className="max-w-md  text-grayishBlue">
                  Easily search your snippets by content, category, web address,
                  application, and more.
                </p>
              </div>
              <div>
                <h5 className="clipboard-h5">iCloud Sync</h5>
                <p className="max-w-md  text-grayishBlue">
                  Instantly saves and syncs snippets across all your devices.
                </p>
              </div>
              <div>
                <h5 className="clipboard-h5">Completely History</h5>
                <p className="max-w-md  text-grayishBlue">
                  Retrieve any snippets from the first moment you started using
                  the app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access Anywhere Section */}
      <section id="access">
        <div className="clipboard-section my-20">
          <h3 className="clipboard-h3">Access Clipboard anywhere</h3>
          <p className="clipboard-section-content mb-24">
            Whether you&apos;re on the go, or at your computer, you can access
            all your Clipboard snipets in a few simple clicks.
          </p>
          <Image src={imageDevices} className="mx-auto" alt="devices" />
        </div>
      </section>

      {/* Supercharge Section */}
      <section id="supercharge">
        <div className="clipboard-section my-20">
          <h3 className="clipboard-h3">Supercharge your workflow</h3>
          <p className="clipboard-section-content mb-16">
            We&apos;ve got the tools to boost your productivity.
          </p>
          {/* Items Container */}
          <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
            <div className="flex flex-col items-center space-y-5">
              <Image src={iconBlacklist} className="mb-6" alt="blacklist" />
              <h5 className="clipboard-h5">Create Blacklist</h5>
              <p className="max-w-sm text-grayishBlue">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-5">
              <Image src={iconText} className="mb-6" alt="blacklist" />
              <h5 className="clipboard-h5">Plain Text Snippets</h5>
              <p className="max-w-sm text-grayishBlue">
                Remove unwanted formatting from copied text for a consistent
                look.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-5">
              <Image src={iconPreview} className="mb-6" alt="blacklist" />
              <h5 className="clipboard-h5">Sneak Preview</h5>
              <p className="max-w-md text-grayishBlue">
                Quick preview of all snippets on your Clipboard for easy access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section id="references">
        <div className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0">
          <Image src={logoGoogle} alt="" />
          <Image src={logoIBM} alt="" />
          <Image src={logoMicrosoft} alt="" />
          <Image src={logoHP} alt="" />
          <Image src={logoVectorGraphics} alt="" />
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section id="bottom">
        <div className="clipboard-section my-20">
          <h3 className="clipboard-h3">Clipboard for iOS and MacOS</h3>
          <p className="clipboard-section-content mb-10">
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you&apos;re ready to start adding to your clipboard.
          </p>
          {/* Button Container */}
          <div className="clipboard-button-container">
            <a
              href="#"
              className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80 hover:-translate-y-0.5"
            >
              Download for iOS
            </a>
            <a
              href="#"
              className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80 hover:-translate-y-0.5"
            >
              Download for Mac
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50">
        <div className="section-container">
          <div className="flex flex-col items-center justify-between md:flex-row">
            {/* Image  */}
            <Image src={logo} alt="" className="scale-50" />
            {/* Container for Menus & Social */}
            <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue">
              {/* Menus */}
              <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
                {/* Menu 1 */}
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <a href="#" className="hover:text-strongCyan">
                      FAQs
                    </a>
                  </div>
                  <div>
                    <a href="#" className="hover:text-strongCyan">
                      Contact Us
                    </a>
                  </div>
                </div>
                {/* Menu 2 */}
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <a href="#" className="hover:text-strongCyan">
                      Privacy Policy
                    </a>
                  </div>
                  <div>
                    <a href="#" className="hover:text-strongCyan">
                      Press Kit
                    </a>
                  </div>
                </div>
                {/* Menu 3 */}
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <a href="#" className="hover:text-strongCyan">
                      Install Guide
                    </a>
                  </div>
                </div>
              </div>
              {/* Social Icons */}
              <div className="flex justify-between w-32 py-1">
                <a href="#">
                  <Image
                    src={iconFacebook}
                    alt="facebook"
                    className="duration-200 ficon"
                  />
                </a>
                <a href="#">
                  <Image
                    src={iconTwitter}
                    alt="twitter"
                    className="duration-200 ficon"
                  />
                </a>
                <a href="#">
                  <Image
                    src={iconInstagram}
                    alt="instagram"
                    className="duration-200 ficon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
