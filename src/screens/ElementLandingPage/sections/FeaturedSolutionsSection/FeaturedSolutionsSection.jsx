import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeaturedSolutionsSection = () => {
  const statisticCards = [
    {
      statistic: "58%",
      color: "text-[#fd9ff7]",
      description: " of businesses regret software buys.",
      subtitle: "See how you can make the right choice."
    },
    {
      statistic: "90%+",
      color: "text-[#1dffbf]",
      description: " believe tech boosts productivity.",
      subtitle: "See to find the vendors you need."
    },
    {
      statistic: "33%",
      color: "text-[#fd9ff7]",
      description: " face issues training new users.",
      subtitle: "You Don't Have To."
    },
  ];

  const benefitCards = [
    {
      id: "save-time",
      title: "Save time",
      description:
        "Skip weeks of research. Our platform aggregates real user reviews, pricing data, feature comparisons and key metrics to help you make informed decisions in a fraction of the time.",
      image: "/gradient-glass--17--1.png",
      isLarge: true,
    },
    {
      id: "save-money",
      title: "Save money",
      description:
        "Find cost-effective software solutions that match your scope and budget, including high-quality global options you may not have considered.",
      image: "/gradient-glass--20--1.png",
      isLarge: false,
    },
    {
      id: "save-effort",
      title: "Save effort",
      description:
        "We've done the hard work! Shortlist, compare and connect with partners that are ready to deliver exactly what you need.",
      image: "/gradient-glass--18--1.png",
      isLarge: false,
    },
  ];

  return (
    <section className="flex flex-col w-full items-center relative">
      {/* Statistics Section with Background */}
      <div 
        className="w-full py-20 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: 'url(/background-image.png)' }}
      >
        <div className="flex flex-col items-center gap-16 w-full max-w-7xl mx-auto px-4">
          <h2 className="[font-family:'Manrope',Helvetica] font-semibold text-[#eaeaea] text-6xl text-center tracking-[-0.60px] leading-[76px] max-w-[857px]">
            Objective insights to drive
            <br />
            business impact with software
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1200px]">
            {statisticCards.map((card, index) => (
              <Card
                key={index}
                className="bg-[#ffffff08] rounded-[20px] border-[none] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[20px] before:[background:linear-gradient(142deg,rgba(64,64,64,0.2)_15%,rgba(16,16,16,0)_63%,rgba(64,64,64,0.1)_98%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative"
              >
                <CardContent className="flex flex-col items-start justify-center gap-4 px-8 py-8">
                  <div className="relative w-full [font-family:'Manrope',Helvetica] font-normal text-transparent text-[24px] leading-[normal]">
                    <span
                      className={`font-extrabold ${card.color} tracking-[-0.10px]`}
                    >
                      {card.statistic}
                    </span>
                    <span className="font-semibold text-white tracking-[-0.10px]">
                      {card.description}
                    </span>
                  </div>
                  <p className="[font-family:'Manrope',Helvetica] font-normal text-[#efedfdb2] text-sm tracking-[0] leading-5">
                    {card.subtitle}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="flex flex-col items-center gap-14 w-full py-16 bg-[#000002]">
        <div className="flex flex-col items-center gap-6">
          <h2 className="[font-family:'Manrope',Helvetica] font-semibold text-[#eaeaea] text-6xl text-center tracking-[-0.60px] leading-[64px] whitespace-nowrap">
            A better way to...
          </h2>

          <p className="max-w-[600px] [font-family:'Manrope',Helvetica] font-normal text-[#efedfdb2] text-lg text-center tracking-[0] leading-6">
            Discover how GlobalITMarket gives you the tools to make informed software decisions with or without technical knowledge
          </p>
        </div>

        <div className="flex flex-col gap-6 w-full max-w-[1316px] px-4">
          {/* Large Save Time Card */}
          <Card className="w-full h-[278px] rounded-[30px] border-[none] bg-[linear-gradient(132deg,rgba(16,16,16,1)_14%,rgba(22,21,21,0.29)_51%,rgba(156,178,255,0.19)_84%)] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[30px] before:[background:linear-gradient(142deg,rgba(64,64,64,1)_15%,rgba(16,16,16,0)_63%,rgba(64,64,64,0.25)_98%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative overflow-hidden">
            <CardContent className="flex items-center justify-between h-full p-12">
              <div className="flex flex-col gap-5 max-w-[716px]">
                <h3 className="[font-family:'Manrope',Helvetica] font-semibold text-white text-[40px] tracking-[-0.40px] leading-[64px]">
                  {benefitCards[0].title}
                </h3>
                <p className="[font-family:'Manrope',Helvetica] font-normal text-[#efedfdb2] text-xl tracking-[0] leading-[30px]">
                  {benefitCards[0].description}
                </p>
              </div>
              <img
                className="w-[296px] h-[236px] object-cover flex-shrink-0"
                alt="Gradient glass"
                src={benefitCards[0].image}
              />
            </CardContent>
          </Card>

          {/* Bottom Two Cards */}
          <div className="grid grid-cols-2 gap-6">
            {benefitCards.slice(1).map((card, index) => (
              <Card
                key={card.id}
                className="h-[459px] rounded-[30px] border-[none] bg-[linear-gradient(41deg,rgba(16,16,16,1)_14%,rgba(22,21,21,0.29)_58%,rgba(156,178,255,0.19)_84%)] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[30px] before:[background:linear-gradient(142deg,rgba(64,64,64,1)_15%,rgba(16,16,16,0)_63%,rgba(64,64,64,0.25)_98%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative"
              >
                <CardContent className="flex flex-col justify-between h-full p-12">
                  <div className="flex flex-col gap-6">
                    <img
                      className={`object-cover ${index === 0 ? "w-28 h-[120px]" : "w-[120px] h-[120px]"}`}
                      alt="Gradient glass"
                      src={card.image}
                    />
                    <h3 className="[font-family:'Manrope',Helvetica] font-semibold text-white text-[40px] tracking-[-0.40px] leading-[64px]">
                      {card.title}
                    </h3>
                  </div>
                  <p className="[font-family:'Manrope',Helvetica] font-normal text-[#efedfdb2] text-xl tracking-[0] leading-[30px]">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
    
  );
};