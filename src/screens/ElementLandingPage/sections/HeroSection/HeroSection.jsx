import { CheckCircleIcon, SearchIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Input } from "../../../../components/ui/input";

export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center px-4 pt-8">
      {/* Promise Badge */}
      <Badge
        variant="secondary"
        className="inline-flex h-[41px] items-center justify-center gap-2.5 px-8 py-1.5 mb-12 bg-[#eaeaea12] rounded-[100px] border-none backdrop-blur-[22.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(22.5px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[100px] before:[background:linear-gradient(142deg,rgba(75,95,162,1)_29%,rgba(16,16,16,0)_74%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
      >
        <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
          <CheckCircleIcon className="relative w-5 h-5 text-[#1da1f2]" />
          <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-extrabold text-[#1da1f2] text-[13px] tracking-[0] leading-[24.7px] whitespace-nowrap">
            Our promise
          </div>
        </div>
        <div className="relative w-fit [font-family:'Manrope',Helvetica] font-medium text-white text-[13px] tracking-[0] leading-[24.7px] whitespace-nowrap">
          We are committed to ensuring that our platform never becomes a pay-to-win comparison site
        </div>
      </Badge>

      {/* Main Heading */}
      <div className="text-center mb-8 max-w-4xl">
        <h1 className="[font-family:'Manrope',Helvetica] font-semibold text-6xl tracking-[-0.60px] leading-[76px] mb-6">
          <span className="text-white">Find the </span>
          <span className="bg-gradient-to-r from-[#e59cff] via-[#ba9cff] to-[#9cb2ff] bg-clip-text text-transparent">
            Best
          </span>
          <span className="text-white"> Global Software</span>
          <br />
          <span className="text-white">Solutions & Providers</span>
        </h1>
        
        <p className="[font-family:'Manrope',Helvetica] font-medium text-[#ffffffb2] text-xl text-center tracking-[0] leading-7 max-w-3xl mx-auto">
          Global IT Marketplace — Smarter SaaS & IT matchmaking that saves time, money, and effort.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative w-[600px] mb-12">
        <div className="relative">
          <Input
            type="text"
            placeholder="I'm looking for Digital transformation"
            className="w-full h-14 px-6 pr-14 bg-[#1a1a2e] border border-[#333366] rounded-full text-white placeholder:text-[#888] focus:border-[#4a4a8a] focus:ring-0 focus:outline-none text-base"
          />
          <SearchIcon className="absolute right-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#888]" />
        </div>
      </div>

      {/* Globe Image */}
      <div className="relative mb-8 flex-1 flex items-center justify-center">
        <img
          className="w-[700px] h-auto object-contain"
          alt="Global network visualization"
          src="/group-47274.png"
        />
      </div>

      {/* Bottom Text */}
      <p className="[font-family:'Manrope',Helvetica] font-medium text-[#d6d6d6] text-lg text-center tracking-[0] leading-[25px] mb-6">
        Compare partners providing solutions such as
      </p>
      

      

    </section>
  );
};