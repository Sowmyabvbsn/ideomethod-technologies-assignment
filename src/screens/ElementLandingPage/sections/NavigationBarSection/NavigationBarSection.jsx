import React from "react";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

export const NavigationBarSection = () => {
  const leftNavItems = [
    { label: "Services", href: "#services" },
    { label: "FAQs", href: "#faqs" },
    { label: "Who we are", href: "#who-we-are" },
    { label: "Find my match", href: "#find-my-match" },
  ];

  const rightNavItems = [
    { label: "Become a Partner", href: "#become-partner" },
    { label: "Write a Review", href: "#write-review" },
  ];

  return (
    <nav className="flex flex-col w-full items-center gap-3 relative">
      <div className="flex items-center justify-between px-[200px] py-[30px] relative self-stretch w-full flex-[0_0_auto]">
        <img
          className="relative w-[125.65px] h-12"
          alt="Group"
          src="/group.png"
        />

        <div className="flex w-[226px] h-14 items-center gap-7 relative">
          <Button
            variant="ghost"
            className="relative flex items-center justify-center w-fit [font-family:'Manrope',Helvetica] font-semibold text-white text-lg text-right tracking-[-0.18px] leading-5 whitespace-nowrap h-auto p-0 hover:bg-transparent"
          >
            Log in
          </Button>

          <div className="flex flex-col w-[148px] items-start gap-2.5 relative">
            <Button className="h-14 px-8 py-6 self-stretch w-full bg-[#eaeaea0d] flex items-center justify-center gap-[110px] relative rounded-[56px] border-[none] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[56px] before:[background:linear-gradient(142deg,rgba(75,95,162,1)_29%,rgba(16,16,16,0)_74%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:bg-[#eaeaea0d]">
              <span className="relative flex items-center justify-center w-fit mt-[-7.00px] mb-[-5.00px] [font-family:'Manrope',Helvetica] font-semibold text-white text-lg tracking-[-0.18px] leading-5 whitespace-nowrap">
                Sign up
              </span>
            </Button>
          </div>
        </div>
      </div>

      <Separator className="relative self-stretch w-full h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="flex items-center justify-between px-[200px] py-0 relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex flex-col h-12 items-start justify-center gap-2.5 px-0 py-5 relative flex-[0_0_auto] rounded-[100px]">
          <div className="inline-flex items-center gap-10 relative flex-[0_0_auto] mt-[-6.00px] mb-[-6.00px]">
            {leftNavItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="inline-flex items-center relative flex-[0_0_auto] h-auto p-0 hover:bg-transparent"
              >
                <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-normal text-[#1da1f2] text-base tracking-[0.16px] leading-5 whitespace-nowrap hover:text-[#1da1f2]/80 transition-colors">
                  {item.label}
                </span>
              </Button>
            ))}
          </div>
        </div>

        <div className="inline-flex flex-col h-12 items-end justify-center gap-2.5 px-0 py-5 relative flex-[0_0_auto] rounded-[100px]">
          <div className="justify-center inline-flex items-center gap-10 relative flex-[0_0_auto] mt-[-6.00px] mb-[-6.00px]">
            {rightNavItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="relative flex items-center justify-center w-fit h-auto p-0 hover:bg-transparent"
              >
                <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-normal text-[#1da1f2] text-base text-right tracking-[0.16px] leading-5 whitespace-nowrap hover:text-[#1da1f2]/80 transition-colors">
                  {item.label}
                </span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};