import Image from "next/image";

const Footer = (): JSX.Element => (
  <footer className="bg-veryDarkBlue">
    <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
      <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
        <div className="mx-auto my-6 text-center text-white md:hidden">
          Copyright &copy; 2022, All Rights Reserved
        </div>
        <div>
          <Image
            src="/images/logo-white.svg"
            alt="logo white"
            width={146}
            height={24}
            className="h-8"
          />
        </div>
        <div className="flex justify-center space-x-4">
          <a href="#">
            <Image
              src="/images/icon-youtube.svg"
              alt="youtube"
              width={20}
              height={20}
              className="h-8 w-8"
            />
          </a>
          <a href="#">
            <Image
              src="/images/icon-twitter.svg"
              alt="twitter"
              width={20}
              height={20}
              className="h-8 w-8"
            />
          </a>
          <a href="#">
            <Image
              src="/images/icon-pinterest.svg"
              alt="pinterest"
              width={20}
              height={20}
              className="h-8 w-8"
            />
          </a>
          <a href="#">
            <Image
              src="/images/icon-instagram.svg"
              alt="instagram"
              width={20}
              height={20}
              className="h-8 w-8"
            />
          </a>
          <a href="#">
            <Image
              src="/images/icon-facebook.svg"
              alt="facebook"
              width={20}
              height={20}
              className="h-8 w-8"
            />
          </a>
        </div>
      </div>
      <div className="flex justify-around space-x-32">
        <ul className="flex flex-col space-y-3 text-white">
          <li>
            <a href="#" className="hover:text-brightRed">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-brightRed">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-brightRed">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-brightRed">
              About
            </a>
          </li>
        </ul>
        <ul className="flex flex-col space-y-3 text-white">
          <li>
            <a href="#" className="hover:text-brightRed">
              Careers
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-brightRed">
              Community
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-brightRed">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-between">
        <form>
          <div className="flex space-x-3">
            <input
              type="text"
              className="flex-1 px-4 rounded-full focus:outline-none"
              placeholder="Updates in your inbox"
            />
            <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
              Go
            </button>
          </div>
        </form>
        <div className="hidden text-white md:block">
          Copyright &copy; 2022, All Rights Reserved
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
