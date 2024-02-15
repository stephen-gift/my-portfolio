import Template, { AboutImgTemp, AboutPageTemp } from "@/app/template";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <AboutPageTemp>
      <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          About
        </h3>
        <AboutImgTemp
          alt="Stephen"
          height={200}
          src={"https://avatars.githubusercontent.com/u/79639335?v=4"}
          width={200}
        />

        <div className="space-y-10 px-0 md:px-10">
          <h4 className="text-3xl font-semibold">
            Here is a{" "}
            <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
            background
          </h4>
          <p className="text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
            corrupti autem, nemo atque sapiente magnam error praesentium!
            Quaerat deserunt veritatis consequatur nulla porro. Quae numquam
            error dignissimos unde maiores expedita?
          </p>
        </div>
      </div>
    </AboutPageTemp>
  );
};

export default About;
