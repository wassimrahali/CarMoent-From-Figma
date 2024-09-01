"use client";
import Logo from "../../../public/assets/Logo.svg";
import Image from "next/image";
import { footerNavs } from "../constants/index";
import { Plus_Jakarta_Sans } from "next/font/google";

const plus_Jakarta_Sans = Plus_Jakarta_Sans({ subsets: ["latin"] });
const Footer = () => {
  return (
    <div className={` ${plus_Jakarta_Sans.className}`}>
      <footer className="text-gray-500 bg-white px-4 py-5 mx-auto md:px-8">
        <div className="gap-6 m-12 justify-between md:flex">
          <div className="flex-1">
            <div className="max-w-xs">
              <Image src={Logo} alt="Logo" className="w-32" />
              <p className="leading-relaxed  text-slate-950 mt-2 text-[16px] font-medium">
                Our vision is to provide convenience and help increase your
                sales business.
              </p>
            </div>
            <form onSubmit={(e) => e.preventDefault()}></form>
          </div>
          <div className="flex-1 mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0">
            {footerNavs.map((item, idx) => (
              <ul className="space-y-4" key={idx}>
                <h4 className="text-gray-800 font-semibold text-[20px]">
                  {item.label}
                </h4>
                {item.items.map((el, idx) => (
                  <li key={idx}>
                    <a
                      href={el.href}
                      className="hover:underline text-[16px] font-medium hover:text-indigo-600"
                    >
                      {el.name}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-8 py-6 border-t m-12 items-center justify-between sm:flex">
          <div className="mt-4 text-[14px] font-semibold sm:mt-0  text-slate-950">
            &copy; 2028 Morent All rights reserved
          </div>
          <div className="mt-6 sm:mt-0">
            <ul className="flex items-center space-x-4">
              <li className=" flex items-center justify-center text-[14px] font-semibold  text-slate-950">
                <a href="javascript:void()">Privacy & Policy</a>
              </li>
              <li className="flex items-center justify-center text-[14px] font-semibold  text-slate-950">
                <a href="javascript:void()">Terms & Condition</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
