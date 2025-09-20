import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

export const FooterSection = () => {
  const navigationLinks = [
    {
      title: "Browse all Partners",
      items: ["FAQs", "Find my match"],
    },
    {
      title: "Become a Partner",
      items: ["Write a Review"],
    },
    {
      title: "Facebook",
      items: ["Instagram", "LinkedIn"],
    },
  ];

  const footerLinks = [
    { text: "Privacy Policy" },
    { text: "Terms of Conditions" },
  ];

  return (
    <footer className="w-full bg-[#0d0d0d] relative">
      <img
        className="absolute top-10 left-[85px] w-[1746px] h-[524px]"
        alt="Group"
        src="/group-38620-1.png"
      />

      <div className="relative z-10 max-w-[1080px] mx-auto px-4 py-[110px]">
        <div className="flex flex-col lg:flex-row gap-[126px] mb-[37px]">
          <div className="flex flex-col w-full lg:w-[335px] gap-6">
            <img className="w-[125.65px] h-12" alt="Group" src="/group-1.png" />

            <p className="[font-family:'Manrope',Helvetica] font-normal text-[#efedfdb2] text-[15px] leading-[22.5px]">
              Sponsored by Project Advisory Solutions, we are a global hub for
              discovering trusted IT and software partners.
              <br />
              <br /> We connect companies to opportunities in high-value
              markets, helping you cut search time, unlock new solutions, and
              grow with confidence.
            </p>

            <Button
              variant="link"
              className="justify-start p-0 h-auto text-[#1da1f2] [font-family:'Manrope',Helvetica] font-semibold text-sm tracking-[0.14px] leading-[22px]"
            >
              Learn more about us
              <ArrowRightIcon className="w-5 h-5 ml-1" />
            </Button>

            <Button
              variant="link"
              className="justify-start p-0 h-auto text-[#1da1f2] [font-family:'Manrope',Helvetica] font-semibold text-sm tracking-[0.14px] leading-[22px]"
            >
              About Project Advisory Solutions
              <ArrowRightIcon className="w-5 h-5 ml-1" />
            </Button>
          </div>

          <div className="flex flex-1 justify-between gap-8">
            {navigationLinks.map((column, index) => (
              <div key={index} className="flex flex-col">
                <Button
                  variant="link"
                  className="justify-start p-0 h-auto mb-2 text-[#1da1f2] [font-family:'Manrope',Helvetica] font-normal text-base tracking-[0.03px] leading-[44px]"
                >
                  {column.title}
                </Button>
                {column.items.map((item, itemIndex) => (
                  <Button
                    key={itemIndex}
                    variant="link"
                    className="justify-start p-0 h-auto text-[#1da1f2] [font-family:'Manrope',Helvetica] font-normal text-base tracking-[0.03px] leading-[44px]"
                  >
                    {item}
                  </Button>
                ))}
              </div>
            ))}
          </div>
        </div>

        <Separator className="bg-[url(/line-58.svg)] bg-cover bg-[50%_50%] h-px" />

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-[35px]">
          <div className="flex flex-wrap gap-8">
            {footerLinks.map((link, index) => (
              <Button
                key={index}
                variant="link"
                className="p-0 h-auto text-[#efedfd99] [font-family:'Inter',Helvetica] font-normal text-[15px] tracking-[0.15px] leading-5"
              >
                {link.text}
              </Button>
            ))}
          </div>

          <p className="text-[#efedfd99] [font-family:'Inter',Helvetica] font-normal text-[15px] tracking-[0.15px] leading-5 whitespace-nowrap">
            Copyrights GlobalITMarketplace 2025
          </p>
        </div>
      </div>
    </footer>
  );
};