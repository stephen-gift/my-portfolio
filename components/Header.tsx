import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Template from "@/app/template";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <Template>
        <div className="flex flex-row items-center">
          {/* Social icons */}
          <SocialIcon
            url="www.youtube.com"
            fgColor=" gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="www.youtube.com"
            fgColor=" gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="www.youtube.com"
            fgColor=" gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="www.youtube.com"
            fgColor=" gray"
            bgColor="transparent"
          />
        </div>
      </Template>

      <Template transition={{duration:1}}>
        <div className="flex flex-row items-center text-gray-300 crusor pointer">
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400 ">
            Get in Touch
          </p>
        </div>
      </Template>
    </header>
  );
};

export default Header;
