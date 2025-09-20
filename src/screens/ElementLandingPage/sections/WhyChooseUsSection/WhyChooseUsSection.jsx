import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Demetria Gills",
    handle: "@Demetria",
    avatar: "/image-1.png",
    content:
      "Using @GlobalITMarket I was able to connect with companies that could help with my software needs.",
  },
  {
    id: 2,
    name: "Fabrizio Reandi",
    handle: "@Fabrizio",
    avatar: "/image-2.png",
    content:
      "Shortly after I expressed interest in finding software on the @GlobalITMarket website, I got to set up a face to face meeting with someone who could recommend software based on my search.",
  },
  {
    id: 3,
    name: "Thomas Rose",
    handle: "@Thomas",
    avatar: "/image-3.png",
    content:
      "We loved not having to stress over so many options to consider. We were pleased with our choices, and ended up finding the perfect software that has such a helpful and kind team.",
  },
];

const paginationDots = [{ active: true }, { active: false }, { active: false }];

export const WhyChooseUsSection = () => {
  return (
    <section className="relative w-full">
      <div className="relative w-full h-[799px]">
        <div className="absolute top-0 left-0 w-full h-[597px] bg-[#000002]" />

        <div className="absolute top-[61px] left-1/2 transform -translate-x-1/2 w-[746px] h-[738px] bg-[url(/exclude.png)] bg-[100%_100%]" />

        <div className="flex items-start gap-7 absolute top-[320px] left-1/2 transform -translate-x-1/2">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="relative w-[310px] bg-[#eaeaea0d] rounded-[20px] border-none backdrop-blur-[27.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(27.5px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[20px] before:[background:linear-gradient(156deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
            >
              <CardContent className="flex flex-col items-start gap-8 p-8">
                <div className="flex items-center gap-4">
                  <Avatar className="w-11 h-11">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback className="bg-gray-300 text-gray-600">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <div className="[font-family:'Manrope',Helvetica] font-medium text-[#f4f0ff] text-base tracking-[0.16px] leading-6">
                      {testimonial.name}
                    </div>
                    <div className="[font-family:'Manrope',Helvetica] font-normal text-[#efedfd99] text-sm tracking-[0.14px] leading-5">
                      {testimonial.handle}
                    </div>
                  </div>
                </div>

                <div className="[font-family:'Manrope',Helvetica] font-normal text-[15px] tracking-[-0.15px] leading-[22.5px]">
                  {testimonial.content
                    .split("@GlobalITMarket")
                    .map((part, index) => (
                      <React.Fragment key={index}>
                        <span className="text-[#efedfdb2]">{part}</span>
                        {index <
                          testimonial.content.split("@GlobalITMarket").length -
                            1 && (
                          <span className="text-[#1da1f2]">
                            @GlobalITMarket
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="absolute top-[150px] left-1/2 transform -translate-x-1/2 w-[601px] h-[116px] flex flex-col items-center gap-6">
          <h2 className="[font-family:'Manrope',Helvetica] font-semibold text-[#eaeaea] text-6xl text-center tracking-[-0.60px] leading-[64px]">
            Why GlobalITMarket?
          </h2>

          <p className="[font-family:'Inter',Helvetica] font-normal text-[#efedfdb2] text-xl text-center tracking-[0.20px] leading-7">
            Here&apos;s what people are saying about us
          </p>
        </div>
      </div>

      <div className="flex w-[140px] h-5 items-center justify-between absolute top-[680px] left-1/2 transform -translate-x-1/2">
        <Button
          variant="ghost"
          size="icon"
          className="w-6 h-6 p-0 hover:bg-transparent"
        >
          <ChevronLeftIcon className="w-6 h-6 text-white" />
        </Button>

        <div className="inline-flex items-center gap-4">
          {paginationDots.map((dot, index) => (
            <div
              key={index}
              className={`w-2.5 h-2.5 rounded-[5px] ${
                dot.active ? "bg-[#ffffffb2]" : "bg-[#70707080]"
              }`}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="w-6 h-6 p-0 hover:bg-transparent"
        >
          <ChevronRightIcon className="w-6 h-6 text-white" />
        </Button>
      </div>
    </section>
  );
};