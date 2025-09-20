import { CheckIcon, ZapIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const features = [
  {
    icon: "/0004.png",
    title: "Personalized Matching",
    description:
      "Get tailored recommendations by company size, industry, and needs.",
  },
  {
    icon: "/0007.png",
    title: "Quick & Easy",
    description:
      "Complete in 5–7 minutes with our simple, intuitive interface.",
  },
  {
    icon: "/0010.png",
    title: "Expert Insights",
    description:
      "Receive curated recommendations with detailed comparison reports",
  },
];

const benefits = [
  "Personalized software recommendations",
  "Comparison insights",
  "Option to book free consultation call",
  "Access to exclusive vendor offers",
];

export const SolutionsOverviewSection = () => {
  return (
  <>
  <br/>
  <br/>
  <section className="flex flex-col items-center w-full relative gap-16">
      {/* Title Section */}
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="max-w-[1054px] mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#eaeaea] text-6xl text-center tracking-[-0.60px] leading-[75px]">
          Not sure what you&apos;re looking for?
        </h1>
        <p className="max-w-[934px] [font-family:'Manrope',Helvetica] font-medium text-[#efedfdb2] text-xl text-center tracking-[0] leading-7">
          Tell us what you need. We&apos;ll match you with the right software and partner - at lightning speed.
        </p>
      </div>

      {/* Solutions Card */}
      <div className="w-[800px] bg-[#eaeaea0d] rounded-[28px] border-[none] backdrop-blur-[19px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(19px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[28px] before:[background:linear-gradient(142deg,rgba(75,95,162,1)_29%,rgba(16,16,16,0)_74%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
        <div className="flex flex-col items-center gap-8 px-12 py-10">
          <div className="flex flex-col w-[704px] items-center gap-7">
            <div className="flex flex-col w-[569px] items-center gap-6">
              <div className="flex flex-col items-center gap-6 w-full">
                <h2 className="mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-white text-2xl text-center tracking-[0] leading-8">
                  Tell us what you need and we&apos;ll match you to the perfect
                  solution for your company
                </h2>
              </div>
            </div>

            <div className="flex items-start gap-7 p-2.5 w-full">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-4 flex-1"
                >
                  {feature.icon === "/0004.png" ? (
                    <div className="w-10 h-10 bg-[url(/0004.png)] bg-cover bg-[50%_50%]" />
                  ) : (
                    <img
                      className="w-10 h-10 object-cover"
                      alt="Feature icon"
                      src={feature.icon}
                    />
                  )}

                  <div className="flex flex-col items-center gap-2 w-full">
                    <h3 className="mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-white text-base text-center tracking-[0] leading-[25px]">
                      {feature.title}
                    </h3>

                    <p className="[font-family:'Manrope',Helvetica] font-medium text-[#d6d6d6] text-xs text-center tracking-[0] leading-[18px]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Card className="w-[704px] bg-[#ececf00d] rounded-xl shadow-[1px_2px_2px_#0000000d] border-none">
              <CardContent className="px-6 py-4">
                <h3 className="mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-white text-base tracking-[0] leading-[25px] mb-2">
                  What you&apos;ll get:
                </h3>

                <div className="px-0 py-2.5">
                  <div className="h-11 flex flex-col gap-2">
                    <div className="flex w-[656px] items-start justify-between">
                      <div className="flex w-[277px] items-center gap-2.5">
                        <CheckIcon className="w-4 h-4 text-white" />
                        <span className="w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-white text-xs text-center tracking-[0] leading-[18px] whitespace-nowrap">
                          {benefits[0]}
                        </span>
                      </div>

                      <div className="flex w-[277px] items-center gap-2.5">
                        <CheckIcon className="w-4 h-4 text-white" />
                        <span className="w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-white text-xs text-center tracking-[0] leading-[18px] whitespace-nowrap">
                          {benefits[1]}
                        </span>
                      </div>
                    </div>

                    <div className="flex w-[656px] items-start justify-between">
                      <div className="flex w-[277px] items-center gap-2.5">
                        <CheckIcon className="w-4 h-4 text-white" />
                        <span className="w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-white text-xs text-center tracking-[0] leading-[18px] whitespace-nowrap">
                          {benefits[2]}
                        </span>
                      </div>

                      <div className="flex w-[277px] items-center gap-2.5">
                        <CheckIcon className="w-4 h-4 text-white" />
                        <span className="w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-white text-xs text-center tracking-[0] leading-[18px] whitespace-nowrap">
                          {benefits[3]}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Button className="w-[400px] h-12 px-8 py-0 bg-[linear-gradient(90deg,rgba(229,156,255,0.36)_0%,rgba(186,156,255,0.36)_50%,rgba(156,178,255,0.36)_100%)] rounded-[56px] border-[none] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[56px] before:[background:linear-gradient(142deg,rgba(75,95,162,1)_29%,rgba(16,16,16,0)_74%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:bg-[linear-gradient(90deg,rgba(229,156,255,0.46)_0%,rgba(186,156,255,0.46)_50%,rgba(156,178,255,0.46)_100%)]">
            <div className="flex w-[220px] items-center justify-center gap-1">
              <span className="flex items-center justify-center w-fit mt-[-1.00px] bg-[linear-gradient(90deg,rgba(229,156,255,1)_0%,rgba(186,156,255,1)_50%,rgba(156,178,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Manrope',Helvetica] font-semibold text-transparent text-base tracking-[-0.16px] leading-5 whitespace-nowrap">
                Get started
              </span>

              <ZapIcon className="w-5 h-5 text-[#e59cff]" />
            </div>
          </Button>
        </div>
      </div>
    </section>
  </>
    
  );
};