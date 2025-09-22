import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const navigationItems = [
  { label: "Services", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Who we are", href: "#" },
  { label: "Find my match", href: "#" },
];

const rightNavigationItems = [
  { label: "Become a Partner", href: "#" },
  { label: "Write a Review", href: "#" },
];

const footerLinks = [
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

const featureCards = [
  {
    title: "Quality over Quantity",
    description:
      "Unlike existing directories, filled with unverified listings, we prioritize quality over quantity. Every partner is carefully vetted to ensure they match our criteria.",
    image: "/gradient-glass--18--2.png",
    isWide: true,
  },
  {
    title: "Trust & Transparency",
    description:
      "We ensure that any partner or software reviews pass through our stringent QA, to make sure that you can trust in the value of their service.",
    image: "/gradient-glass--13--2.png",
    isWide: false,
  },
  {
    title: "Personal Touch",
    description:
      "We don't just help you find the right partners — we guide you through the software landscape to make smart, future-ready decisions.",
    image: "/gradient-glass--13--2.png",
    isWide: false,
  },
];

export const ElementAboutUs = () => {
  return (
    <div className="bg-[#000002] overflow-hidden w-full min-w-[1920px] min-h-[4649px] relative">
      

      <img
        className="absolute top-[1106px] left-0 w-[467px] h-[467px] object-cover"
        alt="Pas rocket"
        src="/pas-rocket-1.png"
      />

      {/* <div className="absolute top-0 left-0 w-[1920px] h-[1300px]" /> */}

      <img
        className="absolute top-60 left-24 w-[1000px] h-[500px]"
        alt="Group"
        src="/the-globalitmarketplace-is-dedicated-to-bridging-the-gap-between.svg"
      />
{/* 
      <img
        className="absolute top-[1581px] left-[calc(50.00%_-_653px)] w-[1613px] h-[1645px]"
        alt="Image"
        src="/image.png"
      /> */}

      <img
        className="absolute top-[1581px] left-[calc(50.00%_-_653px)] w-[1613px] h-[1645px]"
        alt="Image"
        src="/image-1.png"
      />

      <img
        className="absolute top-[3375px] left-[calc(50.00%_-_639px)] w-[1599px] h-[1274px]"
        alt="Image"
        src="/image-2.png"
      />

      <div className="absolute top-[1165px] left-[1132px] w-[378px] [font-family:'Manrope',Helvetica] font-normal text-transparent text-xl tracking-[0] leading-5">
        <span className="text-[#eaeaea] leading-[30px]">The </span>
        <span className="font-bold text-[#eaeaea] leading-[30px]">
          GlobalITMarketplace
        </span>
        <span className="text-[#eaeaea] leading-[30px]"> grew from </span>
        <span className="font-bold text-[#1da1f2] leading-[30px]">
          Project Advisory Solutions
        </span>
        <span className="text-[#eaeaea] leading-[30px]">
          , a lead generation and tailored partner sourcing company in the UK,
          operated by our founder{" "}
        </span>
        <span className="font-bold text-[#1da1f2] leading-[30px]">
          Aiden Nohar
        </span>
        <span className="text-[#eaeaea] leading-[30px]">.</span>
      </div>

      <div className="absolute top-[1493px] left-[374px] w-[492px] [font-family:'Manrope',Helvetica] font-normal text-[#eaeaea] text-[32px] tracking-[0] leading-[44.8px]">
        While working with companies in the UK, we noticed something. UK
        companies are consistently overpaying for poorly matched software
        solutions, that end up costing time and money and not meeting their
        project requirements. <br />
        <br />
        So we decided to act. <br />
        Our solution? A curated directory of trusted SaaS partners from around
        the world and the tools to compare solutions based on the metrics that
        matter to you.
      </div>

      <div className="absolute top-[2302px] left-[1162px] w-[492px] [font-family:'Manrope',Helvetica] font-normal text-[#eaeaea] text-[32px] tracking-[0] leading-[44.8px]">
        The GlobalITMarketplace offers your teams the ability to make informed
        decisions when choosing software and find IT partners that meet your
        time & budget constraints, and if you&#39;re still struggling we
        offer free, live consultation calls to help you make the final decision
        with confidence.
        <br />
        <br />
        From fast-scaling startups, to established enterprises, we help decision
        makers across industries make smarter digital investments.
      </div>

      <img
        className="absolute top-[259px] left-[1258px] w-[662px] h-[837px] object-cover"
        alt="Planet"
        src="/plan2et02-1.png"
      />

      <img
        className="absolute top-[1112px] left-[856px] w-[264px] h-[264px] rounded-[95px] object-cover"
        alt="Rectangle"
        src="/rectangle-41370.png"
      />


      <img
        className="absolute top-[2358px] left-[418px] w-[416px] h-[426px] object-cover"
        alt="Gradient glass"
        src="/gradient-glass--17--2.png"
      />

      <img
        className="absolute top-[2589px] left-[608px] w-[339px] h-[358px] object-cover"
        alt="Gradient glass"
        src="/gradient-glass--20--2.png"
      />

      <section className="absolute top-[3178px] left-[calc(50.00%_-_601px)] w-[1210px] h-[761px]">
        <Card className="absolute top-0 left-0 w-[1202px] h-[278px] overflow-hidden rounded-[30px] border-[none] bg-[linear-gradient(132deg,rgba(16,16,16,1)_14%,rgba(22,21,21,0.29)_51%,rgba(156,178,255,0.19)_84%)] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[30px] before:[background:linear-gradient(142deg,rgba(64,64,64,1)_15%,rgba(16,16,16,0)_63%,rgba(64,64,64,0.25)_98%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <CardContent className="inline-flex flex-col h-[174px] items-start gap-5 absolute top-[52px] left-12">
            <h2 className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-white text-[40px] tracking-[-0.40px] leading-[64px]">
              Quality over Quantity
            </h2>
            <p className="relative flex items-center justify-center w-[716px] [font-family:'Manrope',Helvetica] font-normal text-[#efedfdb2] text-xl tracking-[0] leading-[30px]">
              Unlike existing directories, filled with unverified listings, we
              prioritize quality over quantity. Every partner is carefully
              vetted to ensure they match our criteria.
            </p>
          </CardContent>
          <img
            className="absolute top-0 left-[787px] w-[408px] h-[278px] object-cover"
            alt="Gradient glass"
            src="/gradient-glass--18--2.png"
          />
        </Card>

        <Card className="absolute top-[302px] left-0 w-[589px] h-[459px] rounded-[30px] border-[none] bg-[linear-gradient(41deg,rgba(16,16,16,1)_14%,rgba(22,21,21,0.29)_58%,rgba(156,178,255,0.19)_84%)] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[30px] before:[background:linear-gradient(142deg,rgba(64,64,64,1)_15%,rgba(16,16,16,0)_63%,rgba(64,64,64,0.25)_98%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <CardContent>
            <h3 className="absolute top-[228px] left-12 w-[461px] h-16 flex items-center justify-center [font-family:'Manrope',Helvetica] font-semibold text-white text-[40px] tracking-[-0.40px] leading-[64px]">
              Trust & Transparency
            </h3>
            <p className="absolute top-[312px] left-12 w-[484px] h-[90px] flex items-center justify-center [font-family:'Manrope',Helvetica] font-normal text-[#efedfdb2] text-xl tracking-[0] leading-[30px]">
              We ensure that any partner or software reviews pass through our
              stringent QA, to make sure that you can trust in the value of
              their service.
            </p>
            <img
              className="top-[65px] left-[50px] w-[122px] h-32 absolute object-cover"
              alt="Gradient glass"
              src="/gradient-glass--13--2.png"
            />
            <img
              className="top-[53px] left-[33px] w-[157px] h-[152px] absolute object-cover"
              alt="Gradient glass"
              src="/gradient-glass--13--2.png"
            />
          </CardContent>
        </Card>

        <Card className="absolute top-[302px] left-[613px] w-[589px] h-[459px] rounded-[30px] border-[none] bg-[linear-gradient(41deg,rgba(16,16,16,1)_14%,rgba(22,21,21,0.29)_58%,rgba(156,178,255,0.19)_84%)] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[30px] before:[background:linear-gradient(142deg,rgba(64,64,64,1)_15%,rgba(16,16,16,0)_63%,rgba(64,64,64,0.25)_98%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <CardContent>
            <h3 className="absolute top-[228px] left-12 w-[461px] h-16 flex items-center justify-center [font-family:'Manrope',Helvetica] font-semibold text-white text-[40px] tracking-[-0.40px] leading-[64px]">
              Personal Touch
            </h3>
            <p className="absolute top-[307px] left-12 w-[490px] h-[90px] flex items-center justify-center [font-family:'Manrope',Helvetica] font-normal text-[#efedfdb2] text-xl tracking-[0] leading-[30px]">
              We don&apos;t just help you find the right partners — we guide you
              through the software landscape to make smart, future-ready
              decisions.
            </p>
          </CardContent>
        </Card>
      </section>

      <img
        className="absolute top-[3533px] left-[1019px] w-40 h-[140px] object-cover"
        alt="Gradient glass"
        src="/gradient-glass--19--1.png"
      />

      <img
        className="absolute top-[3546px] left-[1037px] w-[127px] h-[124px] object-cover"
        alt="Gradient glass"
        src="/gradient-glass--23--1.png"
      />

      <header className="flex flex-col w-[1920px] items-center gap-3 absolute top-0 left-0">
        <nav className="flex items-center justify-between px-[200px] py-[30px] relative self-stretch w-full flex-[0_0_auto]">
          <img
            className="relative w-[125.65px] h-12"
            alt="Group"
            src="/group.png"
          />

          <div className="flex w-[226px] h-14 items-center gap-7 relative">
            <Button
              variant="ghost"
              className="relative flex items-center justify-center w-fit [font-family:'Manrope',Helvetica] font-semibold text-white text-lg text-right tracking-[-0.18px] leading-5 whitespace-nowrap h-auto"
            >
              Log in
            </Button>

            <div className="flex flex-col w-[148px] items-start gap-2.5 relative">
              <Button className="flex h-14 items-center justify-center gap-[110px] px-8 py-6 relative self-stretch w-full bg-[#eaeaea0d] rounded-[56px] border-[none] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[56px] before:[background:linear-gradient(142deg,rgba(75,95,162,1)_29%,rgba(16,16,16,0)_74%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                <span className="relative flex items-center justify-center w-fit mt-[-7.00px] mb-[-5.00px] [font-family:'Manrope',Helvetica] font-semibold text-white text-lg tracking-[-0.18px] leading-5 whitespace-nowrap">
                  Sign up
                </span>
              </Button>
            </div>
          </div>
        </nav>

        <img
          className="relative self-stretch w-full h-0.5"
          alt="Line"
          src="/line-47.svg"
        />

        <nav className="flex items-center justify-between px-[200px] py-0 relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex flex-col h-12 items-start justify-center gap-2.5 px-0 py-5 relative flex-[0_0_auto] rounded-[100px]">
            <div className="inline-flex items-center gap-10 relative flex-[0_0_auto] mt-[-6.00px] mb-[-6.00px]">
              {navigationItems.map((item, index) => (
                <div
                  key={index}
                  className="inline-flex items-center relative flex-[0_0_auto]"
                >
                  <Button
                    variant="ghost"
                    className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-normal text-[#1da1f2] text-base tracking-[0.16px] leading-5 whitespace-nowrap h-auto"
                  >
                    {item.label}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="inline-flex flex-col h-12 items-end justify-center gap-2.5 px-0 py-5 relative flex-[0_0_auto] rounded-[100px]">
            <div className="inline-flex items-center justify-center gap-10 relative flex-[0_0_auto] mt-[-6.00px] mb-[-6.00px]">
              {rightNavigationItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-normal text-[#1da1f2] text-base text-right tracking-[0.16px] leading-5 whitespace-nowrap h-auto"
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <footer className="absolute left-[calc(50.00%_-_960px)] bottom-0 w-[1920px] h-[564px] bg-[#0d0d0d]">
        <img
          className="absolute top-10 left-[85px] w-[1746px] h-[524px]"
          alt="Group"
          src="/group-38620.png"
        />

        <div className="absolute top-[110px] left-[408px] w-[1080px] h-[412px] flex flex-col">
          <div className="flex w-[1080px] h-[319px] relative items-center gap-[126px]">
            <div className="flex flex-col w-[335px] items-start gap-6 relative">
              <img
                className="relative w-[125.65px] h-12"
                alt="Group"
                src="/group-1.png"
              />

              <p className="relative flex items-center justify-center self-stretch [font-family:'Manrope',Helvetica] font-normal text-[#efedfdb2] text-[15px] tracking-[0] leading-[22.5px]">
                Sponsored by Project Advisory Solutions, we are a global hub for
                discovering trusted IT and software partners.
                <br />
                <br /> We connect companies to opportunities in high-value
                markets, helping you cut search time, unlock new solutions, and
                grow with confidence.
              </p>

              <div className="relative w-[163px] h-[19px]">
                <Button
                  variant="ghost"
                  className="inline-flex h-[19px] items-center gap-1 relative h-auto"
                >
                  <span className="relative flex items-center justify-center w-fit mt-[-2.50px] mb-[-0.50px] [font-family:'Manrope',Helvetica] font-semibold text-[#1da1f2] text-sm text-center tracking-[0.14px] leading-[22px] whitespace-nowrap">
                    Learn more about us
                  </span>
                  <img
                    className="relative w-5 h-5 mt-[-0.50px] mb-[-0.50px]"
                    alt="Arrow forward"
                    src="/arrow-forward.svg"
                  />
                </Button>
              </div>

              <div className="relative w-[249px] h-[19px]">
                <Button
                  variant="ghost"
                  className="inline-flex h-[19px] items-center gap-1 relative h-auto"
                >
                  <span className="relative flex items-center justify-center w-fit mt-[-2.50px] mb-[-0.50px] [font-family:'Manrope',Helvetica] font-semibold text-[#1da1f2] text-sm text-center tracking-[0.14px] leading-[22px] whitespace-nowrap">
                    About Project Advisory Solutions
                  </span>
                  <img
                    className="relative w-5 h-5 mt-[-0.50px] mb-[-0.50px]"
                    alt="Arrow forward"
                    src="/arrow-forward.svg"
                  />
                </Button>
              </div>
            </div>

            <div className="flex items-start justify-between relative flex-1 grow">
              {footerLinks.map((section, index) => (
                <div
                  key={index}
                  className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-normal text-[#1da1f2] text-base tracking-[0.16px] leading-[44px]"
                >
                  {section.title}
                  <br />
                  {section.items.map((item, itemIndex) => (
                    <span key={itemIndex}>
                      {item}
                      {itemIndex < section.items.length - 1 && <br />}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="h-px mt-[37.0px] bg-[url(/line-58.svg)] bg-cover bg-[50%_50%]" />

          <div className="flex w-[1080px] h-5 relative mt-[35px] items-center justify-between">
            <div className="relative w-[304px] h-5">
              <Button
                variant="ghost"
                className="absolute top-0 left-0 h-5 flex items-center justify-center [font-family:'Inter',Helvetica] font-normal text-[#efedfd99] text-[15px] tracking-[0.15px] leading-5 whitespace-nowrap h-auto"
              >
                Privacy Policy
              </Button>
              <Button
                variant="ghost"
                className="absolute top-0 left-[154px] h-5 flex items-center justify-center [font-family:'Inter',Helvetica] font-normal text-[#efedfd99] text-[15px] tracking-[0.15px] leading-5 whitespace-nowrap h-auto"
              >
                Terms of Conditions
              </Button>
            </div>

            <div className="relative w-fit mt-[-1.00px] flex items-center justify-center [font-family:'Inter',Helvetica] font-normal text-[#efedfd99] text-[15px] tracking-[0.15px] leading-5 whitespace-nowrap">
              Copyrights GlobalITMarketplace 2025
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};