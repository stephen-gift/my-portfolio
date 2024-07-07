import React from "react";
import { motion } from "framer-motion";
import Template from "@/app/template";
import { BGCircles } from "./templates.tsx";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <BGCircles>
      <div className="relative  flex justify-center items-center">
        <div className="absolute border border-[#333] rounded-full h-[100px] w-[100px] mt-52 animate-ping"></div>
        <div className="absolute border border-[#333] rounded-full h-[200px] w-[200px] mt-52"></div>
        <div className="absolute border border-[#333] rounded-full h-[300px] w-[300px] mt-52"></div>
        <div className="absolute border border-[#F7AB0A] rounded-full opacity-20 h-[450px] w-[450px] mt-52 animate-pulse"></div>
        <div className="absolute border border-[#333] rounded-full h-[600px] w-[600px] mt-52   "></div>
      </div>
    </BGCircles>
  );
}
